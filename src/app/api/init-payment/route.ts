import { db, TicketPrice } from "@/lib/db";
import { sslcommerz } from "@/lib/sslcommerz";
import { TicketStatus } from "@prisma/client";
import { v4 } from "uuid";
import { z } from "zod";

const ticketSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  email: z.string({ required_error: "Email is required" }).email(),
  phone: z.string({ required_error: "Phone is required" }),
  tshirtSize: z.enum(["S", "M", "L", "XL", "XXL", "XXXL"], {
    required_error: "T-shirt size is required",
  }),
});

export async function POST(req: Request) {
  try {
    const { success, data: body } = ticketSchema.safeParse(await req.json());
    if (!success) {
      return new Response("Invalid request body", { status: 400 });
    }

    // Step 1: Use a transaction to prevent race conditions
    const [soldTicketsCount, existingTicket] = await db.$transaction([
      db.ticket.count({ where: { status: TicketStatus.success } }),
      db.ticket.findUnique({ where: { email: body.email } }),
    ]);

    // Step 2: Check if the ticket sales limit has been reached
    if (soldTicketsCount >= 150) {
      return new Response(
        "Ticket sales limit reached. No more tickets available.",
        { status: 400 }
      );
    }

    // Step 3: Check if the email has already purchased a ticket
    if (existingTicket && existingTicket.status === TicketStatus.success) {
      return new Response("This email has already purchased a ticket.", {
        status: 400,
      });
    }

    // Step 4: Create payment request data for SSLCommerz
    const domain = process.env.DOMAIN || "http://localhost:3000";
    const data = {
      total_amount: TicketPrice,
      product_amount: TicketPrice,
      currency: "BDT",
      shipping_method: "NO",
      tran_id: v4(),
      success_url: `${domain}/api/payment-callback`,
      fail_url: `${domain}/api/payment-callback`,
      cancel_url: `${domain}/api/payment-callback`,
      cus_name: body.name,
      cus_email: body.email,
      cus_phone: body.phone,
      product_name: "The SEO Event",
      product_category: "event",
      product_profile: "non-physical-goods",
    };

    // Step 5: Initiate SSLCommerz payment
    const response = await sslcommerz.init(data);
    if (!response || !response.GatewayPageURL) {
      console.error("SSLCommerz Response:", response); // for logging purposes
      return new Response("Failed to initiate payment gateway!", {
        status: 500,
      });
    }

    // Step 6: Use Prisma's upsert to either create or update the ticket entry
    await db.ticket.upsert({
      where: { email: body.email },
      update: { ...body, tran_id: data.tran_id },
      create: { ...body, tran_id: data.tran_id },
    });

    // Step 7: Return the payment gateway URL
    return new Response(response.GatewayPageURL, { status: 200 });
  } catch (error: any) {
    console.error("Error processing request:", error);
    return new Response("Failed to process your request!", { status: 400 });
  }
}

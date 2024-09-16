import { db } from "@/lib/db";
import { mailer } from "@/lib/mailer";
import { render } from "@react-email/components";
import { NextRequest } from "next/server";
import TicketEmail from "@/emails/ticket";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const extractedData: { [key: string]: string } = {};

    // Iterate through formData and extract data
    formData.forEach((value, key) => {
      extractedData[key] = value.toString();
    });

    // Check if status and transaction ID are present
    if (!extractedData.status || !extractedData.tran_id) {
      throw new Error("Missing required parameters");
    }

    const { tran_id, status } = extractedData;

    // Validate the payment status
    if (status !== "VALID" && status !== "VALIDATED") {
      throw new Error("Payment validation failed");
    }

    // Find the ticket using the transaction ID
    const ticket = await db.ticket.findUnique({
      where: { tran_id },
    });

    // If ticket doesn't exist, throw an error
    if (!ticket) {
      throw new Error("Invalid transaction ID");
    }

    // Update the ticket status to success
    await db.ticket.update({
      where: { tran_id },
      data: { status: "success" },
    });

    const ticketUrl = `${process.env.DOMAIN}/ticket?token=${tran_id}`;

    await mailer.sendMail({
      from: process.env.NODEMAILER_EMAIL,
      to: ticket.email,
      subject: "Your Ticket to The SEO Event - Beyond the Algorithm",
      html: await render(TicketEmail({ name: ticket.name, ticketUrl })),
    });

    // Redirect to download ticket page
    return Response.redirect(`${process.env.DOMAIN}/ticket?token=${tran_id}`);
  } catch (error: any) {
    console.error("Error processing payment:", error);
    return Response.redirect(`${process.env.DOMAIN}/error?error=${error}`);
  }
}

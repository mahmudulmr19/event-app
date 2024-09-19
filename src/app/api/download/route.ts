import { db } from "@/lib/db";
import { stringify } from "csv-stringify/sync";
import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const path = req.nextUrl.searchParams.get("path") || "/";
  revalidatePath(path);
  try {
    const tickets = await db.ticket.findMany({
      where: {
        status: "success",
      },
      select: {
        id: true,
        name: true,
        email: true,
        tran_id: true,
        phone: true,
        tshirtSize: true,
        photoURL: true,
        status: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    // Convert dates to strings
    const formattedTickets = tickets.map((ticket) => ({
      ...ticket,
      createdAt: ticket.createdAt.toISOString(),
      updatedAt: ticket.updatedAt.toISOString(),
    }));

    // Generate CSV
    const csv = stringify(formattedTickets, {
      header: true,
      columns: [
        "id",
        "name",
        "email",
        "tran_id",
        "phone",
        "tshirtSize",
        "photoURL",
        "status",
        "createdAt",
        "updatedAt",
      ],
    });

    // Set headers for file download
    const headers = new Headers();
    headers.append("Content-Disposition", "attachment; filename=others2.csv");
    headers.append("Content-Type", "text/csv");

    return new Response(csv, {
      status: 200,
      headers: headers,
    });
  } catch (error) {
    console.error("Error fetching tickets:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch tickets" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

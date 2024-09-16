import { db } from "@/lib/db";

export async function GET() {
  const data = await db.ticket.count({ where: { status: "success" } });
  return new Response(JSON.stringify(data), { status: 200 });
}

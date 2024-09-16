import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const path = req.nextUrl.searchParams.get("path") || "/";
  revalidatePath(path);
  const data = await db.ticket.count({ where: { status: "success" } });
  return new Response(JSON.stringify(data), { status: 200 });
}

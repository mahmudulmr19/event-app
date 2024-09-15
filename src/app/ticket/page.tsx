import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import Ticket from "./ticket";

export const revalidate = 60;

async function getTicketData(token: string) {
  try {
    return db.ticket.findUnique({
      where: { tran_id: token, status: "success" },
    });
  } catch (error) {
    return null;
  }
}

export default async function TicketPage({
  searchParams,
}: {
  searchParams: { token: string };
}) {
  const token = searchParams.token;
  if (!token) {
    redirect(`/error?error=Invalid ticket ID`);
  }

  const ticket = await getTicketData(token);
  if (!ticket) {
    redirect(`/error?error=Invalid ticket ID`);
  }

  const urlString = `${process.env.DOMAIN}/ticket?token=${token}`;
  const qrCode = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${urlString}`;

  return (
    <Ticket
      ticket={{
        name: ticket.name,
        email: ticket.email,
        phone: ticket.phone,
        tShirtSize: ticket.tshirtSize,
        qrCode,
      }}
    />
  );
}

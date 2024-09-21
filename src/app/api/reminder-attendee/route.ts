import { db } from "@/lib/db";
import { mailer } from "@/lib/mailer";
import { render } from "@react-email/components";
import ReminderEmail from "@/emails/reminder";

export async function POST() {
  try {
    // Fetch attendees with successful status
    const attendees = await db.ticket.findMany({
      where: { status: "success" },
      select: {
        name: true,
        email: true,
      },
    });

    if (attendees.length === 0) {
      return new Response("No attendees found", { status: 204 });
    }

    const batchSize = 100;

    // Loop through the attendees in batches
    for (let i = 0; i < attendees.length; i += batchSize) {
      const batch = attendees.slice(i, i + batchSize);
      const bccEmails = batch.map((attendee) => attendee.email);

      await mailer.sendMail({
        from: process.env.NODEMAILER_EMAIL,
        bcc: bccEmails,
        subject: "Final Reminder: The SEO Event – Tomorrow at 9:00 AM!",
        html: await render(ReminderEmail()),
      });

      console.log(`Batch ${Math.floor(i / batchSize) + 1} sent successfully`);

      // Optional: Add a delay between batches to avoid hitting rate limits
      await new Promise((resolve) => setTimeout(resolve, 30000)); // 30 seconds
    }

    return new Response("Emails sent successfully", { status: 200 });
  } catch (error) {
    console.error("Error sending emails:", error);
    return new Response("Something went wrong", { status: 500 });
  }
}

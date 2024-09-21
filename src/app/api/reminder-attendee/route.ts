import { db } from "@/lib/db";
import { mailer } from "@/lib/mailer";
import { render } from "@react-email/components";
import ReminderEmail from "@/emails/reminder";

export default async function POST() {
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

    const batchSize = 10;
    for (let i = 0; i < attendees.length; i += batchSize) {
      const batch = attendees.slice(i, i + batchSize);

      // Create email sending promises for the current batch
      const emailPromises = batch.map(async (attendee) => {
        try {
          const htmlContent = await render(
            ReminderEmail({ attendeeName: attendee.name })
          );

          // Send email using Nodemailer
          await mailer.sendMail({
            from: process.env.NODEMAILER_EMAIL,
            to: attendee.email,
            subject: "Final Reminder: The SEO Event – Tomorrow at 9:00 AM!",
            html: htmlContent,
          });
          console.log(`Email sent to ${attendee.email}`);
        } catch (emailError) {
          console.error(
            `Failed to send email to ${attendee.email}:`,
            emailError
          );
        }
      });

      // Wait for all emails in the current batch to be sent
      const results = await Promise.allSettled(emailPromises);

      // Log results for the current batch
      results.forEach((result, index) => {
        if (result.status === "rejected") {
          console.error(
            `Batch ${Math.floor(i / batchSize) + 1}, Email ${
              index + 1
            } failed:`,
            result.reason
          );
        }
      });

      console.log(
        `Batch ${Math.floor(i / batchSize) + 1} processed successfully`
      );

      // Add a delay between batches (10 seconds) to prevent Gmail rate-limiting
      await new Promise((resolve) => setTimeout(resolve, 10000));
    }

    return new Response("Emails sent successfully", { status: 200 });
  } catch (error) {
    console.error("Error sending emails:", error);
    return new Response("Something went wrong", { status: 500 });
  }
}

import React from "react";
import {
  Body,
  Html,
  Container,
  Head,
  Tailwind,
  Section,
  Link,
  Text,
  Img,
} from "@react-email/components";

interface ReminderEmailProps {
  attendeeName?: string;
}

export default function ReminderEmail({ attendeeName }: ReminderEmailProps) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-black my-auto mx-auto font-sans px-2 text-white">
          <Container className="max-w-screen-md w-full mx-auto py-8 px-6  bg-[#050505] rounded-lg my-10">
            <Section>
              <Img
                src="https://res.cloudinary.com/dauydl3ih/image/upload/v1726546913/Group_4_xc3shr.png"
                className="h-20 "
                alt="The SEO Event Logo"
              />
            </Section>

            <Section className="mt-6">
              <Text className="text-xl font-bold text-[#7aff06] mb-4">
                Event Reminder: The SEO Event is Tomorrow!
              </Text>
              <Text className="text-lg text-white mb-4">
                Dear {attendeeName || "Attendee"},
              </Text>
              <Text className="text-base text-white leading-relaxed">
                We&apos;re excited to remind you that The SEO Event is happening
                tomorrow! As you prepare to join us for a day of learning and
                networking, please take note of the key event details and rules
                below.
              </Text>
            </Section>

            <Section className="mt-8">
              <Text className="text-lg font-bold text-[#7aff06] mb-2">
                Event Details:
              </Text>
              <Text className="text-base text-white leading-relaxed">
                <strong>Date:</strong> Tomorrow, 22/09/2024
                <br />
                <strong>Time:</strong> 9:00 AM (Gates open at 9:00 AM)
                <br />
                <strong>Venue:</strong> The Attention Network, 16th floor, Dhaka
                Trade Centre, 99 Kazi Nazrul Islam Avenue, Kawran Bazar, Dhaka
                <br />
                <strong>Event Agenda:</strong>{" "}
                <Link
                  href="https://theseoevent.com/"
                  className="text-[#7aff06] underline"
                >
                  View Agenda
                </Link>
              </Text>
            </Section>

            <Section className="mt-8">
              <Text className="text-lg font-bold text-[#7aff06] mb-2">
                Event Rules and Guidelines:
              </Text>
              <ul className="list-disc pl-6 text-base text-white space-y-2">
                <li>
                  <strong>Ticket Requirement:</strong> A valid ticket is
                  required for entry.
                </li>
                <li>
                  <strong>Food and Beverage Policy:</strong> Outside food and
                  beverages are not permitted.
                </li>
                <li>
                  <strong>Parking:</strong> Not available on-site. Use public
                  transportation or ride-sharing.
                </li>
                <li>
                  <strong>Photography Restrictions:</strong> No photography with
                  speakers and guests during the event.
                </li>
                <li>
                  <strong>Re-entry Policy:</strong> Permitted only with a valid
                  ID card.
                </li>
                <li>
                  <strong>Behavior Expectations:</strong> Maintain proper
                  decorum. Disruptive behavior not tolerated.
                </li>
                <li>
                  <strong>Waste Disposal:</strong> Use designated bins to keep
                  the venue clean.
                </li>
              </ul>
            </Section>

            <Section className="mt-8">
              <Text className="text-base text-white leading-relaxed">
                We&apos;re looking forward to seeing you tomorrow and making
                this event memorable! For any last-minute questions, contact us
                at{" "}
                <Link
                  href="mailto:theseoevent@gmail.com"
                  className="text-[#7aff06]"
                >
                  theseoevent@gmail.com
                </Link>{" "}
                or +880 1580-787298.
              </Text>
            </Section>

            <Section className="mt-8">
              <Text className="text-base text-white">Best regards,</Text>
              <Text className="text-base font-bold text-[#7aff06]">
                The SEO Event Team
              </Text>
            </Section>

            <Section className="mt-10 text-center border-t border-gray-700 pt-6">
              <Text className="text-sm text-gray-400">
                Questions? Contact us at{" "}
                <Link
                  href="mailto:theseoevent@gmail.com"
                  className="text-[#7aff06]"
                >
                  theseoevent@gmail.com
                </Link>
              </Text>
              <Text className="text-sm text-gray-400 mt-2">
                © {new Date().getFullYear()} The SEO Event. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

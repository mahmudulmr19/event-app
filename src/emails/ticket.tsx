import {
  Body,
  Html,
  Container,
  Head,
  Tailwind,
  Section,
  Heading,
  Link,
  Text,
  Img,
} from "@react-email/components";

interface TicketEmailProps {
  name?: string;
  ticketUrl: string;
}

export default function TicketEmail({ name, ticketUrl }: TicketEmailProps) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-black my-auto mx-auto font-sans px-2 text-white">
          <Container className="max-w-screen-sm w-full mx-auto py-8 px-10 bg-[#050505] rounded-lg my-10">
            <Section>
              <Img
                src="https://res.cloudinary.com/dauydl3ih/image/upload/v1726546913/Group_4_xc3shr.png"
                className="h-20"
              />
              <Heading className="text-3xl font-bold">
                Welcome to The SEO Event
              </Heading>
            </Section>

            <Section className="mt-10">
              <Text className="text-base">Hi {name ? name : "there"},</Text>
              <Text className="text-base">
                Thank you for purchasing your ticket to The SEO Event!
                We&apos;re thrilled to have you join us.
              </Text>
              <Text className="text-base">
                Get ready to dive deep into the latest trends, strategies, and
                insights. Plus, it&apos;s a fantastic opportunity to network
                with industry experts and fellow enthusiasts.
              </Text>
              <Text className="text-base mt-4">
                <strong>Event Details:</strong>
                <br />
                Date: 22nd September 2024
                <br />
                Time: 9 AM to 7 PM
                <br />
                Venue: The Attention Network
              </Text>
              <Text className="text-base mt-4">
                Keep an eye on your inbox for more updates as we get closer to
                the event. If you have any questions in the meantime, feel free
                to reach out to us.
              </Text>

              <Link
                href={ticketUrl}
                className="px-5 py-3 bg-[#61C604] text-white rounded-lg font-medium mt-4 block w-fit"
              >
                Check your ticket
              </Link>
            </Section>

            <Section className="mt-10 text-center">
              <Text className="text-sm text-gray-400">
                If you have any questions, feel free to contact us at{" "}
                <Link
                  href="mailto:theseoevent@gmail.com"
                  className="text-[#61C604]"
                >
                  theseoevent@gmail.com
                </Link>
                .
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

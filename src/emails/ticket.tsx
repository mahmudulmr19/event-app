import { Logo } from "@/components/ui";
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
            <Section className="text-center">
              <Logo className="h-10" />
              <Heading className="text-3xl font-bold">
                Welcome to The SEO Event
              </Heading>
            </Section>

            <Section className="mt-10">
              <Text className="text-base">Hi {name}</Text>
              <Text className="text-base">
                Welcome to the SEO family! We are excited to invite you to our
                exclusive event on September 21, 2024!
              </Text>
              <Text className="text-base">
                Check your event ticket link below
              </Text>

              <Link
                href={ticketUrl}
                className="px-5 py-3 bg-[#61C604] text-white rounded-lg font-medium mt-2 block w-fit"
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
              <Text className="text-sm text-gray-400">
                123 Event Street, Suite 456, Dhaka, Bangladesh
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

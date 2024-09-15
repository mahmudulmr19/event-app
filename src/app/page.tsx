import { Agendas, Banner, Hero, Speakers } from "@/components/home";
import { Container } from "@/components/ui";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export const metadata = {
  title: "The SEO Event: Bangladesh’s #1 SEO Industry Conference",
  description:
    "Join SEOFest, Bangladesh's top SEO conference! Learn from industry experts, discover the latest SEO trends, and boost your skills. Perfect for beginners and pros alike!",
};

export default function Page() {
  return (
    <main className="w-full h-full">
      <Hero />
      <Speakers />
      <Agendas />
      <Banner />
      <section className="pb-6 pt-0">
        <Container className="flex items-start justify-between">
          <div className="flex flex-col">
            <span className="text-gray-200 font-semibold text-md md:text-lg lg:text-xl">
              Organized by
            </span>
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
              Khondokar Asiful Islam
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=61565522413769"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook
                className="text-gray-200 hover:text-gray-400"
                size={24}
              />
            </a>
            <a
              href="https://x.com/TheSeoEvent"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Twitter
                className="text-gray-200 hover:text-gray-400"
                size={24}
              />
            </a>
            <a
              href="http://linkedin.com/company/theseoevent"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin
                className="text-gray-200 hover:text-gray-400"
                size={24}
              />
            </a>
          </div>
        </Container>
        <div className="text-center mt-4">
          <span className="text-md md:text-lg lg:text-xl font-bold text-gray-200">
            Copyright © 2024 Theo Seo Event.
          </span>
        </div>
      </section>
    </main>
  );
}

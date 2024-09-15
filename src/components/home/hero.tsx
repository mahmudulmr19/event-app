import { Navbar } from "@/components/shared";
import { Container } from "@/components/ui";
import { SpeakerIcon } from "@/components/icons";

export function Hero() {
  return (
    <div className="bg-cover bg-no-repeat bg-top bg-[url(/bg-hero.svg)]">
      <Navbar />
      <Container className="py-10 md:py-16 lg:py-20 xl:py-28 relative">
        <div className="absolute bottom-[70%] left-8 size-52 max-lg:hidden bg-[#7AFF06] transform translate-y-1/2 blur-[400px]" />
        <div className="absolute bottom-[70%] right-8 size-52 max-lg:hidden bg-[#4EBBEB] transform translate-y-1/2 blur-[400px]" />
        <div className="max-w-screen-md mx-auto flex flex-col items-center">
          <div className="flex items-center gap-x-3">
            <SpeakerIcon />
            <span className="font-heading font-medium">
              Engage with Our Network
            </span>
          </div>
          <h1 className="text-3xl font-heading md:text-4xl lg:text-5xl xl:text-6xl text-center mt-4">
            The <span className="text-gradient">SEO Fest</span> for Deshi SEOs
            by Deshi SEOs
          </h1>
          <p className="text-body text-gray-200 mt-1.5">
            Collaborate, Learn, and Innovate together.
          </p>

          <a href="/get-ticket" className="btn-primary mt-5 md:mt-7 lg:mt-8">
            Grab a ticket
          </a>
        </div>
      </Container>
    </div>
  );
}

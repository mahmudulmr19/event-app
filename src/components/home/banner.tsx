import { Container } from "@/components/ui";

export function Banner() {
  return (
    <Container className="pb-10 md:pb-14">
      <div className="py-10 md:py-16 lg:py-20 bg-[url(/bg-banner.png)] bg-no-repeat bg-cover rounded-2xl flex flex-col items-center gap-y-5">
        <div className="section-title">Reserve Your Position</div>
        <a
          href="/get-ticket"
          className="px-4 py-2 rounded-lg bg-white border border-white backdrop-blur-2xl "
        >
          <span className="text-gradient font-semibold">Grab a ticket</span>
        </a>
      </div>
    </Container>
  );
}

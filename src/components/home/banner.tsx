import { Container } from "@/components/ui";

export function Banner() {
  return (
    <Container className="pb-10 md:pb-14">
      <div className="py-10 md:py-16 lg:py-20 bg-[url(/bg-banner.png)] bg-no-repeat bg-cover rounded-2xl flex flex-col items-center gap-y-5">
        <div className="section-title max-w-2xl text-center">
          Tickets are selling fast, grab now before we run out!
        </div>
      </div>
    </Container>
  );
}

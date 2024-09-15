import { Container } from "@/components/ui";

export function Hero() {
  return (
    <div className="bg-cover bg-no-repeat bg-top bg-[url(/bg-hero.svg)]">
      <Container>
        <h1 className="text-5xl font-heading">hello world</h1>
      </Container>
    </div>
  );
}

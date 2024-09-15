import { Container } from "@/components/ui";
import sp1 from "./speakers/Frame 74.png";
import sp2 from "./speakers/Frame 82.png";
import sp3 from "./speakers/Frame 80.png";
import sp4 from "./speakers/Frame 81.png";
import Image from "next/image";

const data = [sp1, sp2, sp3, sp4];

export function Speakers() {
  return (
    <section id="speakers" className="pb-10 md:pb-16 lg:mb-20 xl:pb-28">
      <Container>
        <h2 className="section-title">
          Meet Our <span className="text-gradient">Speakers</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4  mt-10 md:mt-14 lg:mt-16">
          {data.map((j, i) => (
            <Image
              src={j}
              alt=""
              key={i}
              className="w-full h-full object-contain"
            />
          ))}
        </div>
        <div className="flex items-center justify-center mt-10">
          <a href="/get-ticket" className="btn-primary">
            Grab a ticket
          </a>
        </div>
      </Container>
    </section>
  );
}

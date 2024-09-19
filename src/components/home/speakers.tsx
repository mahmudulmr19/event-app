import { Container } from "@/components/ui";
import sp1 from "./speakers/Frame 74.png";
import sp2 from "./speakers/Frame 82.png";
import sp3 from "./speakers/Frame 80.png";
import sp4 from "./speakers/Frame 81.png";
import sp5 from "./speakers/d1.png";
import sp6 from "./speakers/shadi.png";
import sp7 from "./speakers/d3.png";
import Image from "next/image";

const data = [sp1, sp2, sp3, sp4, sp7, sp5, sp6];

export function Speakers() {
  return (
    <section id="speakers" className="pb-10 md:pb-16 lg:mb-20 xl:pb-28">
      <Container>
        <div className="max-w-screen-sm mx-auto text-center space-y-2">
          <h2 className="section-title">
            The <span className="text-gradient">Top SEOs</span> and Other{" "}
            <span className="text-gradient">tech experts</span> in the country
          </h2>
          <p className="text-body">
            Meet the best in SEO and tech! Our speakers include top experts from
            across the country. Get ready to learn from the pros!
          </p>
        </div>
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
      </Container>
    </section>
  );
}

import { Container } from "@/components/ui";
import Image from "next/image";
import s1 from "./speakers/1.png";
import s2 from "./speakers/2.png";
import s3 from "./speakers/3.png";
import s4 from "./speakers/4.png";
import s5 from "./speakers/5.png";
import s6 from "./speakers/6.png";
import s7 from "./speakers/7.png";

const data = [s1, s2, s3, s4, s5, s6, s7];

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

import { Container } from "@/components/ui";
import { CalendarIcon } from "@/components/icons";

const AgendaItem = ({
  time,
  title,
  speaker,
  location,
}: {
  time: string;
  title: string;
  speaker?: string;
  location: string;
}) => (
  <>
    <div className="pt-6 px-4 max-lg:hidden">
      <div className="flex items-center justify-between">
        <div className="text-gray-100 font-inter font-medium  w-1/6">
          {time}
        </div>
        <div className="flex-1 space-y-1">
          <h3 className="text-3xl font-bold">{title}</h3>
          {speaker && (
            <p className="text-xl font-medium font-inter text-gray-300">
              {speaker}
            </p>
          )}
        </div>
        <div className="text-gray-300 font-inter font-medium  text-right px-4 py-2 border-[#ffffff24] border bg-[linear-gradient(95deg,rgba(142,229,13,0.08)_2.66%,rgba(238,110,34,0.08)_100%)] w-fit rounded-md">
          {location}
        </div>
      </div>
      <div className="h-px bg-[linear-gradient(90deg,rgba(10,10,11,0.00)_15%,rgba(255,255,255,0.12)_49%,rgba(10,10,11,0.00)_86%)] w-full mt-6"></div>
    </div>
    <div className="flex flex-col lg:hidden pt-4">
      <div className="flex items-start justify-between text-gray-200 font-medium text-sm font-inter">
        <span>{time}</span>
        <span className="px-2 py-1 bg-[#ffffff14] rounded-lg">{location}</span>
      </div>
      <div className="mt-3">
        <h3 className="text-2xl font-bold">{title}</h3>
        {speaker && (
          <p className="text-sm font-medium font-inter text-gray-200">
            {speaker}
          </p>
        )}
      </div>
      <div className="h-px bg-[linear-gradient(90deg,rgba(10,10,11,0.00)_15%,rgba(255,255,255,0.12)_49%,rgba(10,10,11,0.00)_86%)] w-full mt-7" />
    </div>
  </>
);

export function Agendas() {
  const agendas = [
    {
      time: "10.30AM - 11.00AM",
      title: "SEO Fundamentals",
      location: "Reception",
      speaker: "Redwanul Haque",
    },
    {
      time: "10.30AM - 11.00AM",
      title: "On-Page SEO Best Practices",
      location: "Reception",
      speaker: "Redwanul Haque",
    },
    {
      time: "10.30AM - 11.00AM",
      title: "Keyword Research Strategies",
      speaker: "Redwanul Haque",
      location: "Reception",
    },
    {
      time: "10.30AM - 11.00AM",
      title: "Technical SEO Deep Dive",
      location: "Reception",
      speaker: "Redwanul Haque",
    },
    {
      time: "10.30AM - 11.00AM",
      title: "Link Building Techniques",
      speaker: "Redwanul Haque",
      location: "Reception",
    },
    {
      time: "10.30AM - 11.00AM",
      title: "Local SEO Optimization",
      location: "Reception",
      speaker: "Redwanul Haque",
    },
    {
      time: "10.30AM - 11.00AM",
      title: "Content Strategy for SEO",
      location: "Reception",
      speaker: "Redwanul Haque",
    },
  ];

  return (
    <section className="pb-10 md:pb-16 lg:mb-20" id="agenda">
      <Container>
        <div className="flex justify-between flex-col lg:flex-row items-start lg:items-center max-lg:gap-y-3">
          <h2 className="section-title">
            See Event <span className="text-gradient">Agendas</span>
          </h2>
          <div className="flex items-center">
            <CalendarIcon className="size-14 md:size-16 lg:size-20" />
            <div className="flex flex-col">
              <span className="font-medium text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                Event Day *
              </span>
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient">
                21 September
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10">
          {agendas.map((agenda, index) => (
            <AgendaItem key={index} {...agenda} />
          ))}
        </div>
      </Container>
    </section>
  );
}

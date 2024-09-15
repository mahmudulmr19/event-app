import { Agendas, Hero, Speakers } from "@/components/home";

export default function Page() {
  return (
    <main className="w-full h-full">
      <Hero />
      <Speakers />
      <Agendas />
    </main>
  );
}

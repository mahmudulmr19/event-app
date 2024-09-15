import { Container, Logo } from "@/components/ui";

const navLinks = [
  {
    label: "Speakers",
    href: "#speakers",
  },
  {
    label: "Agenda",
    href: "#agenda",
  },
];

export function Navbar() {
  return (
    <nav className="bg-[#0b0c0e4d] py-2.5 backdrop-blur-md relative overflow-hidden">
      <Container className="flex items-center justify-between relative">
        <div className=" absolute inset-y-0 transform left-52 blur-[50px] translate-x-1/2 w-[124px] h-[52px] bg-[#91E10E]/15" />
        <Logo className="h-10" />
        <div className="flex items-center gap-x-5 max-lg:hidden  justify-center ml-60">
          {navLinks.map((link) => (
            <a
              href={link.href}
              key={link.href}
              className="font-bold hover:text-[#7AFF06] transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-x-2">
          <a className="nav-sponsor-button" href="/buy-ticket">
            Become a sponsor
          </a>
          <a className="btn-primary" href="/get-ticket">
            Grab a ticket
          </a>
        </div>
      </Container>
    </nav>
  );
}

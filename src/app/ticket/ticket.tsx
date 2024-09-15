"use client";

import { Container, Logo } from "@/components/ui";
import { PartyPopper, Printer } from "lucide-react";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

interface TicketProps {
  name: string;
  email: string;
  phone: string;
  tShirtSize: string;
  qrCode: string;
}

export default function Ticket({
  ticket: { name, email, phone, tShirtSize, qrCode },
}: {
  ticket: TicketProps;
}) {
  const ticketRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => ticketRef.current,
  });

  return (
    <div>
      <nav className="bg-[#0b0c0e4d] py-2.5 backdrop-blur-md relative overflow-hidden">
        <Container className="flex items-center justify-between relative">
          <div className="max-lg:hidden absolute inset-y-0 transform left-52 blur-[50px] opacity-15 translate-x-1/2 w-[124px] h-[52px] bg-[#3BCDF3]"></div>
          <div className="max-lg:hidden absolute inset-y-0 transform right-52 blur-[50px] opacity-15 -translate-x-1/2 w-[124px] h-[52px] bg-[#E82FAC]"></div>
          <Logo className="h-10" />

          <button className="btn-primary gap-x-2" onClick={handlePrint}>
            <Printer />
            Print Out
          </button>
        </Container>
      </nav>

      <Container className="py-10 md:py-16 lg:py-20 xl:py-28">
        <div
          ref={ticketRef}
          className="max-w-screen-md mx-auto w-full overflow-hidden bg-[#151517] rounded-2xl relative "
        >
          <div className="absolute left-0 bottom-0 bg-[#8FE114] size-24 blur-[150px]" />
          <div className="absolute right-6 top-8 bg-[#E97227] size-24 blur-[150px]" />

          <div className="p-6 text-white bg-[#181818] rounded-lg">
            <div className="flex flex-col items-center">
              <PartyPopper className="text-yellow-400" size={44} />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mt-5 mb-1">
                Congratulations!
              </h2>
              <p className="p font-medium">
                You&apos;ve successfully purchased your ticket
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-xl md:text-2xl font-bold mb-5">
                Ticket Information
              </h3>

              <div className="flex flex-col md:flex-row">
                <div className="grid grid-cols-2 gap-y-3 mb-4 text-sm flex-1">
                  <div>
                    <label className="text-gray-400 mb-0.5 font-medium text-base">
                      Name
                    </label>
                    <p className="text-lg font-medium text-gray-200">{name}</p>
                  </div>
                  <div>
                    <label className="text-gray-400 mb-0.5 font-medium text-base">
                      Email
                    </label>
                    <p className="text-lg font-medium text-gray-200">{email}</p>
                  </div>
                  <div>
                    <label className="text-gray-400 mb-0.5 font-medium text-base">
                      Phone
                    </label>
                    <p className="text-lg font-medium text-gray-200">{phone}</p>
                  </div>
                  <div>
                    <label className="text-gray-400 mb-0.5 font-medium text-base">
                      T-shirt
                    </label>
                    <p className="text-lg font-medium text-gray-200">
                      {tShirtSize}
                    </p>
                  </div>
                </div>
                <div>
                  <label className="text-gray-400 mb-1 font-medium text-base">
                    QR Code
                  </label>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={qrCode}
                    alt="QR Code"
                    width={100}
                    height={100}
                    className="bg-white p-1 rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

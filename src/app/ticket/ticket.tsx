"use client";

import { Container, Logo } from "@/components/ui";
import { PartyPopper, Download } from "lucide-react";
import { useRef } from "react";
import html2canvas from "html2canvas";

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

  const handleImageDownload = async () => {
    if (!ticketRef.current) return;

    try {
      const canvas = await html2canvas(ticketRef.current);
      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = `${name.replace(/\s+/g, "_")}_ticket.png`;
      link.click();
    } catch (error) {
      console.error("Error generating ticket image:", error);
      alert(
        "There was an error generating the ticket image. Please try again."
      );
    }
  };

  return (
    <div>
      <nav className="bg-[#0b0c0e4d] py-2.5 backdrop-blur-md relative overflow-hidden">
        <Container className="flex items-center justify-between relative">
          <div className="max-lg:hidden absolute inset-y-0 transform left-52 blur-[50px] opacity-15 translate-x-1/2 w-[124px] h-[52px] bg-[#3BCDF3]"></div>
          <div className="max-lg:hidden absolute inset-y-0 transform right-52 blur-[50px] opacity-15 -translate-x-1/2 w-[124px] h-[52px] bg-[#E82FAC]"></div>
          <Logo className="h-10" />

          <button className="btn-primary gap-x-2" onClick={handleImageDownload}>
            <Download />
            Download
          </button>
        </Container>
      </nav>

      <Container className="py-10 md:py-16 lg:py-20 xl:py-28">
        <div
          ref={ticketRef}
          className="max-w-screen-md mx-auto w-full overflow-hidden bg-[#151517] rounded-2xl relative "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-0 bottom-0"
            width={400}
            height={400}
            viewBox="0 0 400 400"
            fill="none"
          >
            <g filter="url(#filter0_f_74_62)">
              <circle cx={50} cy={350} r={50} fill="#8FE114" />
            </g>
            <defs>
              <filter
                id="filter0_f_74_62"
                x={-300}
                y={0}
                width={700}
                height={700}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation={150}
                  result="effect1_foregroundBlur_74_62"
                />
              </filter>
            </defs>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={421}
            height={429}
            viewBox="0 0 421 429"
            fill="none"
            className="absolute right-0 top-0"
          >
            <g filter="url(#filter0_f_74_61)">
              <circle cx={350} cy={79} r={50} fill="#E97227" />
            </g>
            <defs>
              <filter
                id="filter0_f_74_61"
                x={0}
                y={-271}
                width={700}
                height={700}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation={150}
                  result="effect1_foregroundBlur_74_61"
                />
              </filter>
            </defs>
          </svg>

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

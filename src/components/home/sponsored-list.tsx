import { ExonHostLogo } from "./logos";

export function SponsoredList() {
  return (
    <div className="mt-10 md:mt-16 lg:mt-20 xl:mt-28 max-w-screen-lg mx-auto">
      <div className="section-title text-center">
        Our <span className="text-gradient">Sponsored By </span>
      </div>

      <div className="grid md:grid-cols-2 mt-10 lg:mt-16 gap-8">
        <TitleSponsorCard />
        <GoldSponsorCard />
        {/* <SilverSponsorCard /> */}
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 size-56 bg-[#2DDAF9] blur-[400px] -z-[1] " />
    </div>
  );
}

function TitleSponsorCard() {
  return (
    <div className="rounded-2xl bg-[#151517] relative overflow-hidden py-20">
      <div className="flex flex-col text-center items-center gap-y-5 md:gap-y-10 mx-auto">
        <div className="text-2xl md:text-3xl lg:text-4xl font-medium text-gradient">
          Platinum Sponsors
        </div>
        <svg
          className="w-56"
          viewBox="0 0 2052 276"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_149_4)">
            <path
              d="M1281.41 1h770.44l-57.22 274.06h-774.14L1281.41 1z"
              fill="#2B2B2B"
            />
            <path
              d="M1225.49 275.06H0L63.91 2l1222.5-2-60.92 275.06z"
              fill="#FBD12B"
            />
            <path
              d="M279.78 231.58h-50l25.61-102.45c.4-2.64-.15-4.93-1.68-6.86-1.63-2.03-3.81-3.05-6.56-3.05h-21.8c-.1 3.25-.56 6.56-1.37 9.91l-25.76 102.45h-50l25.61-102.45c.4-2.64-.15-4.93-1.68-6.86-1.63-2.03-3.81-3.05-6.56-3.05h-21.65L116.8 231.58H66.64l37.67-154.89h45.43v-.15h34.3c19.51 0 32.78 9.96 39.79 29.88l7.01-29.73h17.23l.15-.15h17.23c13.82 0 24.75 5.29 32.78 15.85 7.93 10.47 10.37 22.72 7.32 36.74l-25.76 102.45h-.01zM340.91 219.08c-7.62-5.79-13.37-13.67-17.23-23.63-8.64-21.65-6.81-45.89 5.49-72.72 16.46-29.88 43.09-45.48 79.89-46.8 8.94-.51 18.04-.4 27.29.31 15.04 1.32 26.42 5.01 34.15 11.05 7.72 6.05 13.57 14.05 17.53 24.01 8.64 21.75 6.81 45.99-5.49 72.72-16.36 29.98-43.5 45.74-81.41 47.26-7.73.51-16.46.35-26.22-.46-15.04-2.03-26.37-5.95-34-11.74zm101.84-61.9c3.15-11.59 3.25-20.43.3-26.53-2.95-6.1-10.21-9.65-21.8-10.67-15.04-1.12-27.44 1.47-37.2 7.77-7.62 5.9-12.65 13.16-15.09 21.8-7.01 23.07.15 35.47 21.5 37.2 17.48.41 29.88-2.18 37.2-7.77 7.62-5.79 12.65-13.06 15.09-21.8zM646.57 231.58h-50l25.76-102.45c.31-2.64-.25-4.93-1.68-6.86-1.52-2.03-3.71-3.05-6.56-3.05h-37.2l-27.44 112.36h-50l37.81-154.89h61.13v-.15h34.3c13.62 0 24.39 5.29 32.32 15.85 8.03 10.47 10.47 22.72 7.32 36.74l-25.76 102.45zM674.92 231.58l10.37-42.08h79.43c8.44.71 13.52-1.93 15.25-7.93.2-6.5-4.68-9.45-14.63-8.84h-22.41c-15.45-.3-27.24-5.28-35.37-14.94-8.23-9.76-10.77-23.12-7.62-40.09 8.94-29.47 31.5-43.14 67.69-41.01h84.46l-9.91 40.4h-82.17c-6.2-.3-9.76 1.93-10.67 6.71-.41 3.76.92 6.25 3.96 7.47 3.04 1.22 7.27 1.68 12.65 1.37l19.97-.61c18.8.61 31.25 5.95 37.35 16.01 6.1 9.96 7.72 23.33 4.88 40.09-6.2 30.09-26.83 44.57-61.9 43.45h-91.33zM855.11 178.83l37.66-153.06h49.39c-8.33 32.62-12.65 49.5-12.96 50.61h36.44l-10.98 44.97h-36.28c-2.64 10.88-4.83 19.89-6.56 27.06-1.73 7.17-3.3 13.67-4.73 19.51-1.42 5.84-2.29 9.48-2.59 10.9-.3 2.54.3 4.83 1.83 6.86 1.52 2.03 3.66 3.05 6.4 3.05h25.61l-10.37 42.84h-33.23c-13.62 0-24.34-5.28-32.17-15.86-7.93-10.57-10.42-22.87-7.47-36.89l.01.01zM1021.58 230.97c-14.74-.92-25.89-4.22-33.46-9.91s-13.29-13.42-17.15-23.17c-8.44-21.04-6.61-44.97 5.49-71.8 16.26-30.59 42.79-47 79.58-49.24h50.46c15.55 1.02 25.79 5.56 30.72 13.64 4.93 8.08 6.12 17.15 3.58 27.21l-.3 1.52-13.57 55.49h-90.56c-4.98-.71-7.55-4.42-7.7-11.13-.15-6.71 1.96-13.47 6.33-20.28 4.37-6.81 10.72-10.57 19.06-11.28h34l3.2-12.81h-31.56c-12.2.41-22.06 3.81-29.58 10.21-7.52 6-12.45 13.32-14.79 21.95-5.9 23.28 1.12 35.27 21.04 35.98h87.66l-10.67 44.21-91.78-.61v.02zM1214.89 76.54h49.24l-11.28 44.21h-26.83c-3.05 0-5.85 1.07-8.38 3.2-2.44 2.13-4.07 4.83-4.88 8.08l-24.24 99.55h-49.39l26.98-112.21c7.01-25 23.27-39.28 48.79-42.84l-.01.01z"
              fill="#231F20"
            />
            <path
              d="M1319 230.97c-14.74-.92-25.89-4.22-33.46-9.91s-13.29-13.42-17.15-23.17c-8.44-21.04-6.61-44.97 5.49-71.8 16.26-30.59 42.79-47 79.58-49.24h88.42l-10.21 42.38h-74.55c-12.2.41-22.06 3.81-29.58 10.21-7.52 6-12.45 13.32-14.79 21.95-6.91 23.68.1 35.67 21.04 35.98h81.41l-10.67 44.21-85.53-.61zM1483.95 25.77h50.31l-39.03 153.06c-.3 2.54.3 4.83 1.83 6.86 1.62 2.03 3.81 3.05 6.56 3.05h27.44l-10.82 42.84h-34.3c-13.93 0-25-5.28-33.23-15.86-8.23-10.57-11.03-22.87-8.38-36.89l39.64-153.06h-.02zM1614.14 230.97c-14.74-.92-25.89-4.22-33.46-9.91s-13.29-13.42-17.15-23.17c-8.44-21.04-6.61-44.97 5.49-71.8 16.26-30.59 42.79-47 79.58-49.24h88.42l-37.35 154.74-85.53-.61v-.01zm59.15-95.44h-.15l3.81-16.31h-23.63c-12.71.21-22.92 3.61-30.64 10.21-7.52 6-12.45 13.32-14.79 21.95-6.91 23.68.1 35.67 21.04 35.98h32.01l12.35-51.83zM1739.14 178.99l25-102.45h50l-25 102.45c-.3 2.54.31 4.83 1.83 6.86 1.52 2.03 3.71 3.05 6.56 3.05h21.65c.1-3.35.56-6.66 1.37-9.91l25-102.45h50l-25 102.45c-.41 2.54.2 4.83 1.83 6.86 1.52 2.03 3.71 3.05 6.56 3.05h21.34l26.53-112.36h50.92l-37.5 154.89h-45.43v.15h-34.15c-19.51 0-32.78-10.01-39.79-30.03l-7.01 29.88h-17.07v.15h-17.38c-13.72 0-24.6-5.28-32.62-15.86-8.13-10.47-10.67-22.71-7.62-36.74l-.02.01z"
              fill="#FBD12B"
            />
          </g>
          <defs>
            <clipPath id="clip0_149_4">
              <path fill="#fff" d="M0 0H2051.85V275.06H0z" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 bg-[#92E10E] size-24 blur-[150px]" />
    </div>
  );
}

function GoldSponsorCard() {
  return (
    <div className="rounded-2xl bg-[#151517] relative overflow-hidden py-20">
      <div className="flex flex-col text-center items-center gap-y-5 md:gap-y-10 mx-auto">
        <div className="text-2xl md:text-3xl lg:text-4xl font-medium bg-[linear-gradient(90deg,#FFB325_0%,#FFF8E7_100%)] bg-clip-text  text-transparent">
          Gold Sponsorship
        </div>
        <ExonHostLogo className="w-56" />
      </div>
      <div className="absolute bottom-0 left-0 bg-[#94DE0F] size-24 blur-[150px]" />
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function SilverSponsorCard() {
  return (
    <div className="md:col-span-2 rounded-2xl bg-[#151517] relative overflow-hidden py-20">
      <div className="flex flex-col text-center items-center gap-y-5 md:gap-y-10 mx-auto">
        <div className="text-2xl md:text-3xl lg:text-4xl font-medium bg-[linear-gradient(90deg,#FFF_35.25%,#A0A0A0_65.81%)] bg-clip-text  text-transparent">
          Silver Sponsorship
        </div>

        <div className="flex flex-wrap justify-center gap-5 md:gap-10 lg:gap-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={203}
            height={42}
            viewBox="0 0 203 42"
            fill="none"
          >
            <mask
              id="a"
              style={{
                maskType: "luminance",
              }}
              maskUnits="userSpaceOnUse"
              x={0}
              y={1}
              width={203}
              height={40}
            >
              <path d="M202.5 1H.5v40h202V1z" fill="#fff" />
            </mask>
            <g mask="url(#a)" fill="#FAFAFA">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.056 12.685A10 10 0 0020.5 11V1a20 20 0 11-20 20h10a10 10 0 1015.556-8.315z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.5 1a10 10 0 01-10 10v10a20 20 0 0020-20h-10z"
              />
              <path d="M126.119 15.453h-4.852v15.412h4.852V15.453zM121.807 12.567c.507.507 1.141.76 1.902.76.761 0 1.385-.253 1.871-.76.487-.529.73-1.163.73-1.903 0-.761-.243-1.396-.73-1.903-.486-.507-1.11-.761-1.871-.761-.761 0-1.395.254-1.902.761-.487.507-.73 1.142-.73 1.903 0 .74.243 1.374.73 1.903zM51.656 30.865V8.475h4.98v18.013h9.925v4.377H51.656z" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M75.527 31.213c-1.585 0-3.023-.348-4.313-1.046a8.144 8.144 0 01-3.012-2.918c-.74-1.226-1.11-2.6-1.11-4.122 0-1.522.37-2.886 1.11-4.091a7.98 7.98 0 013.012-2.854c1.269-.72 2.707-1.078 4.313-1.078 1.607 0 3.045.348 4.313 1.046a7.903 7.903 0 013.013 2.886c.74 1.205 1.11 2.569 1.11 4.09 0 1.523-.37 2.897-1.11 4.123a8.143 8.143 0 01-3.013 2.918c-1.268.698-2.706 1.046-4.313 1.046zm0-4.408c.698 0 1.311-.148 1.84-.444.528-.317.93-.75 1.205-1.3.296-.57.444-1.215.444-1.934 0-.719-.148-1.343-.444-1.871a3.109 3.109 0 00-1.237-1.269c-.507-.317-1.11-.475-1.808-.475-.676 0-1.279.158-1.807.475a3.11 3.11 0 00-1.237 1.269c-.296.55-.444 1.184-.444 1.902 0 .698.148 1.332.444 1.903.296.55.708.983 1.237 1.3.528.296 1.13.444 1.807.444zM87.806 36.89c1.29.592 2.78.888 4.471.888 1.65 0 3.118-.328 4.408-.983 1.29-.655 2.305-1.564 3.044-2.727.74-1.163 1.111-2.537 1.111-4.123V15.453h-4.758v1.035a5.127 5.127 0 00-1.204-.75c-.825-.402-1.766-.603-2.823-.603-1.416 0-2.674.339-3.774 1.015-1.1.655-1.966 1.565-2.6 2.727-.635 1.142-.951 2.432-.951 3.87 0 1.416.316 2.706.95 3.868a7.255 7.255 0 002.601 2.76c1.1.676 2.358 1.014 3.774 1.014 1.036 0 1.977-.2 2.822-.602.41-.195.78-.424 1.11-.688v.973c0 1.078-.348 1.913-1.046 2.505-.677.592-1.617.888-2.823.888-.972 0-1.807-.169-2.505-.507-.676-.338-1.29-.835-1.84-1.49l-2.98 2.98c.74 1.057 1.744 1.871 3.013 2.442zm6.913-11.258c-.486.296-1.068.444-1.744.444-.677 0-1.269-.148-1.776-.444a3.129 3.129 0 01-1.142-1.205 3.592 3.592 0 01-.412-1.68c0-.635.137-1.206.412-1.713a3.06 3.06 0 011.174-1.205c.507-.296 1.088-.444 1.744-.444.676 0 1.258.148 1.744.444a2.85 2.85 0 011.142 1.205c.274.507.412 1.078.412 1.712 0 .635-.138 1.205-.412 1.713a2.9 2.9 0 01-1.142 1.173zM111.051 31.213c-1.586 0-3.024-.348-4.313-1.046a8.141 8.141 0 01-3.013-2.918c-.74-1.226-1.11-2.6-1.11-4.122 0-1.522.37-2.886 1.11-4.091a7.978 7.978 0 013.013-2.854c1.268-.72 2.706-1.078 4.313-1.078 1.606 0 3.044.348 4.312 1.046a7.901 7.901 0 013.013 2.886c.74 1.205 1.11 2.569 1.11 4.09 0 1.523-.37 2.897-1.11 4.123a8.141 8.141 0 01-3.013 2.918c-1.268.698-2.706 1.046-4.312 1.046zm0-4.408c.697 0 1.31-.148 1.839-.444.528-.317.93-.75 1.205-1.3.296-.57.444-1.215.444-1.934 0-.719-.148-1.343-.444-1.871a3.107 3.107 0 00-1.237-1.269c-.507-.317-1.11-.475-1.807-.475-.677 0-1.28.158-1.808.475a3.107 3.107 0 00-1.237 1.269c-.296.55-.444 1.184-.444 1.902 0 .698.148 1.332.444 1.903.296.55.708.983 1.237 1.3.528.296 1.131.444 1.808.444zM137.781 31.182c-1.035 0-1.987-.2-2.854-.603a6.063 6.063 0 01-1.236-.757v7.544h-4.789V15.453h4.852v1.063a6 6 0 011.173-.746c.867-.423 1.819-.635 2.854-.635 1.459 0 2.749.35 3.869 1.047a7.214 7.214 0 012.664 2.854c.656 1.205.983 2.58.983 4.123 0 1.543-.327 2.917-.983 4.122a7.215 7.215 0 01-2.664 2.854c-1.12.698-2.41 1.047-3.869 1.047zm-.887-4.376c.697 0 1.3-.159 1.807-.476.529-.317.941-.75 1.237-1.3.296-.55.444-1.174.444-1.871 0-.72-.148-1.353-.444-1.903a3.107 3.107 0 00-1.237-1.269c-.507-.317-1.099-.475-1.776-.475-.676 0-1.279.158-1.807.475a3.168 3.168 0 00-1.205 1.269c-.296.55-.444 1.184-.444 1.903 0 .697.137 1.321.412 1.87.296.55.708.984 1.237 1.3.528.318 1.12.477 1.776.477z"
              />
              <path d="M150.046 30.896c.888.233 1.786.35 2.695.35 1.924 0 3.446-.445 4.567-1.333 1.141-.888 1.712-2.082 1.712-3.583 0-.973-.179-1.755-.539-2.347a4.194 4.194 0 00-1.395-1.459 8.33 8.33 0 00-1.808-.856 27.898 27.898 0 00-1.807-.54c-.571-.147-1.036-.316-1.396-.507-.359-.19-.539-.444-.539-.76 0-.297.138-.519.412-.667.275-.169.687-.253 1.237-.253.571 0 1.152.116 1.744.349.613.232 1.163.634 1.649 1.205l2.759-2.791c-.697-.888-1.606-1.554-2.727-1.998-1.099-.465-2.304-.698-3.615-.698-1.247 0-2.336.212-3.266.635-.931.422-1.65 1.004-2.157 1.744-.507.718-.761 1.575-.761 2.569 0 .93.18 1.701.539 2.314a4.01 4.01 0 001.395 1.396 8.103 8.103 0 001.808.793c.634.19 1.237.37 1.808.539.57.148 1.036.328 1.395.539.381.19.571.476.571.856 0 .296-.159.529-.476.698-.296.169-.729.253-1.3.253a5.78 5.78 0 01-2.283-.444 5.56 5.56 0 01-1.808-1.3l-2.759 2.791a8.61 8.61 0 001.903 1.522c.761.423 1.575.75 2.442.983zM167.868 31.214c-1.416 0-2.674-.286-3.773-.856a6.622 6.622 0 01-2.537-2.41c-.614-1.037-.92-2.22-.92-3.553v-8.942h4.852v8.88c0 .528.084.982.254 1.363.19.38.465.676.824.888.36.211.793.317 1.3.317.719 0 1.29-.222 1.713-.666.423-.465.634-1.1.634-1.903v-8.88h4.852v8.912c0 1.353-.306 2.547-.92 3.583a6.622 6.622 0 01-2.537 2.41c-1.078.571-2.325.857-3.742.857zM182.331 15.453h-4.852v15.412h4.852v-9.007c0-.528.106-.972.317-1.332.233-.359.54-.634.92-.824a2.632 2.632 0 011.3-.317c.698 0 1.279.222 1.744.666.487.423.73 1.025.73 1.807v9.007h4.852v-9.007c0-.528.106-.972.317-1.332.233-.359.539-.634.92-.824a2.63 2.63 0 011.3-.317c.698 0 1.279.222 1.744.666.486.423.729 1.025.729 1.807v9.007h4.853v-9.546c0-1.29-.275-2.389-.825-3.298a5.297 5.297 0 00-2.188-2.125c-.909-.507-1.956-.76-3.14-.76-1.205 0-2.294.264-3.266.792a5.924 5.924 0 00-1.657 1.304 5.392 5.392 0 00-1.61-1.367c-.845-.486-1.807-.73-2.885-.73-1.142 0-2.167.244-3.076.73a5.314 5.314 0 00-1.079.727v-1.14z" />
            </g>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={73}
            height={56}
            viewBox="0 0 73 56"
            fill="none"
          >
            <mask
              id="a"
              style={{
                maskType: "luminance",
              }}
              maskUnits="userSpaceOnUse"
              x={1}
              y={0}
              width={71}
              height={56}
            >
              <path d="M72 .5H1v55h71V.5z" fill="#fff" />
            </mask>
            <g mask="url(#a)" fill="#FAFAFA">
              <path d="M63.883 50.6c.988 0 1.523.734 1.523 1.642v1.723h-.662v-1.616c0-.594-.293-1.115-.908-1.115-.594 0-.894.5-.894 1.102v1.629h-.661v-1.63c0-.6-.3-1.101-.909-1.101-.614 0-.888.52-.888 1.115v1.616h-.66v-1.716c0-.915.52-1.65 1.502-1.65.654 0 1.128.334 1.295.842.18-.508.641-.841 1.262-.841zm-6.385 2.804c.607 0 .941-.528.941-1.135v-1.576h.661v1.656c0 .948-.574 1.696-1.602 1.696-1.015 0-1.59-.755-1.59-1.703v-1.649h.661v1.583c0 .6.328 1.128.929 1.128zm-3.454.634c-.608 0-1.075-.24-1.33-.727l.508-.28c.167.326.434.447.795.447.374 0 .661-.154.661-.441 0-.688-1.876-.167-1.876-1.416 0-.574.507-.995 1.222-.995.607 0 1.021.28 1.228.661l-.507.288c-.14-.288-.407-.388-.708-.388-.307 0-.574.16-.574.42 0 .669 1.876.181 1.876 1.416 0 .621-.6 1.015-1.295 1.015zm-4.539 1.429h-.662v-3.145c0-.975.755-1.71 1.743-1.71a1.71 1.71 0 011.736 1.71c0 .989-.714 1.723-1.71 1.723-.44 0-.84-.194-1.108-.487v1.91l.001-.001zm1.081-2.043c.608 0 1.075-.5 1.075-1.095 0-.601-.467-1.088-1.075-1.088-.614 0-1.081.487-1.081 1.088 0 .594.467 1.095 1.081 1.095zm-3.28-2.731h.66v3.272h-.66v-3.272zm8.917-2.986c-5.051 0-8.904-3.885-8.904-8.613 0-4.694 3.853-8.58 8.904-8.58 5.05 0 8.904 3.886 8.904 8.58 0 4.728-3.853 8.613-8.904 8.613zm0-5.472c1.845 0 3.076-1.425 3.076-3.108 0-1.716-1.23-3.141-3.076-3.141s-3.076 1.425-3.076 3.14c0 1.684 1.23 3.109 3.076 3.109zM36.314 55.154c-4.015 0-6.93-1.78-8.419-4.954l4.825-2.59c.518 1.1 1.49 2.234 3.497 2.234 2.104 0 3.497-1.328 3.659-3.659-.778.68-2.008 1.198-3.853 1.198-4.501 0-8.128-3.464-8.128-8.321 0-4.695 3.854-8.515 8.905-8.515 5.18 0 8.904 3.594 8.904 8.547v6.411c0 5.828-4.048 9.649-9.39 9.649zm.388-13.243c1.749 0 3.076-1.198 3.076-2.979 0-1.748-1.327-2.914-3.076-2.914-1.716 0-3.075 1.166-3.075 2.914 0 1.781 1.36 2.979 3.075 2.979zm-18.693 5.796c-5.051 0-8.904-3.885-8.904-8.613 0-4.694 3.853-8.58 8.904-8.58 5.05 0 8.904 3.886 8.904 8.58 0 4.728-3.853 8.613-8.904 8.613zm0-5.472c1.845 0 3.076-1.425 3.076-3.108 0-1.716-1.23-3.141-3.076-3.141s-3.076 1.425-3.076 3.14c0 1.684 1.23 3.109 3.076 3.109zM1 23.585h5.828v23.636H1V23.585zM71.734 32.5a2 2 0 11-4 0 2 2 0 014 0z" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M55.79 10.165a33 33 0 019.616 21.525 11.866 11.866 0 00-6.561-3.9 27 27 0 00-50.1-7.205h-6.66a33 33 0 0153.705-10.42z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M52.725 28.013a11.85 11.85 0 00-5.42 3.375 15 15 0 00-28.612-3.856 12.79 12.79 0 00-.684-.018c-2.237 0-4.317.586-6.093 1.607a21 21 0 0140.81-1.108h-.001z"
              />
            </g>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={171}
            height={42}
            viewBox="0 0 171 42"
            fill="none"
          >
            <mask
              id="a"
              style={{
                maskType: "luminance",
              }}
              maskUnits="userSpaceOnUse"
              x={0}
              y={0}
              width={171}
              height={42}
            >
              <path d="M170.5.5H.5v41h170V.5z" fill="#fff" />
            </mask>
            <g mask="url(#a)" fill="#FAFAFA">
              <path d="M52.36 28.638h11.952v-3.6h-7.704v-13.56H52.36v17.16zM71.393 26.238c-1.704 0-2.592-1.488-2.592-3.72s.888-3.744 2.592-3.744c1.704 0 2.616 1.512 2.616 3.744s-.912 3.72-2.616 3.72zm.024 2.784c3.96 0 6.552-2.808 6.552-6.504 0-3.696-2.592-6.504-6.552-6.504-3.936 0-6.576 2.808-6.576 6.504 0 3.696 2.64 6.504 6.576 6.504zM84.824 32.886c1.824 0 3.432-.408 4.512-1.368.984-.888 1.632-2.232 1.632-4.08V16.35h-3.744v1.32h-.048c-.72-1.032-1.824-1.68-3.456-1.68-3.048 0-5.16 2.544-5.16 6.144 0 3.768 2.568 5.832 5.328 5.832 1.488 0 2.424-.6 3.144-1.416h.096v1.224c0 1.488-.696 2.352-2.352 2.352-1.296 0-1.944-.552-2.16-1.2h-3.792c.384 2.568 2.616 3.96 6 3.96zm-.024-7.824c-1.464 0-2.424-1.2-2.424-3.048 0-1.872.96-3.072 2.424-3.072 1.632 0 2.496 1.392 2.496 3.048 0 1.728-.792 3.072-2.496 3.072zM98.666 26.238c-1.704 0-2.592-1.488-2.592-3.72s.888-3.744 2.592-3.744c1.704 0 2.616 1.512 2.616 3.744s-.912 3.72-2.616 3.72zm.024 2.784c3.96 0 6.552-2.808 6.552-6.504 0-3.696-2.592-6.504-6.552-6.504-3.936 0-6.576 2.808-6.576 6.504 0 3.696 2.64 6.504 6.576 6.504zM106.384 28.638h3.912V16.35h-3.912v12.288zm0-13.992h3.912v-3.168h-3.912v3.168zM111.994 32.694h3.912v-5.328h.048c.768 1.032 1.896 1.656 3.48 1.656 3.216 0 5.352-2.544 5.352-6.528 0-3.696-1.992-6.504-5.256-6.504-1.68 0-2.88.744-3.72 1.848h-.072V16.35h-3.744v16.344zm6.432-6.696c-1.68 0-2.64-1.368-2.64-3.36 0-1.992.864-3.504 2.568-3.504 1.68 0 2.472 1.392 2.472 3.504 0 2.088-.912 3.36-2.4 3.36zM131.155 29.022c3.216 0 5.592-1.392 5.592-4.08 0-3.144-2.544-3.696-4.704-4.056-1.56-.288-2.952-.408-2.952-1.272 0-.768.744-1.128 1.704-1.128 1.08 0 1.824.336 1.968 1.44h3.6c-.192-2.424-2.064-3.936-5.544-3.936-2.904 0-5.304 1.344-5.304 3.936 0 2.88 2.28 3.456 4.416 3.816 1.632.288 3.12.408 3.12 1.512 0 .792-.744 1.224-1.92 1.224-1.296 0-2.112-.6-2.256-1.824h-3.696c.12 2.712 2.376 4.368 5.976 4.368zM142.061 28.998c1.704 0 2.784-.672 3.672-1.872h.072v1.512h3.744V16.35h-3.912v6.864c0 1.464-.816 2.472-2.16 2.472-1.248 0-1.848-.744-1.848-2.088V16.35h-3.888v8.064c0 2.736 1.488 4.584 4.32 4.584zM151.25 28.638h3.912V21.75c0-1.464.72-2.496 1.944-2.496 1.176 0 1.728.768 1.728 2.088v7.296h3.912V21.75c0-1.464.696-2.496 1.944-2.496 1.176 0 1.728.768 1.728 2.088v7.296h3.912v-7.992c0-2.76-1.392-4.656-4.176-4.656-1.584 0-2.904.672-3.864 2.16h-.048c-.624-1.32-1.848-2.16-3.456-2.16-1.776 0-2.952.84-3.72 2.112h-.072V16.35h-3.744v12.288z" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.184 40.638c11.045 0 20-8.954 20-20s-8.955-20-20-20c-11.046 0-20 8.954-20 20s8.954 20 20 20zm6.239-30.683c.304-1.079-.743-1.717-1.7-1.036l-13.346 9.509c-1.037.738-.874 2.21.245 2.21h3.514v-.027h6.85l-5.581 1.97-2.46 8.74c-.304 1.08.742 1.717 1.699 1.036l13.347-9.508c1.036-.739.873-2.21-.245-2.21h-5.33l3.007-10.684z"
              />
            </g>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={102}
            height={52}
            viewBox="0 0 102 52"
            fill="none"
          >
            <path
              d="M3.585 30.017h2.833v13.89H3.585v-13.89zM8.06 39.148a5.043 5.043 0 115.043 5.033 4.984 4.984 0 01-5.042-5.033zm7.234 0a2.19 2.19 0 10-2.19 2.247 2.133 2.133 0 002.19-2.247z"
              fill="#FAFAFA"
            />
            <path
              d="M29.535 34.389v9.046c0 3.201-2.503 4.551-5.034 4.551a4.863 4.863 0 01-4.504-2.304l2.436-1.407a2.172 2.172 0 002.125 1.2 1.887 1.887 0 002.19-2.04v-.878a3.36 3.36 0 01-2.775 1.237 4.835 4.835 0 010-9.67 3.39 3.39 0 012.776 1.237v-.944l2.786-.029zm-2.786 4.57a2.304 2.304 0 10-2.304 2.21 2.153 2.153 0 002.304-2.21zM31.168 39.148a5.043 5.043 0 115.043 5.033 4.985 4.985 0 01-5.043-5.033zm7.234 0a2.19 2.19 0 10-2.191 2.247 2.134 2.134 0 002.172-2.247h.019zM42.566 31.84a1.719 1.719 0 111.719 1.718 1.728 1.728 0 01-1.719-1.719zm.293 2.549h2.833v9.518h-2.833V34.39zM58.043 39.148a4.78 4.78 0 01-4.542 5.033 3.617 3.617 0 01-2.833-1.161v4.721h-2.833V34.39h2.833v.897a3.617 3.617 0 012.833-1.162 4.777 4.777 0 014.542 5.024zm-2.833 0a2.266 2.266 0 10-2.323 2.323 2.172 2.172 0 002.304-2.323h.019zM66.862 41.056c0 2.19-1.888 3.125-3.966 3.125a4.174 4.174 0 01-4.088-2.266l2.474-1.407a1.567 1.567 0 001.614 1.124c.69 0 1.03-.218 1.03-.595 0-1.048-4.722-.491-4.722-3.777 0-2.078 1.757-3.126 3.777-3.126a4.183 4.183 0 013.721 2.04l-2.483 1.303a1.407 1.407 0 00-1.285-.84c-.49 0-.793.188-.793.538.038 1.085 4.721.358 4.721 3.88zM77.288 34.389v9.518h-2.833v-.887a3.257 3.257 0 01-2.72 1.161c-1.888 0-3.56-1.37-3.56-3.947v-5.845h2.834v5.43a1.568 1.568 0 001.709 1.728c1.039 0 1.766-.605 1.766-1.955v-5.203h2.804zM93.662 38.071v5.836h-2.833v-5.59c0-.945-.463-1.568-1.37-1.568-.906 0-1.491.67-1.491 1.794v5.364h-2.833v-5.59c0-.945-.453-1.568-1.37-1.568-.915 0-1.482.67-1.482 1.794v5.364H79.45v-9.519h2.833v.879a2.926 2.926 0 012.55-1.143 2.833 2.833 0 012.493 1.256 3.135 3.135 0 012.757-1.256c2.153 0 3.579 1.567 3.579 3.947zM96.08 34.332a2.115 2.115 0 100-4.23 2.115 2.115 0 000 4.23zM35.644 22.811c5.47 0 9.906-4.434 9.906-9.905C45.55 7.435 41.115 3 35.644 3c-5.47 0-9.906 4.435-9.906 9.906 0 5.47 4.435 9.905 9.906 9.905zM57.789 22.811c5.47 0 9.905-4.434 9.905-9.905C67.694 7.435 63.26 3 57.79 3c-5.471 0-9.906 4.435-9.906 9.906 0 5.47 4.435 9.905 9.906 9.905zM23.407 3H3.604v19.802h19.803V3z"
              fill="#FAFAFA"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={219}
            height={42}
            viewBox="0 0 219 42"
            fill="none"
          >
            <mask
              id="a"
              style={{
                maskType: "luminance",
              }}
              maskUnits="userSpaceOnUse"
              x={0}
              y={1}
              width={219}
              height={40}
            >
              <path d="M218.5 1H.5v40h218V1z" fill="#fff" />
            </mask>
            <g mask="url(#a)" fill="#FAFAFA">
              <path d="M122.855 30.524h4.663V12.935h-4.663v17.589zm0-20.332h4.663V6.01h-4.663v4.183zM130.523 36.284h4.663v-7.749h.068c.994 1.509 2.606 2.503 5.074 2.503 4.526 0 7.612-3.6 7.612-9.291 0-5.486-2.983-9.292-7.646-9.292-2.4 0-4.046 1.132-5.177 2.674h-.103v-2.194h-4.491v23.349zm8.811-9.12c-2.777 0-4.251-2.092-4.251-5.28 0-3.155 1.165-5.657 4.08-5.657 2.88 0 4.045 2.331 4.045 5.657 0 3.325-1.508 5.28-3.874 5.28zM157.241 31.038c4.389 0 7.406-2.126 7.406-5.657 0-4.114-3.257-4.937-6.206-5.554-2.503-.515-4.834-.652-4.834-2.16 0-1.269 1.2-1.955 3.017-1.955 1.989 0 3.189.686 3.394 2.572h4.217c-.342-3.532-2.914-5.829-7.542-5.829-4.012 0-7.166 1.817-7.166 5.623 0 3.84 3.086 4.697 6.24 5.314 2.4.48 4.628.652 4.628 2.332 0 1.234-1.165 2.023-3.222 2.023-2.092 0-3.532-.892-3.84-2.915h-4.32c.274 3.737 3.12 6.206 8.228 6.206zM182.35 30.524V12.935h-4.663v10.149c0 2.331-1.337 3.977-3.531 3.977-1.989 0-2.914-1.132-2.914-3.189V12.935h-4.629v11.726c0 3.84 2.194 6.343 6.103 6.343 2.469 0 3.84-.926 5.04-2.537h.103v2.057h4.491zM185.366 30.524h4.663V20.307c0-2.332 1.269-3.84 3.155-3.84 1.714 0 2.708 1.028 2.708 3.017v11.04h4.663V20.307c0-2.332 1.2-3.84 3.154-3.84 1.715 0 2.709 1.028 2.709 3.017v11.04h4.663V18.695c0-3.84-2.092-6.24-5.795-6.24-2.228 0-4.08 1.166-5.28 3.086h-.068c-.857-1.852-2.64-3.086-4.869-3.086-2.434 0-4.148 1.234-5.108 2.846h-.103v-2.366h-4.492v17.589zM1.324 30.524h4.663V6.009H1.324v24.515zM17.389 31.038c5.451 0 9.188-4.046 9.188-9.291 0-5.246-3.737-9.292-9.188-9.292-5.452 0-9.189 4.046-9.189 9.292 0 5.245 3.737 9.291 9.189 9.291zm0-3.566c-2.88 0-4.457-2.297-4.457-5.725 0-3.429 1.577-5.76 4.457-5.76 2.846 0 4.457 2.331 4.457 5.76 0 3.428-1.611 5.725-4.457 5.725zM36.493 36.524c2.606 0 4.869-.617 6.343-1.989 1.303-1.2 2.092-2.88 2.092-5.348V12.935h-4.492v1.852h-.068c-1.063-1.475-2.675-2.332-4.869-2.332-4.457 0-7.611 3.36-7.611 8.606 0 5.314 3.84 8.4 7.748 8.4 2.229 0 3.566-.892 4.594-2.057h.103v1.92c0 2.4-1.268 3.668-3.908 3.668-2.16 0-3.154-.857-3.532-1.954h-4.628c.48 3.429 3.428 5.486 8.228 5.486zm-.068-10.8c-2.4 0-3.977-1.749-3.977-4.732 0-2.948 1.577-4.8 3.943-4.8 2.811 0 4.182 2.195 4.182 4.766 0 2.606-1.2 4.766-4.148 4.766zM56.26 31.038c5.452 0 9.19-4.046 9.19-9.291 0-5.246-3.738-9.292-9.19-9.292-5.45 0-9.188 4.046-9.188 9.292 0 5.245 3.737 9.291 9.189 9.291zm0-3.566c-2.88 0-4.456-2.297-4.456-5.725 0-3.429 1.577-5.76 4.457-5.76 2.846 0 4.457 2.331 4.457 5.76 0 3.428-1.611 5.725-4.457 5.725zM212.775 10.048c0-.79.64-1.429 1.429-1.429h2.857a1.429 1.429 0 110 2.857h-2.857c-.789 0-1.429-.64-1.429-1.428z" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M93.728 1c11.045 0 20 8.954 20 20s-8.955 20-20 20c-11.046 0-20-8.954-20-20s8.954-20 20-20zm-.723 1.497c-2.282.32-4.455 2.154-6.141 5.22-.49.89-.93 1.872-1.315 2.933 2.293-.576 4.812-.916 7.456-.968V2.497zm-9.147 8.634a23.095 23.095 0 011.739-4.11c.836-1.52 1.828-2.833 2.946-3.841a18.593 18.593 0 00-12.636 12.636c1.008-1.118 2.321-2.11 3.841-2.946a23.09 23.09 0 014.11-1.74zm-.48 1.69c-.576 2.293-.916 4.812-.969 7.456h-7.185c.321-2.282 2.154-4.454 5.22-6.14.89-.49 1.873-.931 2.934-1.316zm.477 7.456c.06-2.885.475-5.594 1.163-7.987 2.393-.687 5.102-1.102 7.987-1.162v3.123a10.64 10.64 0 01-6.027 6.026h-3.123zm-1.446 1.446h-7.185c.321 2.282 2.154 4.454 5.22 6.14.89.49 1.873.931 2.934 1.316-.576-2.293-.916-4.812-.969-7.456zm2.609 7.987c-.688-2.393-1.103-5.102-1.163-7.987h3.123a10.64 10.64 0 016.027 6.026v3.123c-2.885-.06-5.594-.475-7.987-1.162zm-1.16 1.16a23.09 23.09 0 01-4.11-1.74c-1.52-.836-2.833-1.828-3.84-2.946A18.593 18.593 0 0088.542 38.82c-1.118-1.008-2.11-2.32-2.946-3.84a23.093 23.093 0 01-1.739-4.11zm9.147 8.633c-2.282-.32-4.455-2.154-6.141-5.22-.49-.89-.93-1.873-1.315-2.933 2.293.576 4.812.916 7.456.968v7.185zm5.907-.683c1.118-1.008 2.11-2.32 2.946-3.84a23.086 23.086 0 001.739-4.11 23.1 23.1 0 004.11-1.74c1.52-.836 2.833-1.828 3.841-2.946A18.594 18.594 0 0198.912 38.82zm2.995-7.47a20.882 20.882 0 01-1.316 2.933c-1.686 3.066-3.859 4.9-6.14 5.22v-7.185c2.643-.052 5.162-.392 7.456-.968zm2.17-2.171a20.798 20.798 0 002.933-1.315c3.067-1.687 4.9-3.86 5.221-6.141h-7.185c-.053 2.644-.393 5.163-.969 7.456zm-.477-7.456c-.06 2.885-.475 5.594-1.163 7.987-2.393.687-5.102 1.102-7.987 1.162v-3.12a10.641 10.641 0 016.028-6.03h3.122zm1.446-1.446h7.185c-.321-2.282-2.154-4.454-5.221-6.14-.889-.49-1.872-.931-2.933-1.316.576 2.293.916 4.812.969 7.456zm-2.609-7.987c.688 2.393 1.103 5.102 1.163 7.987h-3.122a10.641 10.641 0 01-6.028-6.029v-3.12c2.885.06 5.594.475 7.987 1.162zm1.16-1.16a23.1 23.1 0 014.11 1.74c1.52.836 2.833 1.828 3.841 2.946A18.594 18.594 0 0098.912 3.18c1.118 1.008 2.11 2.32 2.946 3.84a23.088 23.088 0 011.739 4.11zM94.45 2.498c2.282.32 4.455 2.154 6.141 5.22.489.89.931 1.872 1.316 2.933-2.294-.576-4.813-.916-7.457-.968V2.497z"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 bg-[#92E10E] size-24 blur-[150px]" />
      <div className="absolute top-7 right-72 bg-[#D0941C] size-24 blur-[150px]" />
    </div>
  );
}

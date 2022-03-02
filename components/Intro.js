import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

export default function Intro() {
  return (
    <div
      className="pb-[100px] pt-[200px] relative bg-green overflow-x-hidden"
      id="main"
    >
      <div className="relative flex justify-center intro-br:ml-[200px] intro-tablet:flex-col">
        <div className="relative z-20">
          <Image
            src="/images/ten.png"
            width="650px"
            height="460px"
            objectFit="cover"
          />
          <p className="w-[400px] text-white text-[24px] pt-[15px]">
            Future Experience Lab är en experimentverkstad för att provköra
            framtiden. Och skapa den.
          </p>
        </div>
        <p className="text-[80px] font-bold font-Wagon w-[655px] -translate-y-[80px] -translate-x-[100px] leading-[85px] text-blue-green relative z-20">
          Tillsammans provkör vi framtiden. Och skapar den.
        </p>
        <div className="absolute top-0 -translate-y-[250px] translate-x-[200px] z-10">
          <Image src="/images/top-circle.png" width="660px" height="700px" />
        </div>
      </div>
      <div className="px-[60px] pt-[60px] max-w-[1080px] mx-auto translate-x-[80px] text-[48px]">
        <p className="text-[45px]">
          Genom engagerande samarbetsmetoder, kreativitet och upptäckarlust får
          destinationer, organisationer, företag och individer chans att klämma,
          känna och smaka på framtidens upplevelser med målet att utveckla
          modeller för hållbar samhällsförändring.
        </p>
      </div>
    </div>
  );
}

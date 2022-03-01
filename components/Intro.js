import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

export default function Intro() {
  return (
    <div className="pb-[100px] intro-text:pt-[50px] relative" id="main">
      {/* Image + text over */}
      <div className="relative flex justify-center intro-br:ml-[200px] intro-tablet:flex-col">
        <div>
          <Image src="/images/nine.png" width="650px" height="460px" />
          <p className="w-[400px] text-white text-[24px] pt-[15px]">
            Future Experience Lab är en experimentverkstad för att provköra
            framtiden. Och skapa den.
          </p>
        </div>
        <p className="text-[80px] font-bold font-Wagon w-[655px] -translate-y-[80px] -translate-x-[100px] leading-[85px] text-blue-green">
          Tillsammans provkör vi framtiden. Och skapar den.
        </p>
      </div>
      {/* Image left + text right */}
      <div className="px-[60px] pt-[60px] max-w-[1080px] mx-auto translate-x-[80px] text-[48px]">
        {/* <div className="md:row-start-2">
          <Parallax speed={10}>
            <div className="mt-[20%] ml-[20%] inline-block">
              <Image src="/images/one.png" width="160px" height="185px" />
            </div>
          </Parallax>
        </div> */}
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

import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

export default function Intro() {
  return (
    <div
      className="pb-[100px] pt-[200px] relative bg-green overflow-x-hidden end-break:pt-[100px]"
      id="main"
    >
      <div className="relative flex justify-center end-break:flex-col-reverse">
        <Parallax speed={20} className="relative z-20">
          <div className="relative z-20">
            <Image
              src="/images/ten.png"
              width="650px"
              height="460px"
              objectFit="cover"
            />
            <p className="w-[400px] text-white text-[24px] pt-[15px] end-break:pl-[20px] ourlabs-smaller:text-[21px] z-30 relative">
              Future Experience Lab är en experimentverkstad för att provköra
              framtiden. Och skapa den.
            </p>
          </div>
        </Parallax>
        <p className="text-[80px] font-bold font-Wagon w-[655px] -translate-y-[80px] -translate-x-[100px] leading-[85px] text-blue-green relative z-20 end-break:translate-x-0 end-break:translate-y-0 end-break:w-auto end-break:h-auto end-break:px-[25px] end-break:pb-[20px] footer-smaller-text:text-[40px] footer-smaller-text:leading-[70px]">
          Tillsammans provkör vi framtiden. Och skapar den.
        </p>
        <div className="absolute top-0 -translate-y-[250px] translate-x-[200px] z-10">
          <Image src="/images/top-circle.png" width="660px" height="700px" />
        </div>
      </div>
      <div className="px-[60px] pt-[60px] max-w-[1080px] mx-auto translate-x-[80px] text-[48px] collection-text:translate-x-0">
        <p className="text-[45px] text-blue-green ourlabs-smaller:text-[24px]">
          Genom engagerande samarbetsmetoder, kreativitet och upptäckarlust får
          destinationer, organisationer, företag och individer chans att klämma,
          känna och smaka på framtidens upplevelser med målet att utveckla
          modeller för hållbar samhällsförändring.
        </p>
      </div>
    </div>
  );
}

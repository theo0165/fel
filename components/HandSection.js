import Image from "next/image";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export default function HandSection() {
  return (
    <div className="grid h-[800px] pt-[100px] grid-cols-50/50 overflow-hidden hand-order:grid-rows-2 hand-order:grid-cols-none hand-order:h-auto bg-main-red text-white">
      <div className="relative hand-order:flex flex-col hand-order:pt-[120px]">
        <div className="rotate-[6deg] -translate-x-[40px] absolute hand-order:static hand-order:-translate-y-0 hand-order:-translate-x-[100px] hand-order:w-fit hand-order:rotate-3 z-40">
          <Parallax speed={20} translateX={[10, 30]} translateY={[0, 0]}>
            <Image src="/images/hands/left.png" width="1000px" height="401px" />
          </Parallax>
        </div>
        <p className="absolute -translate-y-1/2 top-[80%] left-0 text-[32px] text-left px-[40px] pb-[100px] hand-order:static hand-order:-translate-y-0 hand-order:pt-[120px]">
          <span className="font-Wagon text-[50px] font-bold">I LAB01:</span>{" "}
          Framtidskreatörerna utforskar vi hur åtta av Göteborgs utpräglade
          destinationsaktörer i samarbete med 34 kreativa Yrgo-studerande
          tillsammans kan skapa framtidens hybridevent. Läs mer om LAB01.
        </p>
      </div>
      <div className="relative hand-order:flex flex-col hand-order:py-[60px]">
        <div className="-rotate-[6deg] translate-x-[40px] absolute hand-order:static hand-order:-translate-y-0 hand-order:w-fit hand-order:self-end hand-order:-rotate-3 hand-order:translate-x-[100px]">
          <Parallax speed={20} translateX={[-10, -30]} translateY={[0, 0]}>
            <Image
              src="/images/hands/right.png"
              width="1000px"
              height="395px"
            />
          </Parallax>
        </div>
        <p className="absolute -translate-y-1/2 top-[80%] right-8 text-[32px] text-right px-[40px] pb-[100px] hand-order:static hand-order:-translate-y-0 hand-order:pt-[120px]">
          Provkör din verksamhets framtid.
          <br />
          Behöver du också ett Future Experience.
          <br />
          Lab för din verksamhets framtid?
          <br />
          Kontakta oss!
        </p>
      </div>
    </div>
  );
}

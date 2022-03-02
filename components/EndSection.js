import Image from "next/image";
import bottomCircle from "../public/images/bottom-circle.svg";

export default function EndSection() {
  return (
    <div className="bg-light-blue pt-[150px] pb-[60px] relative">
      <div className="relative h-[900px] overflow-x-hidden ourlabs-smaller:h-[640px]">
        <div className="absolute z-10 left-0 top-0 hand-order:-translate-x-[40%]">
          <Image src="/images/eleven.png" width="675px" height="665px" />
        </div>
        <div className="absolute z-20 right-0 top-[55px] hand-order:top-[200px] hand-order:translate-x-[100px]">
          <Image src="/images/ten.png" width="825px" height="670px" />
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="text-[120px] text-main-red font-bold font-Wagon text-center ourlabs-smaller:text-[90px]">
          About Future
        </h3>
        <p className="text-[32px] text-green px-[70px] max-w-[870px] self-left pb-[50px] relative z-20 ourlabs-smaller:text-[24px] ourlabs-smaller:px-[20px]">
          Future Experience Lab är ett innovationsinitiativ för att stärka
          upplevelsedestinationen Göteborg med särskilt fokus på
          hybridupplevelser som bidrar till samhällsförändring.
        </p>
        <p className="text-[32px] text-green text-right px-[70px] max-w-[850px] self-end pb-[50px] relative z-20 ourlabs-smaller:text-[24px] ourlabs-smaller:px-[20px]">
          Initiativtagare är UIrica Ramstedt från förändringsbyrån Marlon, Johan
          Carlberg från Yrgo och Christer Hedberg och Anna-Maria Ölander från
          samarbetsbyrån &friends.
        </p>
      </div>
      <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 z-10">
        <Image src="/images/bottom-circle.png" width="960px" height="970px" />
      </div>
    </div>
  );
}

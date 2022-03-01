import Image from "next/image";

export default function EndSection() {
  return (
    <div className="bg-light-blue pt-[150px] pb-[60px]">
      <div className="relative h-[1500px]">
        <div className="absolute z-10 left-0 top-0">
          <Image src="/images/eleven.png" width="815px" height="830px" />
        </div>
        <div className="absolute z-20 right-0 top-[55px]">
          <Image src="/images/ten.png" width="920px" height="1100px" />
        </div>
        <div className="absolute z-30 right-0 left-0 top-[955px] w-fit mx-auto">
          <Image
            src="/images/nine.png"
            width="930px"
            height="470px"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="text-[120px] text-main-red font-bold font-Wagon text-center">
          About Future
        </h3>
        <p className="text-[32px] text-green px-[70px] w-[870px] self-left pb-[100px]">
          Future Experience Lab är ett innovationsinitiativ för att stärka
          upplevelsedestinationen Göteborg med särskilt fokus på
          hybridupplevelser som bidrar till samhällsförändring.
        </p>
        <p className="text-[32px] text-green text-right px-[70px] w-[850px] self-end">
          Initiativtagare är UIrica Ramstedt från förändringsbyrån Marlon, Johan
          Carlberg från Yrgo och Christer Hedberg och Anna-Maria Ölander från
          samarbetsbyrån &friends.
        </p>
      </div>
    </div>
  );
}

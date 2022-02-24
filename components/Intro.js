import Image from "next/image";

export default function Intro() {
  return (
    <div className="pt-[150px]">
      {/* Image + text over */}
      <div className="relative flex justify-center">
        <p className="text-[80px] text-white absolute z-10 w-[700px] -translate-x-[200px]">
          Tillsammans provkör vi framtiden. Och skapar den.
        </p>
        <Image
          src="https://via.placeholder.com/650x460"
          width="650px"
          height="460px"
        />
      </div>
      <div className="flex justify-center">
        <p className="text-[45px] text-white w-[680px] pt-20 pl-[95px]">
          Future Experience Lab är en experimentverkstad för att provköra
          framtiden. Och skapa den.
        </p>
      </div>
      {/* Image left + text right */}
      <div className="grid grid-cols-2 grid-rows-none px-[60px] pt-[40px]">
        <div className="">
          <div className="mt-[20%] ml-[20%] inline-block">
            <Image
              src="https://via.placeholder.com/160x185"
              width="160px"
              height="185px"
            />
          </div>
        </div>
        <p className="text-[45px] text-white">
          Genom engagerande samarbetsmetoder, kreativitet och upptäckarlust får
          destinationer, organisationer, företag och individer chans att klämma,
          känna och smaka på framtidens upplevelser med målet att utveckla
          modeller för hållbar samhällsförändring.
        </p>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function HandSection() {
  return (
    <div className="grid grid-cols-50/50 text-white h-[400px] overflow-hidden">
      <div className="relative">
        <div className="rotate-[6deg] -translate-x-20 absolute -translate-y-1/2 top-1/2">
          <Image
            src="https://via.placeholder.com/750x150"
            width="750px"
            height="150px"
          />
        </div>
        <p className="absolute -translate-y-1/2 top-1/2 left-0 text-[32px] text-left pl-[90px] pr-[40px]">
          I LAB01: Framtidskreatörerna utforskar vi hur åtta av Göteborgs
          utpräglade destinationsaktörer i samarbete med 34 kreativa
          Yrgo-studerande tillsammans kan skapa framtidens hybridevent. Läs mer
          om LAB01.
        </p>
      </div>
      <div className="relative">
        <div className="-rotate-[6deg] translate-x-20 absolute -translate-y-1/2 top-1/2">
          <Image
            src="https://via.placeholder.com/750x150"
            width="750px"
            height="150px"
          />
        </div>
        <p className="absolute -translate-y-1/2 top-1/2 left-0 text-[32px] text-right pr-[90px] pl-[40px]">
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

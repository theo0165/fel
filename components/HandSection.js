import Image from "next/image";

export default function HandSection() {
  return (
    <div className="grid grid-cols-50/50 h-[400px] overflow-hidden hand-order:grid-rows-2 hand-order:grid-cols-none hand-order:h-auto">
      <div className="relative hand-order:flex flex-col hand-order:pb-[60px]">
        <div className="rotate-[6deg] -translate-x-20 absolute -translate-y-1/2 top-1/2 hand-order:static hand-order:-translate-y-0 hand-order:-translate-x-[100px] hand-order:w-fit hand-order:order-2 hand-order:rotate-3">
          <Image
            src="https://via.placeholder.com/750x150"
            width="750px"
            height="150px"
          />
        </div>
        <p className="absolute -translate-y-1/2 top-1/2 left-0 text-[32px] text-left pl-[90px] pr-[40px] hand-order:static hand-order:-translate-y-0 hand-order:order-1 hand-order:pb-[60px]">
          I LAB01: Framtidskreatörerna utforskar vi hur åtta av Göteborgs
          utpräglade destinationsaktörer i samarbete med 34 kreativa
          Yrgo-studerande tillsammans kan skapa framtidens hybridevent. Läs mer
          om LAB01.
        </p>
      </div>
      <div className="relative hand-order:flex flex-col">
        <div className="-rotate-[6deg] translate-x-20 absolute -translate-y-1/2 top-1/2 hand-order:static hand-order:-translate-y-0 hand-order:w-fit hand-order:order-2 hand-order:self-end hand-order:-rotate-3 hand-order:translate-x-[100px]">
          <Image
            src="https://via.placeholder.com/750x150"
            width="750px"
            height="150px"
          />
        </div>
        <p className="absolute -translate-y-1/2 top-1/2 left-0 text-[32px] text-right pr-[90px] pl-[40px] hand-order:static hand-order:-translate-y-0 hand-order:order-1 hand-order:pb-[60px]">
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

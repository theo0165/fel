import Image from "next/image";

export default function HandSection() {
  return (
    <div className="grid grid-cols-50/50">
      <div className="relative">
        <Image
          src="https://via.placeholder.com/750x150"
          width="750px"
          height="150px"
        />
        <p className="absolute top-0 left-0">
          I LAB01: Framtidskreatörerna utforskar vi hur åtta av Göteborgs
          utpräglade destinationsaktörer i samarbete med 34 kreativa
          Yrgo-studerande tillsammans kan skapa framtidens hybridevent. Läs mer
          om LAB01.
        </p>
      </div>
      <div className="relative">
        <Image
          src="https://via.placeholder.com/750x150"
          width="750px"
          height="150px"
        />
        <p className="absolute top-0 left-0">
          Provkör din verksamhets framtid Behöver du också ett Future Experience
          Lab för din verksamhets framtid?
        </p>
      </div>
    </div>
  );
}

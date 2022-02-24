import Image from "next/image";

export default function EndSection() {
  return (
    <div className="pt-[140px]">
      <div className="">
        <Image
          src="https://via.placeholder.com/520x330"
          width="520px"
          height="330px"
        />
        <Image
          src="https://via.placeholder.com/450x320"
          width="450px"
          height="320px"
        />
      </div>
      <div>
        <Image
          src="https://via.placeholder.com/860x440"
          width="860px"
          height="440px"
        />
        <Image
          src="https://via.placeholder.com/160x185"
          width="160px"
          height="185px"
        />
      </div>
      <div className="text-white text-[40px]">
        <p>
          Om Future Experience Lab Future Experience Lab är ett
          innovationsinitiativ för att stärka upplevelsedestinationen Göteborg
          med särskilt fokus på hybridupplevelser som bidrar till
          samhällsförändring.
        </p>
        <br />
        <p>
          Initiativtagare är UIrica Ramstedt från förändringsbyrån Marlon, Johan
          Carlberg från Yrgo och Christer Hedberg och Anna-Maria Ölander från
          samarbetsbyrån &friends.
        </p>
      </div>
    </div>
  );
}

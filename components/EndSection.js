import Image from "next/image";

export default function EndSection() {
  return (
    <div className="pt-[140px] pb-[100px]">
      <div className="mb-[90px]">
        <div className="inline-block">
          <Image
            src="https://via.placeholder.com/520x330"
            width="520px"
            height="330px"
          />
        </div>
        <div className="inline-block translate-x-[50px] translate-y-[50px]">
          <Image
            src="https://via.placeholder.com/450x320"
            width="450px"
            height="320px"
          />
        </div>
      </div>
      <div className="ml-[90px] flex items-center relative mb-[60px]">
        <Image
          src="https://via.placeholder.com/860x440"
          width="860px"
          height="440px"
        />
        <div className="ml-[200px]">
          <Image
            src="https://via.placeholder.com/160x185"
            width="160px"
            height="185px"
          />
        </div>
      </div>
      <div className="text-white text-[40px] w-10/12 mx-auto">
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

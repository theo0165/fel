import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

export default function EndSection() {
  return (
    <div className="pt-[140px] pb-[100px]">
      <div className="mb-[90px] end-break:flex end-break:flex-col">
        <div className="inline-block end-break:mb-[20px]">
          <Image src="/images/four.png" width="520px" height="330px" />
        </div>
        <div className="inline-block translate-x-[50px] translate-y-[50px] end-break:translate-x-0 end-break:translate-y-0  end-break:self-end">
          <Image
            src="/images/five.jpg"
            width="450px"
            height="320px"
            className="object-cover"
          />
        </div>
      </div>
      <div className="ml-[90px] flex items-center relative mb-[60px] end-break:ml-0 end-break:flex-col end-break:items-start">
        <Image src="/images/six.jpg" width="860px" height="440px" />
        <Parallax
          speed={10}
          className="end-break:self-end end-break:mr-[40px] end-break:mt-[50px]"
        >
          <div className="ml-[200px]">
            <Image src="/images/seven.jpg" width="160px" height="185px" />
          </div>
        </Parallax>
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

import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import EndSection from "../components/EndSection";
import HandSection from "../components/HandSection";
import Intro from "../components/Intro";
import LabCollection from "../components/LabCollection";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Intro />
      <div className="relative w-full h-[1000px] flex items-center justify-center">
        <div className="absolute left-0 top-0 -translate-y-[150px] z-10">
          <Image
            src="/images/our-labs-circle.png"
            width="345px"
            height="850px"
          />
        </div>
        <Parallax speed={-10} className="z-10">
          <p className="z-10 text-[200px] text-center font-Wagon font-bold">
            Our labs
          </p>
        </Parallax>
        <Image
          src="/images/eleven.png"
          layout="fill"
          className="object-cover object-center"
        />
      </div>
      <LabCollection />
      <HandSection />
      <EndSection />
    </Layout>
  );
}

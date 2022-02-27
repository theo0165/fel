import Image from "next/image";
import EndSection from "../components/EndSection";
import HandSection from "../components/HandSection";
import Intro from "../components/Intro";
import LabCollection from "../components/LabCollection";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      {/* Graphics area */}
      <div className="w-full h-[675px] bg-sky-300 opacity-80 -translate-y-[60px] z-20 relative header-break:-translate-y-0 graphics-height:-translate-y-0"></div>
      <Intro />
      <div className="relative w-full h-screen flex items-center justify-center">
        <p className="z-10 text-[200px] text-center">Our labs</p>
        <Image
          src="/images/three.png"
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

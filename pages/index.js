import Image from "next/image";
import Intro from "../components/Intro";
import LabCollection from "../components/LabCollection";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      {/* Graphics area */}
      <div className="w-full h-[675px] bg-sky-300 opacity-80 -translate-y-[60px] z-20 relative"></div>
      <Intro />
      <div className="relative w-full h-screen flex items-center justify-center">
        <p className="z-10 text-[200px] text-center">Our labs</p>
        <Image
          src="https://via.placeholder.com/2000x1000"
          layout="fill"
          className="object-cover object-center"
        />
      </div>
      <LabCollection />
    </Layout>
  );
}

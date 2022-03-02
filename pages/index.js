import EndSection from "../components/EndSection";
import HandSection from "../components/HandSection";
import Intro from "../components/Intro";
import LabCollection from "../components/LabCollection";
import Layout from "../components/Layout";
import OurLabs from "../components/OurLabs";

export default function Home() {
  return (
    <Layout>
      <Intro />
      <OurLabs />
      <LabCollection />
      <HandSection />
      <EndSection />
    </Layout>
  );
}

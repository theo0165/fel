import Intro from "../components/Intro";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      {/* Graphics area */}
      <div className="w-full h-[675px] bg-sky-300 opacity-80 -translate-y-12"></div>
      <Intro />
    </Layout>
  );
}

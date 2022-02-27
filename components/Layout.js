import Head from "next/head";
import { ParallaxProvider } from "react-scroll-parallax";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <ParallaxProvider>
        <Head>
          <title>Future Experience Lab</title>
        </Head>
        <a
          href="#main"
          className="absolute text-white left-5 -translate-y-[100%] focus:-translate-y-0 z-50 bg-gray-500 p-4 transition-transform"
          tabIndex="1"
        >
          Skip to content...
        </a>
        <Header />
        <main>{children}</main>
        <Footer />
      </ParallaxProvider>
    </>
  );
}

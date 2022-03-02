import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import { InView } from "react-intersection-observer";
import { useEffect, useState, useRef } from "react";
import styles from "../styles/OurLabs.module.css";

export default function OurLabs() {
  const classes = {
    inView:
      styles.animation +
      " z-10 text-[200px] text-center font-Wagon font-bold ourlabs-smaller:text-[70px]",
    notInView:
      "z-10 text-[200px] text-center font-Wagon font-bold ourlabs-smaller:text-[70px]",
  };

  const [elementClasses, setElementClasses] = useState(classes.notInView);

  return (
    <div className="relative w-full h-[1000px] flex items-center justify-center">
      <div className="fixed top-0 left-0 bg-blue-200 text-black z-40"></div>
      <div className="absolute left-0 top-0 -translate-y-[150px] z-10">
        <Image src="/images/our-labs-circle.png" width="345px" height="850px" />
      </div>
      <InView
        as="div"
        onChange={(inView, entry) => {
          setElementClasses(inView ? classes.inView : classes.notInView);
        }}
        className="z-10"
      >
        <Parallax speed={-10}>
          <p className={elementClasses}>Our labs</p>
        </Parallax>
      </InView>
      <Image
        src="/images/eleven.png"
        layout="fill"
        className="object-cover object-center"
      />
    </div>
  );
}

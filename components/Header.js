import { useRef } from "react";

export default function Header() {
  const firstVideo = useRef();
  const secondVideo = useRef();
  const thirdVideo = useRef();

  return (
    <header className="font-['Wagon']">
      <div className="topBar w-full py-3 mx-auto text-[#DBDBDB] absolute top-0 right-[50%] translate-x-1/2 z-20">
        <div className="font-bold tex-[50px] text-right pr-[20px]">
          <p>
            Future.
            <br />
            Experience.
            <br />
            Lab.
          </p>
        </div>
      </div>
      <div className="h-screen grid grid-rows-3 bg-black text-[175px] header-break:text-[100px] header-smallest-text:text-[50px]">
        <div className="relative flex items-end">
          <a
            href="#"
            className=" text-main-red z-30 pl-[40px] relative uppercase font-bold hover:font-extralight hover:italic header-smallest-text:pl-[20px]"
            tabIndex="2"
            onMouseEnter={(event) => firstVideo.current.pause()}
            onMouseLeave={(event) => firstVideo.current.play()}
          >
            labs
          </a>
          <a className="text-blue-green font-bold pl-[40px] relative z-30 header-break:pl-[50px] header-smallest-text:pl-[20px]">
            01 02
          </a>
          <video
            src="/video/header-video-one.mp4"
            loop
            autoPlay
            muted
            className="absolute right-0 top-0 w-screen h-full object-cover border-b-[2px] border-green"
            ref={firstVideo}
          />
        </div>
        <div className="font-bold relative flex items-center">
          <a
            href="#"
            className="text-main-red z-30 pl-[40px] relative uppercase hover:font-extralight hover:italic header-smallest-text:pl-[20px]"
            tabIndex="3"
            onMouseEnter={(event) => secondVideo.current.pause()}
            onMouseLeave={(event) => secondVideo.current.play()}
          >
            Future
          </a>
          <video
            src="/video/header-video-two.mp4"
            loop
            autoPlay
            muted
            className="absolute right-0 top-0 w-screen h-full object-cover border-b-[2px] border-green"
            ref={secondVideo}
          />
        </div>
        <div className="font-bold relative header-break:flex header-break:items-start header-break:pt-[20px]">
          <a
            href="#"
            className="text-main-red z-30 pl-[40px] relative uppercase hover:font-extralight hover:italic header-smallest-text:pl-[20px]"
            tabIndex="3"
            onMouseEnter={(event) => thirdVideo.current.pause()}
            onMouseLeave={(event) => thirdVideo.current.play()}
          >
            Contact
          </a>
          <video
            src="/video/header-video-three.mp4"
            loop
            autoPlay
            muted
            className="absolute right-0 top-0 w-screen h-full object-cover"
            ref={thirdVideo}
          />
        </div>
      </div>
    </header>
  );
}

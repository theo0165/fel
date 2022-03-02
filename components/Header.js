import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className="font-['Wagon']">
      {/*
      <div className="topBar w-11/12 border-b-2 border-white flex justify-between py-3 mx-auto text-white absolute top-0 right-[50%] translate-x-1/2 z-20">
        <div>LOGO</div>
        <div>COLORS</div>
      </div>
      */}
      <div className="h-screen grid grid-rows-3 bg-black text-[150px] header-break:text-[100px] header-smallest-text:text-[50px]">
        <div className="relative header-break:flex header-break:items-center">
          <a
            href="#"
            className=" text-main-red z-30 pl-28 relative uppercase font-bold hover:font-extralight hover:italic header-smallest-text:pl-[20px]"
            tabIndex="2"
          >
            labs
          </a>
          <a className="text-blue-green font-bold pl-[100px] relative z-30 header-break:pl-[50px] header-smallest-text:pl-[20px]">
            01 02
          </a>
          <video
            src="https://dl8.webmfiles.org/big-buck-bunny_trailer.webm"
            loop
            autoPlay
            muted
            className="absolute right-0 top-0 w-screen h-full object-cover"
          />
        </div>
        <div className="font-bold relative header-break:flex header-break:items-center">
          <a
            href="#"
            className="text-main-red z-30 pl-28 relative uppercase hover:font-extralight hover:italic header-smallest-text:pl-[20px]"
            tabIndex="3"
          >
            Future
          </a>
          <video
            src="https://dl8.webmfiles.org/big-buck-bunny_trailer.webm"
            loop
            autoPlay
            muted
            className="absolute right-0 top-0 w-screen h-full object-cover"
          />
        </div>
        <div className="font-bold relative header-break:flex header-break:items-center">
          <a
            href="#"
            className="text-main-red z-30 pl-28 relative uppercase hover:font-extralight hover:italic header-smallest-text:pl-[20px]"
            tabIndex="3"
          >
            Contact
          </a>
          <video
            src="https://dl8.webmfiles.org/big-buck-bunny_trailer.webm"
            loop
            autoPlay
            muted
            className="absolute right-0 top-0 w-screen h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}

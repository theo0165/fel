import styles from "../styles/Header.module.css";

export default function Header() {
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
          >
            labs
          </a>
          <a className="text-blue-green font-bold pl-[40px] relative z-30 header-break:pl-[50px] header-smallest-text:pl-[20px]">
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
        <div className="font-bold relative flex items-center">
          <a
            href="#"
            className="text-main-red z-30 pl-[40px] relative uppercase hover:font-extralight hover:italic header-smallest-text:pl-[20px]"
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
        <div className="font-bold relative header-break:flex header-break:items-start header-break:pt-[20px]">
          <a
            href="#"
            className="text-main-red z-30 pl-[40px] relative uppercase hover:font-extralight hover:italic header-smallest-text:pl-[20px]"
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

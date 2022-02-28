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
      <div className="h-screen grid grid-rows-3 bg-black">
        <div className="font-bold relative">
          <a
            href="#"
            className={
              styles.hoverStroke +
              " text-[150px] text-[#5200FF] z-10 pl-28 relative"
            }
            tabIndex="2"
          >
            Start
          </a>
          <video
            src="https://dl8.webmfiles.org/big-buck-bunny_trailer.webm"
            loop
            autoPlay
            muted
            className="absolute right-0 top-0 w-screen h-full object-cover"
          />
        </div>
        <div className="font-bold relative">
          <a
            href="#"
            className={
              styles.hoverStroke +
              " text-[150px] text-[#5200FF] z-10 pl-28 relative"
            }
            tabIndex="3"
          >
            LAB01
          </a>
          <video
            src="https://dl8.webmfiles.org/big-buck-bunny_trailer.webm"
            loop
            autoPlay
            muted
            className="absolute right-0 top-0 w-screen h-full object-cover"
          />
        </div>
        <div className="font-bold relative">
          <a
            href="#"
            className={
              styles.hoverStroke +
              " text-[150px] text-[#5200FF] z-10 pl-28 relative"
            }
            tabIndex="3"
          >
            Kontakt
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

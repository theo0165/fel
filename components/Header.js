import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header>
      <div className="h-screen grid grid-rows-3 bg-black">
        <div className="flex font-bold px-28">
          <a className={styles.hoverStroke + " text-[200px] text-[#5200FF]"}>
            Start
          </a>
        </div>
        <div className="flex font-bold px-28">
          <a className={styles.hoverStroke + " text-[200px] text-[#5200FF]"}>
            LAB01
          </a>
        </div>
        <div className="flex font-bold px-28">
          <a className={styles.hoverStroke + " text-[200px] text-[#5200FF]"}>
            Kontakt
          </a>
        </div>
      </div>
    </header>
  );
}

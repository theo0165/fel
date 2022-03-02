import { FaInstagram, FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="pt-[50px] pb-[50px] px-[40px] bg-grey text-white z-20 relative">
      <div className="pt-[40px] relative inline-block">
        <div className="text-[160px] leading-[160px] uppercase footer-break:text-[80px] footer-break:leading-[80px] text-main-red font-Wagon font-bold">
          <p>Future</p>
          <p>Experience</p>
          <p>Lab</p>
        </div>
        <div className="absolute bottom-[40px] left-[500px] footer-break:bottom-[10px] footer-break:left-[250px] flex items-center footer-break:w-[500px]">
          <p className="text-[32px] font-medium text-light-blue footer-break:text-[24px]">
            Tillsammans provkör vi
            <br /> framtiden. Och skapar den.
          </p>
          <div className="flex pl-[40px]">
            <FaInstagram
              color="#F44A5A"
              className="mr-[20px] cursor-pointer w-[70px] h-[70px] footer-break:w-[40px] footer-break:h-[40px]"
            />
            <FaFacebookSquare
              color="#F44A5A"
              className="cursor-pointer w-[70px] h-[70px] footer-break:w-[40px] footer-break:h-[40px]"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between text-right items-end text-[18px] end-break:grid grid-cols-2 grid-rows-2 pt-[50px]">
        <div className="justify-self-start pl-[11px] end-break:pl-0">
          <p>Ulrica Ramstedt</p>
          <p>070-384 96 00</p>
          <p>ulrica.ramstedt@marlon.se</p>
        </div>
        <div className="justify-self-center end-break:justify-self-end">
          <p>Johan Carlberg</p>
          <p>johan.carlberg@educ.goteborg.se</p>
        </div>
        <div className="justify-self-center end-break:justify-self-start">
          <p>Anna-Maria Ölander</p>
          <p>anna-maria@andfriends.se</p>
        </div>
        <div className="justify-self-center end-break:justify-self-end">
          <p>Christer Hedberg</p>
          <p>christer@andfriends.se</p>
        </div>
      </div>
    </footer>
  );
}

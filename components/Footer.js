export default function Footer() {
  return (
    <footer className="text-white py-[100px] px-[40px] bg-[#262626]">
      <div className="flex justify-between text-right items-end text-[18px] end-break:grid grid-cols-2 grid-rows-2">
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
      <div className="pt-[40px] relative inline-block">
        <div className="text-[160px] leading-[160px] uppercase footer-break:text-[80px] footer-break:leading-[80px] text-main-red">
          <p>Future</p>
          <p>Experience</p>
          <p>Lab</p>
        </div>
        <p className="absolute bottom-[10px] right-0 text-[32px] font-medium end-break:text-[21px]">
          Tillsammans provkör vi
          <br /> framtiden. Och skapar den.
        </p>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="text-white py-[100px] w-11/12 mx-auto">
      <div className="flex justify-between text-right items-end text-[18px]">
        <div className="justify-self-start pl-[11px]">
          <p>Ulrica Ramstedt</p>
          <p>070-384 96 00</p>
          <p>ulrica.ramstedt@marlon.se</p>
        </div>
        <div className="justify-self-center">
          <p>Johan Carlberg</p>
          <p>johan.carlberg@educ.goteborg.se</p>
        </div>
        <div className="justify-self-center">
          <p>Anna-Maria Ölander</p>
          <p>anna-maria@andfriends.se</p>
        </div>
        <div className="justify-self-center">
          <p>Christer Hedberg</p>
          <p>christer@andfriends.se</p>
        </div>
      </div>
      <div className="pt-[40px] relative inline-block">
        <div className="text-[160px] leading-[160px] uppercase">
          <p>Future</p>
          <p>Experience</p>
          <p>Lab</p>
        </div>
        <p className="absolute bottom-[10px] right-0 text-[32px] font-medium">
          Tillsammans provkör vi
          <br /> framtiden. Och skapar den.
        </p>
      </div>
    </footer>
  );
}

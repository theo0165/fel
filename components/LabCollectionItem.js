export default function LabCollectionItem({ item }) {
  return (
    <div className={item.classes + " flex items-center"}>
      <div>
        <span className="border-b-4 italic border-blue-green white font-Wagon font-extralight text-[140px]">
          {item.title}
        </span>
      </div>
      <p className="text-[20px] text-white max-w-[260px] pl-[45px]">
        This lab is a collaboration with students and partners from Yrgo.{" "}
        <a className="underline text-blue-green">Read more...</a>
      </p>
    </div>
  );
}

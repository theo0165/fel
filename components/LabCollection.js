import LabCollectionItem from "./LabCollectionItem";

const items = [
  { title: "01", classes: "justify-self-center" },
  { title: "02", classes: "" },
  { title: "03", classes: "justify-self-end" },
  { title: "04", classes: "justify-self-center" },
];

export default function LabCollection() {
  return (
    <div className="grid bg-green grid-rows-2 grid-cols-none h-auto text-[80px] py-[60px] collection-text:flex-col collection-text:py-[300px] text-blue-green">
      <div className="grid grid-cols-2 grid-rows-none">
        <LabCollectionItem item={items[0]} />
        <LabCollectionItem item={items[1]} />
      </div>
      <div className="grid grid-cols-2 grid-rows-none">
        <LabCollectionItem item={items[2]} />
        <LabCollectionItem item={items[3]} />
      </div>
    </div>
  );
}

export default function LabCollection() {
  return (
    <div className="flex justify-around text-white h-[250px] text-[80px] px-[100px] my-[100px] collection-text:flex-col collection-text:my-[200px]">
      <a className="self-start collection-text:order-2">Lab 01</a>
      <a className="self-end collection-text:order-1">Lab 02</a>
      <a className="self-start collection-text:order-4">Lab 03</a>
      <a className="self-end collection-text:order-3">Lab 04</a>
    </div>
  );
}

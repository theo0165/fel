export default function LabCollection() {
  return (
    <div className="flex justify-around h-[400px] text-[80px] px-[100px] py-[100px] collection-text:flex-col collection-text:py-[300px] bg-blue-green">
      <a className="self-start collection-text:order-2">Lab 01</a>
      <a className="self-end collection-text:order-1">Lab 02</a>
      <a className="self-start collection-text:order-4">Lab 03</a>
      <a className="self-end collection-text:order-3">Lab 04</a>
    </div>
  );
}

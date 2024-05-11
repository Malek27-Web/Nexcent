interface SectionProps {
  imagepath: string;
  title?: string;
  description: string;
  btnText: string;
}
function Section({ imagepath, title, description, btnText }: SectionProps) {
  return (
    <div className="flex flex-col md:flex-row  items-center justify-center md:justify-around">
      <div className="">
        <img src={imagepath} alt="" />
      </div>

      <div className="flex w-3/5 flex-col gap-y-6">
        <p className="text-[#4D4D4D] text-4xl font-init font-semibold">
          {title}
        </p>
        <p className="text-[#717171] font-init font-lg">{description}</p>
        <button className="text-white p-3 md:1/2 md:w-1/3 bg-[#4CAF50] whitespace-nowrap rounded">
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default Section;

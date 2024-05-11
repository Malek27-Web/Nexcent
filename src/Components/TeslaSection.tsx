interface SectionProps {
  imagepath: string;
  description: string;
}
function TeslaSection({ imagepath, description }: SectionProps) {
  return (
    <div className="flex flex-col md:flex-row bg-[#F5F7FA] items-center justify-center md:justify-around">
      <div className="">
        <img src={imagepath} alt="" />
      </div>

      <div className="flex w-3/5 flex-col gap-y-6">
        <p className="text-[#717171] font-init font-lg">{description}</p>
        <p className="text-[#4CAF50] text-md font-bold">Tim Smith</p>
        <p className="text-[#89939E] font-init font-lg">
          British Dragon Boat Racing Association
        </p>
        <div className="flex flex-row flex-wrap justify-around items-center">
          <img
            className="w-[4rem] h-[4rem] cursor-pointer"
            src="./client-1.png"
            alt=""
          />
          <img
            className="w-[4rem] h-[4rem] cursor-pointer"
            src="./client-2.png"
            alt=""
          />
          <img
            className="w-[4rem] h-[4rem] cursor-pointer"
            src="./client-3.png"
            alt=""
          />
          <img
            className="w-[4rem] h-[4rem] cursor-pointer"
            src="./client-4.png"
            alt=""
          />
          <img
            className="w-[4rem] h-[4rem] cursor-pointer"
            src="./client-5.png"
            alt=""
          />
          <img
            className="w-[4rem] h-[4rem] cursor-pointer"
            src="./client-6.png"
            alt=""
          />
          <p className="text-[#4CAF50] font-bold">Meet all Customers →</p>
        </div>
      </div>
    </div>
  );
}

export default TeslaSection;

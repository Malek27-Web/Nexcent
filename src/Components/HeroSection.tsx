interface HeroSectionProps {
  isMenuOpen: boolean;
}

function HeroSection({ isMenuOpen }: HeroSectionProps) {
  const marginTopClass = isMenuOpen ? "mt-80" : "md:mt-7";

  return (
    <>
      <div
        className={`flex flex-col-reverse md:flex-row justify-around  items-center  w-full gap-x-9    ${marginTopClass}`}
      >
        <div className="flex flex-col items-center md:items-start gap-y-3">
          <p className="font-semibold  font-inter whitespace-nowrap  text-3xl md:text-5xl text-[#4D4D4D]">
            Lessons and insights
          </p>

          <span className="font-semibold  font-inter text-3xl md:text-5xl text-[#4CAF50]">
            from 8 years
          </span>
          <p className="text-[#4D4D4D] text-center">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="text-white p-3 px-8 bg-[#4CAF50] rounded">
            Register
          </button>
        </div>
        <div className="">
          <img src="./Illustration.png" alt="" className="" />
        </div>
      </div>
      <br />
      <div className="flex  justify-center">
        <img src="./Dot.png" alt="" />
      </div>
      <br />
    </>
  );
}

export default HeroSection;

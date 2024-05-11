function Footer() {
  return (
    <div className="w-full flex flex-col items-center lg:flex-row  justify-center lg:justify-around pt-5 bg-[#263238] h-full lg:h-72">
      <div className="flex flex-col gap-y-11  pt-9">
        <div className="flex   flex-row gap-x-2 items-center">
          <img src="./Logo.png" alt="" />
          <p className="text-white font-inter font-bold text-4xl">Nexcent</p>
        </div>
        <div className="flex flex-col ">
          <p className="text-white text-lg font-inter">
            Copyright © 2020 Nexcent ltd.
          </p>
          <p className="text-white text-lg font-inter">All rights reserved</p>
        </div>
        <div>
          <img className="cursor-pointer" src="./Social.png" alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-y-8 md:flex-row pt-9 items-center  gap-x-36 ">
        <div className="flex flex-col gap-y-4">
          <p className="text-white text-2xl font-inter font-semibold">
            Company
          </p>
          <ul className="flex flex-col gap-y-1  font-inter text-white">
            <li className="cursor-pointer text-lg font-normal">About us</li>
            <li className="cursor-pointer text-lg font-normal">Blog</li>
            <li className="cursor-pointer text-lg font-normal">Contact</li>
            <li className="cursor-pointer text-lg font-normal">Pricing</li>
            <li className="cursor-pointer text-lg font-normal">Testimonials</li>
          </ul>
        </div>

        <div className="flex flex-col  gap-y-4">
          <p className="text-white text-2xl font-inter font-semibold">
            Support
          </p>
          <ul className="flex flex-col gap-y-1 text-white">
            <li className="cursor-pointer text-lg font-normal">Help center</li>
            <li className="cursor-pointer text-lg font-normal">
              Terms of service
            </li>
            <li className="cursor-pointer text-lg font-normal">Legal</li>
            <li className="cursor-pointer text-lg font-normal">
              Privacy policy
            </li>
            <li className="cursor-pointer text-lg font-normal">Status</li>
          </ul>
        </div>

        <div className="flex flex-col  gap-y-2">
          <p className="text-white text-2xl   font-inter font-medium">
            Stay up to date
          </p>
          <div className="relative">
            <input
              type="text"
              name="mail"
              id="mail"
              placeholder="Your mail address"
              className="bg-[#717171] p-2 rounded text-white placeholder:text-sm placeholder:text-white w-64 pr-8"
            />
            <img
              className="absolute inset-y-0 right-0 mr-3 my-auto h-5 w-5 text-white"
              src="./send.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

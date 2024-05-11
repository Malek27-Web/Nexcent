import Achivement from "./Achivement";
import Card from "./Card";
import Cart from "./Cart";
import Footer from "./Footer";
import Section from "./Section";
import TeslaSection from "./TeslaSection";

function Client() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-y-3">
        <div className="flex flex-col justify-center gap-y-5 items-center">
          <h1 className="text-4xl font-inter font-bold text-[#4D4D4D] ">
            Our Clients
          </h1>
          <p className="font-inter text-[#717171] text-center text-lg">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className="flex flex-row flex-wrap justify-around">
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
          <img
            className="w-[4rem] h-[4rem] cursor-pointer"
            src="./client-7.png"
            alt=""
          />
        </div>
      </div>
      <br />
      <br />
      <div className="flex flex-col gap-y-3 * items-center justify-center">
        <p className="text-4xl tracking-normal font-inter text-center font-bold text-[#4D4D4D]">
          Manage your entire community <br /> in a single system
        </p>
        <p className="font-inter text-[#717171] text-center text-lg">
          Who is Nextcent suitable for?
        </p>
      </div>
      <br />
      <div className=" flex flex-col gap-x-3 md:flex-row items-center gap-y-4 md:items-stretch md:justify-around">
        <Card
          imagepath="./Icon_1.png"
          title="Membership Organisations"
          description="Our membership management software provides full automation of membership renewals and payments"
        />
        <Card
          imagepath="./Icon2.png"
          title="National Associations"
          description="Our membership management software provides full automation of membership renewals and payments"
        />
        <Card
          imagepath="./Icon3.png"
          title="Clubs And Groups"
          description="Our membership management software provides full automation of membership renewals and payments"
        />
      </div>
      <br />
      <Section
        imagepath="./Frame3.png"
        title="The unseen of spending three  years at Pixelgrade"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
        btnText="Learn More"
      />
      <br />
      <Achivement />
      <br />
      <Section
        imagepath="./pana.png"
        title="How to design your site footer like we did"
        description="Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."
        btnText="Learn More"
      />
      <br />
      <br />
      <TeslaSection
        imagepath="image9.png"
        description="Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna."
      />
      <br />
      <div className="flex flex-col justify-center items-center gap-y-3">
        <p className="font-bold text-3xl font-init tracking-wide text-center text-[#4D4D4D] ">
          Caring is the new marketing
        </p>
        <p className="text-center text-[#717171] text-lg">
          The Nexcent blog is the best place to read about the latest membership
          insights,
          <br /> trends and more. See who's joining the community, read about
          how our community <br /> are increasing their membership income and
          lot's more.​
        </p>
        <div className="flex flex-col items-center justify-center md:gap-x-4 gap-y-32 md:flex-row   ">
          <Cart
            imagePath="./image18.png"
            description="Creating Streamlined Safeguarding Processes with OneRen"
            text="Readmore"
          />
          <Cart
            imagePath="./image19.png"
            description="What are your safeguarding responsibilities and how can you manage them?"
            text="Readmore"
          />
          <Cart
            imagePath="./image20.png"
            description="Revamping the Membership Model with Triathlon Australia"
            text="Readmore"
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="flex flex-col justify-center bg-[#F5F7FA] pt-3 gap-y-5 items-center">
        <p className="text-4xl text-center text-[#263238] font-bold">
          Pellentesque suscipit <br /> fringilla libero eu.
        </p>
        <button className=" text-white font-inter font-semibold p-3 md:1/3 md:w-1/6 bg-[#4CAF50] whitespace-nowrap rounded">
          Get a demo →
        </button>
        <br />
      </div>

      <Footer />
    </div>
  );
}

export default Client;

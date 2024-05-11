function Achivement() {
  return (
    <div className="bg-[#F5F7FA] flex flex-col md:flex-row items-center justify-around  md:h-64">
      <div className="flex flex-col gap-y-3 items-center">
        <p className="text-[#4D4D4D]  font-bold font-init text-4xl">
          Helping a local
        </p>
        <span className="text-[#4CAF50] text-center md:text-left font-init font-bold text-4xl">
          business reinvent itself{" "}
        </span>
        <p className="text-lg text-[#4D4D4D] text-center md:text-left ">
          We reached here with our hard work and dedication
        </p>
      </div>
      <br />
      <div className="flex flex-col gap-y-4 items-center">
        <div className="flex flex-row-reverse gap-x-5 items-center">
          <div className="flex flex-col ">
            <p className="text-3xl text-[#4D4D4D] font-bold">2,245,341</p>
            <p className="text-lg text-[#717171]">Members</p>
          </div>
          <img src="./Icon4.png" alt="" />
        </div>

        <div className="flex flex-row-reverse gap-x-5 items-center">
          <div className="flex flex-col ">
            <p className="text-3xl text-[#4D4D4D] font-bold">828,867</p>
            <p className="text-lg text-[#717171]">Event Bookings</p>
          </div>
          <img src="./Icon5.png" alt="" />
        </div>
      </div>

      <div className="flex flex-col gap-y-4 items-center">
        <div className="flex flex-row-reverse gap-x-5 mr-9 items-center">
          <div className="flex flex-col ">
            <p className="text-3xl text-[#4D4D4D] font-bold">46,328</p>
            <p className="text-lg text-[#717171]">Clubs</p>
          </div>
          <img src="./Icon6.png" alt="" />
        </div>

        <div className="flex flex-row-reverse gap-x-5 items-center">
          <div className="flex flex-col ">
            <p className="text-3xl text-[#4D4D4D] font-bold">1,926,436</p>
            <p className="text-lg text-[#717171]">Payments</p>
          </div>
          <img src="./Icon7.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Achivement;

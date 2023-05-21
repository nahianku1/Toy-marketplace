import React from "react";

function AtaGlance() {
  return (
    <div className="bg-[rgba(255,255,255,0.3)] shadow-2xl mx-5 md:mx-[120px] rounded-xl p-[20px] mb-[40px]">
      <h1 className="text-center font-bold text-4xl">
        Edu<span className="text-orange-400">fun</span> at A Glance
      </h1>
      <h1 className="text-center text-[18px] mt-[25px]">
        Here’s an nutshell of our achievements as a customer-oriented
        educational toy platform.
      </h1>
      <div className="my-[50px] block md:flex  justify-evenly">
        <div className="flex flex-col gap-3 items-center">
          <img src="/images/team.png" className="block w-[60px]" alt="" />
          <p className="text-[40px] font-extrabold">20+</p>
          <p className="text-[20px] text-gray-500">Team Member</p>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <img src="/images/box.png" className="block w-[60px]" alt="" />
          <p className="text-[40px] font-extrabold">2000+</p>
          <p className="text-[20px] text-gray-500">Products</p>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <img src="/images/sold.png" className="block w-[60px]" alt="" />
          <p className="text-[40px] font-extrabold">4000+</p>
          <p className="text-[20px] text-gray-500">Products sell</p>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <img src="/images/stars.png" className="block w-[60px]" alt="" />
          <p className="text-[40px] font-extrabold">30000+</p>
          <p className="text-[20px] text-gray-500">Community Stars</p>
        </div>
      </div>
    </div>
  );
}

export default AtaGlance;

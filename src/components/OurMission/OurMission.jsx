import React from "react";
import Lottie from "lottie-react";
import mission from "../../../public/mission.json";

function OurMission() {
  return (
    <>
      <div className=" mx-[20px] mt-[50px]  md:mx-[120px] py-[40px] flex  gap-[70px] flex-wrap md:flex-nowrap">
        <div className="dark:text-white flex flex-col gap-[20px] md:max-w-[55%] justify-center  items-start">
          <h1 className="text-2xl md:text-5xl text-orange-400 font-bold md:leading-[50px] min-w-max">
            Our Mission
          </h1>
          <h1 className="text-gray-700 text-[17px]">
            Our mission is to provide children with educational toys that are
            fun, engaging, and safe. We believe that every child deserves the
            opportunity to learn and grow, and we are committed to providing
            high-quality toys that help children reach their full potential.
          </h1>
          <h1>We believe in the following values:</h1>
          <div className="flex gap-4 items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <path
                d="M16.625 0.910156L5.58125 13.055L2.375 10.6266H0.59375L5.58125 18.7227L18.4062 0.910156H16.625Z"
                fill="#FF7819"
              ></path>
            </svg>
            <p>
              Quality: We only use high-quality materials and construction in
              our toys.
            </p>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <path
                d="M16.625 0.910156L5.58125 13.055L2.375 10.6266H0.59375L5.58125 18.7227L18.4062 0.910156H16.625Z"
                fill="#FF7819"
              ></path>
            </svg>
            <p>
              Safety: We are committed to providing safe toys for children of
              all ages.
            </p>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <path
                d="M16.625 0.910156L5.58125 13.055L2.375 10.6266H0.59375L5.58125 18.7227L18.4062 0.910156H16.625Z"
                fill="#FF7819"
              ></path>
            </svg>
            <p>
              Growth: We believe that educational toys can help children learn
              and grow.
            </p>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
            >
              <path
                d="M16.625 0.910156L5.58125 13.055L2.375 10.6266H0.59375L5.58125 18.7227L18.4062 0.910156H16.625Z"
                fill="#FF7819"
              ></path>
            </svg>
            <p>Fun: We believe that learning should be fun and engaging.</p>
          </div>
        </div>
        <div className="w-[300px] h-[300px] flex items-center md:w-[500px] md:h-[500px] relative">
          <Lottie animationData={mission} loop className="block w-[450px]" />
        </div>
      </div>
    </>
  );
}

export default OurMission;

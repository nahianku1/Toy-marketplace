import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import Lottie from "lottie-react";
import socialmedia from "../../../public/social-media.json";

function Footer() {
  return (
    <div>
      <footer className="bg-orange-400 dark:bg-slate-900 text-black dark:text-white py-8 px-4">
        <div className="container mx-auto flex  flex-wrap justify-between">
          <div className="w-full lg:w-1/4 mb-8   lg:mb-0 ">
            <h2 className="text-lg font-bold mb-4">About Us</h2>
            <p className="text-sm">
              At Edufun Toys, we believe that learning should be fun and
              engaging. That's why we create educational toys that are designed
              to help children learn and grow in a playful way. Our toys are
              made with high-quality materials and are designed to be safe for
              children of all ages.
            </p>
          </div>
          <div className="w-full lg:flex lg:flex-col  lg:items-center lg:w-1/4 mb-8 lg:mb-0 ">
            <h2 className="text-lg font-bold mb-4">Our Services</h2>
            <ul className="text-sm">
              <li>
                <a href="#">Home Delivery</a>
              </li>
              <li>
                <a href="#">Three Years warranty</a>
              </li>
              <li>
                <a href="#">Home repair service</a>
              </li>
              <li>
                <a href="#">Isolated Customer Service</a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0 ">
            <h2 className="text-lg font-bold mb-4">Connect with Us</h2>
            <ul className="text-sm">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Pinterest</a>
              </li>
            </ul>
          </div>
          <div className="w-full relative lg:w-1/4">
            <Lottie
              className="block absolute top-0 w-[200px]"
              animationData={socialmedia}
              loop={true}
            />
            {/* <form className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="py-2 px-4 rounded-l-full w-full md:w-3/4 lg:w-full text-gray-900"
              />
              <button
                type="submit"
                className="bg-black  py-2 px-4 rounded-r-full text-white"
              >
                <FaTelegramPlane className="text-[25px]" />
              </button>
            </form> */}
          </div>
        </div>
        <div className="container mx-auto mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2023 Recipe Website. All rights reserved.</p>
          <ul className="flex text-sm mt-4 md:mt-0">
            <li className="mr-4">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="mr-4">
              <a href="#">Terms of Service</a>
            </li>
            <li className="flex g-[4] items-center justify-center">
              <img
                src="/images/ball.png"
                alt=""
                className="block w-[30px] h-[30px]"
              />
              <p>Edufun Toys</p>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

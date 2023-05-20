import React from "react";
import {  Vortex } from "react-loader-spinner";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useSWR from "swr";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";


let TabDetails = async () => {
  let res = await fetch(
    `https://toy-marketplace-server-kappa.vercel.app/tab-details`
  );
  let data = await res.json();
  return data;
};

function TabView() {
  let { data: tabDetails } = useSWR("tab-deatails", TabDetails);

  if (!tabDetails)
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-45px)]">
      <Vortex
        visible={true}
        height="200"
        width="200"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={["red", "green", "blue", "yellow", "orange", "purple"]}
      />
    </div>
    );
  console.log();
  return (
    <div className="flex shadow-2xl [background-color:rgba(255,255,255,0.3)] p-[20px] rounded-lg dark:bg-slate-800 flex-col justify-center items-center my-[70px] lg:mx-[120px]  min-w-[310px]">
      <div className=" mb-5">
        <h1 className="text-3xl dark:text-white font-pacifico font-bold text-center">
          Toys By Category
        </h1>
        <p className="text-[15px] dark:text-white text-center mx-[20px] tracking-wider mt-[20px]">
        Our various toys that represent characters from movies, TV shows, video games, and other popular culture. They are often made of plastic and have movable joints, which allows children to pose them in different ways. These can be used for Effective education.
        </p>
      </div>
      <div className="mb-4">
        <Tabs>
          <TabList>
            <Tab>Mathematics Toys</Tab>
            <Tab>Science Toys</Tab>
            <Tab>Language Toys</Tab>
            <Tab>Engineering Toys</Tab>
          </TabList>

          <TabPanel>
            <div className="flex gap-[30px] flex-wrap justify-center md:justify-normal md:flex-nowrap items-center ">
              {tabDetails[0]?.mathematics_toys.map((entry) => (
                <div
                  key={crypto.randomUUID()}
                  className="flex flex-col gap-1 w-[180px]  bg-white p-[10px] shadow-2xl rounded-lg"
                >
                  <img
                    className="block w-[100%] h-[100px] object-cover object-center"
                    src={entry.image}
                    alt=""
                  />
                  <h2 className="text-[16px]">{entry.name}</h2>
                  <p className="text-[15px] text-gray-500">
                    Price: {entry.price} <span>$</span>
                  </p>
                  <Rating
                    style={{ maxWidth: 80 }}
                    value={entry.rating}
                    readOnly
                  />
                  <Link
                    to="/"
                    className="px-[15px] py-[10px] bg-orange-400 text-center mt-[5px]"
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex gap-[30px] flex-wrap justify-center md:justify-normal md:flex-nowrap items-center ">
              {tabDetails[1]?.science_toys.map((entry) => (
                <div
                  key={crypto.randomUUID()}
                  className="flex flex-col gap-1 w-[180px]  bg-white p-[10px] shadow-2xl rounded-lg"
                >
                  <img
                    className="block w-[100%] h-[100px] object-cover object-center"
                    src={entry.image}
                    alt=""
                  />
                  <h2 className="text-[16px]">{entry.name}</h2>
                  <p className="text-[15px] text-gray-500">
                    Price: {entry.price} <span>$</span>
                  </p>
                  <Rating
                    style={{ maxWidth: 80 }}
                    value={entry.rating}
                    readOnly
                  />
                  <Link
                    to="/"
                    className="px-[15px] py-[10px] bg-orange-400 text-center mt-[5px]"
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex gap-[30px] flex-wrap justify-center md:justify-normal md:flex-nowrap items-center ">
              {tabDetails[2]?.language_toys.map((entry) => (
                <div
                  key={crypto.randomUUID()}
                  className="flex flex-col gap-1 w-[180px]  bg-white p-[10px] shadow-2xl rounded-lg"
                >
                  <img
                    className="block w-[100%] h-[100px] object-cover object-center"
                    src={entry.image}
                    alt=""
                  />
                  <h2 className="text-[16px]">{entry.name}</h2>
                  <p className="text-[15px] text-gray-500">
                    Price: {entry.price} <span>$</span>
                  </p>
                  <Rating
                    style={{ maxWidth: 80 }}
                    value={entry.rating}
                    readOnly
                  />
                  <Link
                    to="/"
                    className="px-[15px] py-[10px] bg-orange-400 text-center mt-[5px]"
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex gap-[30px] flex-wrap justify-center md:justify-normal md:flex-nowrap items-center ">
              {tabDetails[3]?.engineering_toys.map((entry) => (
                <div
                  key={crypto.randomUUID()}
                  className="flex flex-col gap-1 w-[180px]  bg-white p-[10px] shadow-2xl rounded-lg"
                >
                  <img
                    className="block w-[100%] h-[100px] object-cover object-center"
                    src={entry.image}
                    alt=""
                  />
                  <h2 className="text-[16px]">{entry.name}</h2>
                  <p className="text-[15px] text-gray-500">
                    Price: {entry.price} <span>$</span>
                  </p>
                  <Rating
                    style={{ maxWidth: 80 }}
                    value={entry.rating}
                    readOnly
                  />
                  <Link
                    to="/"
                    className="px-[15px] py-[10px] bg-orange-400 text-center mt-[5px]"
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default TabView;

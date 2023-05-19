import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function TabView() {
  return (
    <div className="flex dark:bg-slate-800 flex-col justify-center items-center my-[70px] lg:mx-[120px]  min-w-[310px]">
      <div className=" mb-5">
        <h1 className="text-3xl dark:text-white font-pacifico font-bold text-center">
          Gallery
        </h1>
        <p className="text-[15px] dark:text-white text-center mx-[20px] tracking-wider mt-[20px]">
          Our toy gallery has something for everyone, from babies to adults. We
          carry a wide variety of toys, including dolls, action figures, board
          games, puzzles, and more. We also have a selection of educational toys
          that are perfect for helping children learn and grow.
        </p>
      </div>

      <Tabs>
        <TabList>
          <Tab>Mathematics Toys</Tab>
          <Tab>Science Toys</Tab>
          <Tab>Science Toys</Tab>
          <Tab>Science Toys</Tab>
          <Tab>Science Toys</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default TabView;

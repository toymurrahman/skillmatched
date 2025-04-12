import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabCategories = () => {
  return (
    <div className=" p-4 m-4 mx-auto ">
      <Tabs>
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">Browse Jobs By Categories</h1>
        <p className="max-w-2xl mx-auto mt-4 text-center text-gray-500">
          Three categories available for the time tking. They are Web
          Development. Graphics Design and Digital Marketing. Browse them by
          clicking on the tabs below.
        </p>
        <div className="flex justify-center items-center mb-4">
          <TabList>
            <Tab>Web Development</Tab>
            <Tab>Graphis Design</Tab>
            <Tab>Digital Marketing</Tab>
          </TabList>
        </div>
        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabCategories;

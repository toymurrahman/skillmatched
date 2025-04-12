import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";
import axios from "axios";

const TabCategories = () => {
    const [jobs , setJobs] =useState([]);

    useEffect(() => {
        const getData = async () => {
            const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/jobs`)
            setJobs(data);
        }
        getData()
    }
    , []);

  return (
    <div className="p-4 m-4 mx-auto">
      <Tabs>
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
          Browse Jobs By Categories
        </h1>
        <p className="max-w-2xl mx-auto mt-4 text-center text-gray-500">
          Three categories available for the time being. They are Web
          Development, Graphics Design, and Digital Marketing. Browse them by
          clicking on the tabs below.
        </p>
        <div className="flex justify-center items-center mb-4">
          <TabList>
            <Tab>Web Development</Tab>
            <Tab>Graphics Design</Tab>
            <Tab>Digital Marketing</Tab>
          </TabList>
        </div>

        {/* Web Development Tab */}
        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:mt-16">
            {jobs
              ?.filter((j) => j.category === "Web Development")
              .map((jobs) => (
                <JobCard key={jobs._id} jobs={jobs} />
              ))}
          </div>
        </TabPanel>

        {/* Graphics Design Tab */}
        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:mt-16">
          {jobs
              ?.filter((j) => j.category === "Graphics Design")
              .map((jobs) => (
                <JobCard key={jobs._id} jobs={jobs} />
              ))}
          </div>
        </TabPanel>

        {/* Digital Marketing Tab */}
        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:mt-16">
          {jobs
              ?.filter((j) => j.category === "Digital Marketing")
              .map((jobs) => (
                <JobCard key={jobs._id} jobs={jobs} />
              ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabCategories;

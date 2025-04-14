import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";
import axios from "axios";

const TabCategories = () => {
  const [jobs, setJobs] = useState([]);
  const categories = [
    "Web Development",
    "Graphics Design",
    "Digital Marketing",
  ];

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/jobs`);
      setJobs(data);
    };
    getData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Browse Jobs by Categories
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Three categories available for now — Web Development, Graphics Design,
          and Digital Marketing. Explore them by selecting a tab below.
        </p>
      </div>

      {/* Tabs */}
      <Tabs>
        <div className="flex justify-center">
          <TabList className="flex gap-4 bg-gray-100 p-2 rounded-full shadow-inner overflow-x-auto whitespace-nowrap">
            {categories.map((category, idx) => (
              <Tab
                key={idx}
                className="px-5 py-2 text-sm font-medium text-gray-700 rounded-full cursor-pointer transition-all duration-200 focus:outline-none"
                selectedClassName="bg-white shadow text-blue-600"
              >
                {category}
              </Tab>
            ))}
          </TabList>
        </div>

        {/* Panels */}
        {categories.map((category, idx) => (
          <TabPanel key={idx}>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.filter((j) => j.category === category).length > 0 ? (
                jobs
                  .filter((j) => j.category === category)
                  .map((job) => <JobCard key={job._id} jobs={job} />)
              ) : (
                <p className="col-span-full text-center text-gray-500">
                  No jobs available in{" "}
                  <span className="font-medium">{category}</span> yet.
                </p>
              )}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default TabCategories;

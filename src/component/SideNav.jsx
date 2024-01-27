import React, { useState } from "react";
import newJotcv from "../assets/newjotcv.png";
const SideNav = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="bg-white flex flex-col items-center my-3 p-3 gap-5  rounded-md">
        <div>
          <img className="" src={newJotcv} alt="" />
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="text-center p-2 rounded-md text-sm w-24 bg-blue-100"
        >
          Add Content
        </button>
        <button className="text-center p-2  rounded-md text-sm w-24 bg-blue-100">
          Change Template
        </button>
      </div>
      {showModal && (
        <div className="absolute z-50 p-3 left-0 right-0 bg-blue-100 w-[70%] mx-auto">
          <div className="relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute z-50 bg-blue-600 text-white px-3  py-1 rounded-full right-0 text-base"
            >
              X
            </button>
          </div>
          <h2 className="text-xl">Add Content</h2>
          <div className="flex flex-wrap w-full p-2 gap-4">
            <p className="p-2 bg-gray-100 text-xl rounded-md">Education</p>
            <p className="p-2 bg-gray-100 text-xl rounded-md">
              Professional Experience
            </p>
            <p className="p-2 bg-gray-100 text-xl rounded-md">Certificate</p>
            <p className="p-2 bg-gray-100 text-xl rounded-md">Interest</p>
            <p className="p-2 bg-gray-100 text-xl rounded-md">Project</p>
            <p className="p-2 bg-gray-100 text-xl rounded-md">Skill</p>
            <p className="p-2 bg-gray-100 text-xl rounded-md"> Language</p>
          </div>
        </div>
      )}
    </>
  );
};

export default SideNav;

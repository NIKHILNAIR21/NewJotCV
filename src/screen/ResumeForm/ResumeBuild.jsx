import React from "react";

import Template from "../../templates/novatemp-1/Template";

import { useDispatch, useSelector } from "react-redux";
import PersonalInfoForm from "../../component/PersonalInfoForm";
import SideNav from "../../component/SideNav";

const ResumeBuild = () => {
  const dispatch = useDispatch();
  const tempId = useSelector((state) => state?.templateID?.tempId);
  return (
    <>
      <div className="flex flex-wrap justify-evenly  bg-blue-600 min-h-screen">
        <div>
          <SideNav />
        </div>
        <div>
          <div className="flex justify-between gap-2 my-3 w-full p-3 rounded-md mt-3 bg-white">
            <h2>JotCV</h2>

            <button className="bg-black text-white rounded-full px-2 py-0.5">
              Download
            </button>
          </div>
          <PersonalInfoForm />
        </div>
        <div className="w-[45%] overflow-y-hidden h-[45rem] no-scrollbar scale-95 bg-white rounded-md">
          <Template />
        </div>
      </div>
    </>
  );
};

export default ResumeBuild;

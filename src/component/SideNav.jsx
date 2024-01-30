import React, { useState } from "react";
import newJotcv from "../assets/newjotcv.png";
import add from "../assets/add.png";
import change from "../assets/change.png";
import { useDispatch, useSelector } from "react-redux";
import { setSectionActive } from "../slice/sectionSlice";
const SideNav = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch=useDispatch()
  const sectionArray = [
    { name: 'Education', description: 'Description for Education' },
    { name: 'Professional', description: 'Description for Professional' },
    { name: 'Language', description: 'Description for Language' },
    { name: 'Certificate', description: 'Description for Certificate' },
    { name: 'Interest', description: 'Description for Interest' },
    { name: 'Skills', description: 'Description for Skills' },
    { name: 'Projects', description: 'Description for Projects' },
  ];
  const resumeData = useSelector(
    (state) => state?.fullProfile?.resumeData?.data
  );
  const handleClick=()=>{
    if(resumeData){
      setShowModal(true)
    }
  }
  return (
    <>
      <div className="bg-blue-600 flex flex-col items-center my-3  gap-5  rounded-md">
        <div className="bg-white w-full p-3 rounded-t-md">
          <img className=" mx-auto" src={newJotcv} alt="" />
        </div>
        <button
          onClick={() => handleClick()}
          className="text-center p-3 m-3 flex flex-col items-center gap-3 rounded-md text-sm w-24 bg-white"
        >
          <div>
            <img src={add} alt="" />
          </div>
          <div className="text-[12px] text-[#404145]">Add Content</div>
        </button>
        <button className="text-center m-3 p-3 flex flex-col items-center gap-3  rounded-md text-sm w-24 bg-white">
          <div>
            <img src={change} alt="" />
          </div>
          <div className="text-[12px] text-[#404145]">Change Template</div>
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
            {
              sectionArray?.map((item,index)=>{
                return(
                  <p className="p-2 bg-gray-100 text-xl rounded-md cursor-pointer" key={index} onClick={()=>dispatch(setSectionActive(item?.name))}>{item?.name}</p>

                )
              })
            }
           
          </div>
        </div>
      )}
    </>
  );
};

export default SideNav;

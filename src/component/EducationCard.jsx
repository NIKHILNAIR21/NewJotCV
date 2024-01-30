import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveForm } from "../slice/showContentSlice";
import { deleteEduByid } from "../services/ApiServices";
import showNotification from "../services/NotificationService";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { getFull } from "../actions/allProfieAction";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
const EducationCard = () => {
  const dispatch = useDispatch();

  const resumeData = useSelector(
    (state) => state?.fullProfile?.resumeData?.data
  );
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const handleDelete = async (delid) => {
    try {
      let resp = await deleteEduByid(delid);
      if (resp?.data?.status == 200) {
        showNotification("success", "Education deleted successfully");
        dispatch(getFull(resumeData?.id));
        
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Accordion
        open={open === 1}
        icon={<Icon id={1} open={open} />}
        className="bg-white px-3 rounded-lg"
      >
        <AccordionHeader onClick={() => handleOpen(1)}>
          Education
        </AccordionHeader>
        <AccordionBody>
          {resumeData?.eductaions &&
            resumeData?.eductaions.length != 0 &&
            resumeData?.eductaions?.map((item) => (
              <div className="flex my-2.5 justify-between items-center  hover:bg-blue-600 p-1.5 hover:text-white transition-all delay-100 rounded-[6px] cursor-pointer">
                <div className="">
                  <h3 className="text-[16px]    rounded-md font-medium ">
                    {item?.university}
                  </h3>
                  <h4 className="">Degree: {item?.course}</h4>
                </div>
                <p
                  className="px-3  py-1.5 font-bold rounded-full text-sm cursor-pointer bg-red-400"
                  onClick={() => handleDelete(item?.id)}
                >
                  X
                </p>
              </div>
            ))}
          <div className="flex justify-center">
            <button
              className="p-2 rounded-full border hover:bg-sky-100 transition-all delay-100"
              onClick={() => dispatch(setActiveForm("EducationInfoFormShow"))}
            >
              <span className="font-bold text-blue-600">+</span> Educations
            </button>
          </div>
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export default EducationCard;

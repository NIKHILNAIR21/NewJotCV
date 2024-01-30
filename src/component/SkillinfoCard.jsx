import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveForm } from "../slice/showContentSlice";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import dropdown from "../assets/dropdown.png";
import { deleteSKills } from "../services/ApiServices";
import showNotification from "../services/NotificationService";
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
const SkillinfoCard = () => {
  const resumeData = useSelector(
    (state) => state?.fullProfile?.resumeData?.data
  );
  console.log(resumeData);
  const [open, setOpen] = React.useState(0);
  const dispatch = useDispatch();
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const handleDelete = async (delid) => {
    try {
      let resp = await deleteSKills(delid);
      console.log(resp);
      if (resp?.status == 200) {
     
        showNotification("success", "skill removed successfully");
        dispatch(getFull(resumeData?.id));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-white px-3 w-[33rem] my-3 rounded-lg ">
      <Accordion
        open={open === 1}
        icon={<Icon id={1} open={open} className="p-1" />}
      >
        <AccordionHeader onClick={() => handleOpen(1)}>Skill </AccordionHeader>
        <AccordionBody>
          {resumeData?.skills?.length != 0 &&
            resumeData?.skills?.map((items, index) => (
              <div
                key={items?.id}
                className="flex justify-between items-center hover:text-white m-2 bg-blue-100 p-3 rounded-[12px] transition-all delay-100 hover:bg-blue-600"
              >
                <p className="text-[16px] font-semibold ">{items?.skill}</p>
                <p
                  className="px-3  py-1.5 font-bold rounded-full text-sm cursor-pointer bg-red-400"
                  onClick={() => handleDelete(items?.id)}
                >
                  X
                </p>
              </div>
            ))}
          <div className="flex justify-center">
            <button
              className="p-2 px-3 rounded-full border hover:bg-sky-100 transition-all delay-100 "
              onClick={() => dispatch(setActiveForm("SkillInfoFormShow"))}
            >
              <span className="font-bold text-blue-600">+</span> Skills
            </button>
          </div>
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export default SkillinfoCard;

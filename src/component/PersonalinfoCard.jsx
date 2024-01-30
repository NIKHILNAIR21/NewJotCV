import React from "react";
import { useDispatch, useSelector } from "react-redux";
import dropdown from "../assets/dropdown.png";
import { setActiveForm } from "../slice/showContentSlice";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
// icon function
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
//

const PersonalinfoCard = () => {
  const resumeData = useSelector(
    (state) => state?.fullProfile?.resumeData?.data
  );
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const dispatch = useDispatch();
  return (
    <>
      <Accordion
        open={open === 1}
        icon={<Icon id={1} open={open} />}
        className="bg-white px-3 rounded-lg"
      >
        <AccordionHeader onClick={() => handleOpen(1)}>
          Personal Information{" "}
        </AccordionHeader>
        <AccordionBody
          onClick={() => dispatch(setActiveForm("PersonalInfoFormShow"))}
        >
          <div className="flex justify-between items-center hover:p-2.5 rounded-[6px] hover:bg-blue-600 hover:text-white transition-all delay-75">
            <div>
              <p className="text-[18px] font-bold font-poppins">
                {resumeData?.full_name}
              </p>
              <p className="text-[16px] font-bold font-poppins">
                {resumeData?.position}
              </p>
              <div className="mt-3">
                <p className="text-[14px] font-bold font-poppins">
                  {resumeData?.address}
                </p>
              </div>
            </div>
            <div>
              <img
                className="rounded-full w-[70px]"
                src={resumeData?.profile_picture}
                alt=""
              />
            </div>
          </div>
        </AccordionBody>
      </Accordion>
    </>
  );
};

export default PersonalinfoCard;

import React from "react";
import Template from "../../templates/novatemp-1/Template";
import PersonalInfoForm from "../../component/PersonalInfoForm";
import SideNav from "../../component/SideNav";
import PersonalinfoCard from "../../component/PersonalinfoCard";
import { useDispatch, useSelector } from "react-redux";
import Skillinfo from "../../component/Skillinfo";
import SkillinfoCard from "../../component/SkillinfoCard";
import EducationInfo from "../../component/EducationInfo";
import WorkInfo from "../../component/WorkInfo";
import EducationCard from "../../component/EducationCard";
const ResumeBuild = () => {
  const ActiveForm = useSelector((state) => state.showForm);
  console.log(ActiveForm);
  const resumeData = useSelector(
    (state) => state?.fullProfile?.resumeData?.data
  );
  return (
    <>
      <div className="flex flex-wrap justify-evenly items-start bg-[#F4F4F5] min-h-screen">
        <div>
          <SideNav />
        </div>
        <div>
          <div className="flex justify-between gap-2 my-3 w-full p-3 rounded-full mt-3 bg-blue-200">
            <h2 className="font-semibold">Resume Name</h2>

            <button className="bg-blue-600 text-white rounded-full px-2 py-0.5">
              Download
            </button>
          </div>

          {!ActiveForm.activeForm ? (
            <>
              <PersonalinfoCard />
              <SkillinfoCard />
              <EducationCard />
            </>
          ) : (
            <>
              {ActiveForm.PersonalInfoFormShow && <PersonalInfoForm />}
              {ActiveForm.SkillInfoFormShow && <Skillinfo />}
              {ActiveForm.EducationInfoFormShow && <EducationInfo />}
            </>
          )}
        </div>
        <div className="w-[75%] xl:w-[45%] overflow-y-hidden h-[42rem] no-scrollbar  bg-white border-[12px] border-[#F7F7F7] rounded-md">
          <Template />
        </div>
      </div>
    </>
  );
};

export default ResumeBuild;

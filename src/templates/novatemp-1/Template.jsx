import React from "react";
import Header from "./section/Header";
import Contact from "./section/Contact";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Skill from "./section/Skill";
import WorkExp from "./section/WorkExp";
import Education from "./section/Education";
import Language from "./section/Language";
import Certificate from "./section/Certificate";
import Interest from "./section/Interest";
import VideoProfile from "./section/VideoProfile";
const Template = () => {
  const resumeData = useSelector(
    (state) => state?.fullProfile?.resumeData?.data
  );
  const PersonalInfoData = useSelector((state) => state.personalInfo);
  const SocialLinkData = useSelector((state) => state.socialLinks?.social);
  const SkillInfoData = useSelector((state) => state.skills?.skills);
  const EducationInfo = useSelector((state) => state?.education);
  const showSection = useSelector((state) => state?.showSectios);

  const formatDate = (dateString, formatType) => {
    if (!dateString) return null;

    const date = new Date(dateString);

    return date.toLocaleDateString(undefined, {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="A4  w-[100%]">
      <Header
        img={resumeData?.profile_picture || PersonalInfoData?.photo}
        fullname={resumeData?.full_name || PersonalInfoData?.FullName}
        profession={resumeData?.position || PersonalInfoData?.profession}
        summary={resumeData?.summary || PersonalInfoData?.summary}
      />
      <Contact
        email={resumeData?.email || PersonalInfoData?.email}
        City={resumeData?.address || PersonalInfoData?.city}
        phoneNo={resumeData?.mobile_no || PersonalInfoData?.phoneNumber}
        socialLinks={resumeData?.social_links || SocialLinkData}
      />
      {showSection?.Skills && (
        <Skill skills={SkillInfoData} apiSkills={resumeData?.skills} />
      )}
      {showSection?.Professional && (
        <WorkExp experince={resumeData?.experiences} />
      )}
      {/* Project */}
      {showSection?.Projects && (
        <div className="px-6">
          <h1 className="font-semibold uppercase text-base mt-1.5 text-emerald-500 ">
            Projects
          </h1>
          <div>
            {resumeData?.projects?.map((exp, index) => (
              <div key={exp?.id} className="mt-2 text-justify">
                <h3 className="text-sm  text-black font-semibold">
                  {exp?.title}
                </h3>
                <div className="flex justify-between">
                  <a href={exp?.link} className="text-sm underline text-black">
                    Project Link
                  </a>
                  <p className="text-sm text-black">
                    {formatDate(exp?.start_date)} - {formatDate(exp?.end_date)}
                  </p>
                </div>
                <p className="text-xs text-black font-medium">
                  {exp?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {showSection?.Education && (
        <Education edu={resumeData?.eductaions} reduxEdu={EducationInfo} />
      )}
      {showSection?.Language && <Language languages={resumeData?.languages} />}
      {showSection?.Certificate && (
        <Certificate certificate={resumeData?.certification} />
      )}
      {showSection?.Interest && <Interest interest={resumeData?.interests} />}
      {/* <VideoProfile videoAns={resumeData?.video_questions}/> */}
    </div>
  );
};

export default Template;

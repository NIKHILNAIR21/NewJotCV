import React from "react";
import { useSelector } from "react-redux";
const Template = () => {
  
  const resumeData = useSelector(
    (state) => state?.fullProfile?.resumeData?.data
  );

  const formatDate = (dateString, formatType) => {
    if (!dateString) return null;
  
    const date = new Date(dateString);
  
      return date.toLocaleDateString(undefined, { month: 'short', year: 'numeric' });
  
  };
  console.log(resumeData?.languages);
  return (
    <div>
      <div className="main-container w-[800px] mx-auto">
        <div className="header flex p-3 item-center justify-between bg-slate-700">
          <div className="w-[50%]">
            <h1 className="text-xl text-white font-semibold">
              {resumeData?.full_name}
            </h1>
            <h2 className="text-base text-red-500 font-semibold">
              {resumeData?.position}
            </h2>
            <p className="text-sm text-justify text-white">
              {resumeData?.summary}
            </p>
          </div>
          {/* photo */}
          <div className="border-4 w-32 h-32 border-red-500 rounded-tr-full rounded-tl-full rounded-bl-full rounded-br-md">
            <img
              className="w-full h-full rounded-tr-full rounded-tl-full rounded-bl-full rounded-br-md"
              src={resumeData?.profile_picture}
              alt=""
            />
          </div>
        </div>
        {/* contacts */}
        <div className="flex gap-3 p-2 bg-slate-900 text-white justify-evenly text-sm flex-wrap">
          <p className="text-sm">{resumeData?.mobile_no}</p>
          <p className="text-sm">{resumeData?.email}</p>
          <p className="text-sm">{resumeData?.address}</p>
          <div className="flex gap-3 flex-wrap">
            {resumeData?.social_links?.map((item, index) => (
              <a className="text-sm" href={item?.link} key={index + 1}>
                {item?.name}
              </a>
            ))}
          </div>
        </div>
        {/* resume-section */}
        <div className="flex gap-x-4 px-2">
          <div className="left w-[50%]">
            {/* work */}
            <div className="flex-col flex gap-2">
              <h2 className="text-base font-bold text-red-500 p-1 border-b-4 border-red-500 w-fit">
                Work Experinece
              </h2>
              {resumeData?.experiences?.map((exp, index) => (
                <div key={index + 1}>
                  <div className="flex justify-between">
                    <div>
                      <h1 className="text-[15.7px] font-bold">
                        {exp?.company_name}
                      </h1>
                      <h2 className="text-[15px] font-semibold">
                        {" "}
                        {exp?.designation}
                      </h2>
                    </div>
                    <p className="text-sm text-right">
                      {" "}
                      {formatDate(exp?.start_date,'short')} |{" "}
                      {exp?.is_current ? "present" :formatDate( exp?.end_date,'short')}
                    </p>
                  </div>
                  <div className="w-[95%]">
                    <p className="text-xs text-justify">{exp?.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-base font-bold text-red-500 p-1 border-b-4 border-red-500 w-fit">
                Education
              </h2>
              {/* edu */}
              {resumeData?.eductaions?.map((education, index) => (
                <div>
                  <div className="p-1 " key={index+1}>
                    <p className="text-base font-bold">{education?.course}</p>
                    <h1 className="text-sm "> {education?.university}</h1>
                  </div>
                  <div className="w-[40%]  p-1">
                    <p className=" text-sm text-red-500">
                      {" "}
                      {formatDate(education?.start_date,"short")} |{" "}
                      {education?.is_current ? "present" : formatDate(education?.end_date,"short")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          
          </div>
          <div className="right w-[50%]">
            <div>
              <h2 className="text-base font-bold text-red-500 p-1 border-b-4 border-red-500 w-fit">
                Skills
              </h2>
              <div className="flex gap-3 my-2  flex-wrap">
                {resumeData?.skills?.map((item) => (
                  <p className="text-sm rounded p-1 border border-red-500">
                    {item?.skill}
                  </p>
                ))}
              </div>
            </div>
            {/* project */}
            <div className="flex-col flex gap-2">
              <h2 className="text-base font-bold text-red-500 p-1 border-b-4 border-red-500 w-fit">
                Projects
              </h2>
              {/* exp */}
              {resumeData?.projects?.map((project, index) => (
                <div className="flex gap-2 flex-col">
                  <div className="flex justify-between">
                    <div>
                      <h1 className="text-sm font-semibold">
                        {project?.title}
                      </h1>
                      <a
                        href={project?.link}
                        className="text-sm font-semibold underline"
                      >
                        Project Link
                      </a>
                    </div>
                    <p className="text-sm text-right">
                      {formatDate( project?.start_date,'short')}|{formatDate(project?.end_date,"short")}{" "}
                    </p>
                  </div>
                  <div className="w-[95%]">
                    <p className="text-sm text-justify">
                      {project?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          
            {/* languages */}
            <div className="mt-2">
              <h2 className="text-base font-bold text-red-500 p-1 border-b-4 border-red-500 w-fit">
                Language
              </h2>
              <div className="flex p-1 gap-4  flex-wrap">
              {resumeData?.languages?.map((item,index) => (
                
                <p key={index+1} className="text-sm">{item?.language}</p>
              ))}
              </div>
            </div>
            {/* interest */}
            <div className="mt-2">
              <h2 className="text-base font-bold text-red-500 p-1 border-b-4 border-red-500 w-fit">
                Interests
              </h2>
              <div className="flex flex-wrap gap-4 p-1">
              {resumeData?.interests?.map((item) => (
                <p className="text-sm">{item?.interest}</p>
              ))}
              </div>
            </div>
            {/* certificates */}
            <div className="mt-2">
              <h2 className="text-base font-bold text-red-500 p-1 border-b-4 border-red-500 w-fit">
                Certifications
              </h2>
              <div className="flex flex-col gap-1 p-1">
              {resumeData?.certification?.map((item, index) => (
                <p key={index + 1} className="text-sm">
                  {item?.certificate}
                </p>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;

import React from "react";
import { useSelector } from "react-redux";
const Template = () => {
  const formatDate = (dateString, formatType) => {
    if (!dateString) return null;
  
    const date = new Date(dateString);
  
      return date.toLocaleDateString(undefined, { month: 'short', year: 'numeric' });
  
  };
  const resumeData = useSelector(
    (state) => state?.fullProfile?.resumeData?.data
  );
  return (
    <div>
      <div className="main-container  p-4 bg-white ">
        <header className="flex  justify-between">
          <div className=" bg-gray-500 p-2 rounded-xl  w-[27rem]">
            <h2 className="text-white font-bold text-xl">
              {resumeData?.full_name}
            </h2>
            <h3 className="text-orange-400 font-semibold text-lg">
              {resumeData?.position}
            </h3>
            <p className="text-white font-semibold text-sm">
              {resumeData?.summary}
            </p>
          </div>
          {/* contact */}
          <div className="p-2 text-right text-sm ">
            <p className="text-sm">Email:{resumeData?.email}</p>
            <p className="text-sm">Phone:{resumeData?.mobile_no}</p>
            <p className="text-sm">City:{resumeData?.address}</p>
            <div className=" text-sm">
              {resumeData?.social_links?.map((item, index) => (
                <a href={item?.link}>{item?.name}</a>
              ))}
            </div>
          </div>
        </header>
        <div className="flex gap-4">
          <div className="left ">
            <div className=" p-1">
              <h2 className="font-bold text-gray-500">Work Experience</h2>
              {/* exp */}
              {resumeData?.experiences?.map((exp, index) => (
                <div>
                  <div className="flex justify-between">
                    <div>
                      <h1 className="text-sm font-semibold">
                        {exp?.company_name}
                      </h1>
                      <h2 className="text-sm font-semibold">
                        {exp?.designation}
                      </h2>
                    </div>
                    <p className="text-xs text-right">
                      {" "}
                      {formatDate(exp?.start_date)} |{" "}
                      {exp?.is_current ? "present" : formatDate(exp?.end_date)}
                    </p>
                  </div>
                  <div className="w-[95%]">
                    <p className="text-xs text-justify">{exp?.description}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* project */}
            <div className=" p-1">
              <h2 className="font-bold text-gray-500">Project</h2>
              {/* exp */}
              {resumeData?.projects?.map((project, index) => (
                <div>
                  <div className="flex justify-between">
                    <div>
                      <h1 className="text-sm font-semibold">
                        {" "}
                        {project?.title}
                      </h1>
                      <a href={project?.link} className="text-sm font-semibold">
                        Project Link
                      </a>
                    </div>
                    <p className="text-xs text-right">
                      {formatDate(project?.start_date)}|{formatDate(project?.end_date)}
                    </p>
                  </div>
                  <div className="w-[95%]">
                    <p className="text-xs text-justify">
                      {project?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* edu */}
            <div>
              <h2 className="text-base font-bold text-gray-500 p-1  w-fit">
                Education
              </h2>
              {resumeData?.eductaions?.map((education, index) => (
                <div>
                  <div className="p-1">
                    <p className="text-base text-gray-500 font-bold">
                      {education?.course}
                    </p>
                    <h1 className="text-sm ">{education?.university}</h1>
                  </div>
                  <div className="w-[40%]  p-1">
                    <p className=" text-xs">
                      {formatDate(education?.start_date)} |
                      {education?.is_current ? "present" : formatDate(education?.end_date)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="right">
            {/* skill */}
            <div className="">
              <h2 className="text-base font-bold text-gray-500 p-1 w-fit">
                Skills
              </h2>
              <div className="flex gap-3 my-2 flex-wrap">
                {resumeData?.skills?.map((item) => {
                  <p className="text-sm bg-gray-500 text-white rounded p-1">
                    {item?.skill}
                  </p>;
                })}
              </div>
            </div>
            {/* Interest */}
            <div className="mt-2">
              <h2 className="text-base font-bold text-gray-500 p-1 w-fit">
                Interests
              </h2>
              <div className="flex flex-wrap gap-2.5 p-1">
                {resumeData?.interests?.map((item) => {
                  <p className="text-sm font-semibold text-gray-500">
                  {item?.interest}
                  </p>;
                })}
              </div>
            </div>
            {/* Languages */}
            <div className="mt-2">
              <h2 className="text-base font-bold text-gray-500 p-1 w-fit">
                Language
              </h2>
              <div className="flex p-1 gap-2.5 flex-wrap">
              {resumeData?.languages?.map((item) => (
                <p className="text-sm text-gray-500 font-semibold">{item?.language}</p>
              ))}
              </div>
            </div>
            {/* certificates */}
            <div className="mt-2">
              <h2 className="text-base font-bold text-gray-500 p-1 w-fit">
                Certifications
              </h2>
              <div className="flex flex-col gap-1 p-1">
              {resumeData?.certification?.map((item, index) => (
                <p className="text-sm text-gray-500 font-semibold">
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

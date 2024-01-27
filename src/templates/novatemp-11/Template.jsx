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
  let question = 0;
  return (
    <div>
      <div className="flex  justify-between ">
        <div className="left bg-white px-10 py-5 ">
          <div>
            <h1 className="text-xl capitalize">{resumeData?.full_name}</h1>
            <h2 className="text-base capitalize text-sky-400">{resumeData?.position}</h2>
            <div className="flex gap-2">
              <p className="text-xs">{resumeData?.email}</p>
              <p className="text-xs">{resumeData?.mobile_no}</p>
              <p className="text-xs">{resumeData?.address}</p>
            </div>
            <div className="flex gap-2 text-xs">
              {resumeData?.social_links?.map((item,index) => (
                <a  className href={item?.link} key={index + 1}>
                  {item?.name}
                </a>
              ))}
            </div>
          </div>
          {/* work */}
          <div className="mt-1">
            <h2 className="text-base">Experience</h2>
            <span className="bg-black w-[100%] h-[1.3px] block" />
            {/* exp */}
            {resumeData?.experiences?.map((exp, index) => (
              <div className="flex item-start mt-1 justify-between">
                <div className="mt-1">
                  <h1 className="text-sm font-semibold ">
                    {exp?.company_name}
                  </h1>
                  <h2 className="text-sm font-semibold">{exp?.designation}</h2>
                  <p className="text-xs">{exp?.description}</p>
                </div>
                <div className="w-[100%]">
                  <p className=" text-right text-xs">
                    {" "}
                    {formatDate(exp?.start_date)} |{" "}
                    {exp?.is_current ? "present" : formatDate(exp?.end_date)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* project */}
          <div className="mt-1 ">
            <h2 className="text-base ">Projects</h2>
            <span className="bg-black w-[100%] h-[1.3px] block" />
            {/* prj */}
            {resumeData?.projects?.map((project, index) => (
              <div className="flex item-start mt-1.5 justify-between">
                <div className="mt-1">
                  <h1 className="text-sm font-semibold ">{project?.title}</h1>
                  <a
                    href={project?.link}
                    className="text-sm font-semibold underline"
                  >
                    Project Link
                  </a>
                  <p className="text-sm">{project?.description}</p>
                </div>
                <div className="w-[100%]">
                  <p className=" text-right text-xs">
                    {formatDate(project?.start_date)}|{formatDate(project?.end_date)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* education */}
        </div>
        <div className="right  px-10 py-10 w-[45%] bg-sky-900">
          <div className="flex justify-center">
            <img
              className="rounded-full w-28 h-28"
              src={resumeData?.profile_picture}
              alt={resumeData?.full_name}
            />
          </div>
          <div>
            <div className="mt-4 text-white">
              <h2 className="text-sm">Summary</h2>
              <span className="bg-white w-[100%] h-[1.3px] block" />
              <p className="text-xs">{resumeData?.summary}</p>
            </div>
            <div className="mt-2 text-white">
              <h2 className="text-sm ">Education</h2>
              <span className="bg-white w-[100%] h-[1.3px] block" />
              {/* exp */}
              {resumeData?.eductaions?.map((education, index) => (
                <div
                  key={index + 1}
                  className="flex item-start mt-1 justify-between"
                >
                  <div className="text-white">
                    <h1 className="text-sm font-semibold ">
                      {education?.university}
                    </h1>
                    <p className="text-sm font-semibold ">
                      {education?.course}
                    </p>
                  </div>
                  <div className="text-white">
                    <p className=" text-right text-xs">
                      {formatDate(education?.start_date)} |{" "}
                      {education?.is_current ? "present" : formatDate(education?.end_date)}{" "}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/*  */}
            <div className="mt-1 ">
              <h2 className="text-base text-white">Certification</h2>
              <span className="bg-white w-[100%] h-[1.3px] block" />
              <div className="flex flex-col text-left text-white gap-2 mt-1">
                {resumeData?.certification?.map((item, index) => (
                  <p key={index + 1} className="text-sm">{item?.certificate}</p>
                ))}
              </div>
            </div>
            {/* */}
            <div className="mt-1 text-white">
              <h2 className="text-base ">Interests</h2>
              <span className="bg-white w-[100%] h-[1.3px] block" />
              <div className="flex gap-2 mt-1">
                {resumeData?.interests.map((item, index) => (
                  <p className="text-sm">{item?.interest}</p>
                ))}
              </div>
            </div>
            {/* skill */}
            <div className="mt-2 text-white">
              <h2 className="text-base">Skills</h2>
              <span className="bg-white w-[100%] h-[1.3px] block" />
              <div className="flex flex-wrap gap-2 mt-1">

              {resumeData?.skills?.map((item,index)=>(

                <p key={index} className="text-sm">{
                  item?.skill
                }</p>
              ))}
              
              </div>
            </div>
            {/* */}
            <div className="mt-1 text-white">
              <h2 className="text-base">Language</h2>
              <span className="bg-white w-[100%] h-[1.3px] block" />
              <div className="flex gap-2 mt-1">
              {resumeData?.languages?.map((item,index)=>(
                <p key={index} className="text-sm">{item?.language}</p>
              ))}
               
              </div>
            </div>
            {/*  */}
            {/* {resumeData?.video_questions?.some((data) => data?.video !== null) && (
  <div className="mt-1 text-white">
    <h2 className="text-base">Video Profile</h2>
    <span className="bg-white w-[100%] h-[2.3px] block" />
    <div className="flex flex-col text-left mt-1">
      {resumeData?.video_questions?.slice(0, 3).map((data, index) => {
        if (data?.video !== null) {
          return (
            <p className="text-sm" key={index}>
              {data?.question?.question}
              <a href={data?.video} className="underline mx-1">
                Answer
              </a>
            </p>
          );
        }
        return null;
      })}
    </div>
  </div>
)} */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;

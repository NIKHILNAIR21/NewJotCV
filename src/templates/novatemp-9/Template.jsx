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
  console.log(resumeData);
  return (
    <div className="p-5 ">
      {/* header */}
      <header className="flex justify-between item-start">
        <div>
          <h1 className="text-xl capitalize font-semibold text-sky-600">
            {resumeData?.full_name}
          </h1>
          <h4 className="text-base capitalize font-semibold text-sky-600">
            {resumeData?.position}
          </h4>
        </div>
        <div className="text-right ">
          <div className="flex gap-5 justify-end">
            <a
              className="text-sm text-sky-600 font-semibold"
            >
              {" "}
              {resumeData?.email}
            </a>
            <p className="text-sm text-sky-600 font-semibold">
              {resumeData?.mobile_no}
            </p>
          </div>
          <p className="text-sm text-sky-600 font-semibold">
            {resumeData?.address}
          </p>
          {/* social */}
          <div className="flex gap-2 justify-end">
            {resumeData?.social_links?.map((item) => (
              <a
                href={item?.link}
                key={item?.id}
                className="text-sm text-sky-600 font-semibold"
              >
                {item?.name}
              </a>
            ))}
          </div>
        </div>
      </header>
      {/* about */}
      <div className="mt-1">
        <p className="text-justify text-xs">
      {resumeData?.summary}
        </p>
      </div>
      {/* experinece */}
      <div className="mt-1">
        <h2 className="text-base font-semibold">Experience</h2>
        {/* exp */}
        {resumeData?.experiences?.map((exp, index) => (
          <div className="flex item-start justify-between">
            <div className="">
              <h1 className="text-sm font-semibold text-sky-600">
                {exp?.company_name}
              </h1>
              <h2 className="text-sm font-semibold text-sky-600">
                {exp?.designation}
              </h2>
              <p className="text-xs ">{exp?.description}</p>
            </div>
            <div className="w-[55%] text-right">
              <p className="text-sky-600 text-xs">
                {formatDate(exp?.start_date)} -{" "}
                {exp?.is_current ? "present" : formatDate(exp?.end_date)}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Projects */}
      <div className="mt-1">
        <h2 className="text-base font-semibold">Projects</h2>
        {/* exp */}
        {resumeData?.projects?.map((project, index) => (
          <div key={index + 1} className="flex my-2 item-start justify-between">
            <div className="">
              <h1 className="text-sm  font-semibold text-sky-600">
                {project?.title}
              </h1>
              <a href={project?.link} className="text-sm font-semibold text-sky-600">
                Project Link
              </a>
              <p className="text-justify text-xs">{project?.description}</p>
            </div>
            <div className="w-[55%] text-right">
              <p className="text-sky-600 text-xs">
                {" "}
                {formatDate(project?.start_date)}|{formatDate(project?.end_date)}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* education */}
      <div className="mt-2">
        <h2 className="text-base font-semibold">Education</h2>
        {/* exp */}
        {resumeData?.eductaions?.map((education, index) => (
          <div className="flex my-1 item-start justify-between">
            <div className="">
              <h1 className="text-sm font-semibold text-sky-600">
                {education?.university}
              </h1>
              <h2 className="text-sm font-semibold text-sky-600">
                {education?.course}
              </h2>
              <p className="text-justify text-xs">{education?.description}</p>
            </div>
            <div className="">
              <p className="text-sky-600 text-xs">
                {formatDate(education?.start_date)} |{" "}
                {education?.is_current ? "present" : formatDate(education?.end_date)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between item-start gap-2">
        {/* skill */}
        <div className="mt-1">
          <h2 className="text-base font-semibold">Skill</h2>
          <div className="flex flex-wrap gap-2">
            {resumeData?.skills.map((item, index) => (
              <p key={index} className="text-sm  text-sky-600">
                {item.skill}
              </p>
            ))}
          </div>
        </div>
        {/* interest */}
        <div className="mt-1">
          <h2 className="text-base font-semibold">interests</h2>
          <div className="flex flex-wrap gap-2 ">
            {resumeData?.interests.map((item, index) => (
              <p
                key={index + 1}
                className="text-sm  text-sky-600"
              >
                {" "}
                {item?.interest}{" "}
              </p>
            ))}
          </div>
        </div>
       
     
      </div>
     
       {/* language */}
      <div className="flex justify-between item-start">
      <div className="mt-2">
          <h2 className="text-base font-semibold">Language</h2>
          <div className="flex flex-wrap gap-2">

            {resumeData?.languages.map((item, index) => (
              <p key={index+1} className="text-sm  text-sky-600">
                {item?.language}
              </p>
            ))}

          </div>
        </div>
         {/* certificate */}
        <div className="mt-1">
          <h2 className="text-base font-semibold">Certification</h2>
          <ul className=" ">
          {resumeData?.certification?.map((item,index)=>(

            <li key={index+1} className="text-sky-600 font-medium text-sm">
            {item?.certificate}
            </li>
          ))}
           
          </ul>
        </div>
      </div>
      {/* {resumeData?.video_questions?.some((data) => data.video !== null) && (
  <div className="mt-2">
    <h2 className="text-base font-semibold">Video Profile</h2>
    <ul>
      {resumeData?.video_questions?.map((data, index) => {
        if (data?.video !== null) {
          return (
            <li className="text-sky-600 text-sm my-2" key={index}>
              {data?.question?.question}
              <a href={data?.video} className="border-2 text-sm border-sky-600 rounded-lg p-0.5 font-medium">
                Answer
              </a>
            </li>
          );
        }
        return null;
      })}
    </ul>
  </div>
)} */}

    </div>
  );
};

export default Template;

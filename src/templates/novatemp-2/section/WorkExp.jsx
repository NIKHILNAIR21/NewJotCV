import React from "react";

const WorkExp = ({ experince }) => {
  const formatDate = (dateString) => {
    if (!dateString) return null;
  
    const date = new Date(dateString);
  
      return date.toLocaleDateString(undefined, { month: 'short', year: 'numeric' });
  
  };
  return (
    <div className="px-6 flex">
     
     <div>
        <h1 className="font-semibold uppercase text-base mt-1 text-gray-700 ">
          Work Experience
        </h1>
        <div>
          {experince?.map((exp, index) => (
            <div key={exp?.id} className="mt-1  p-1.5 text-justify">
              <h3 className="text-sm   text-black font-semibold">
                {exp?.company_name}
              </h3>
              <div className="flex justify-between ">
                <p className="text-[15px]  text-left w-[70%]  text-black">{exp?.designation}</p>
                <p className="text-sm w-[25%] text-right text-black">
                  {formatDate(exp?.start_date)} -{" "}
                  {exp?.is_current ? "present" :formatDate(exp?.end_date)}
                </p>
              </div>
              <p className="text-sm w-[80%] text-black font-medium">
                {exp?.description}
              </p>
            </div>
          ))}
        </div>
     </div>
  
    </div>
  );
};

export default WorkExp;

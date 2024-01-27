import React from "react";
const formatDate = (dateString, formatType) => {
  if (!dateString) return null;

  const date = new Date(dateString);

    return date.toLocaleDateString(undefined, { month: 'short', year: 'numeric' });

};
const WorkExp = ({ experince }) => {
  return (
    <div className="px-6">
      <h1 className="font-semibold uppercase text-base mt-2 text-gray-700 ">
        Work Experience
      </h1>
      <div className="my-1">
        {experince?.map((exp, index) => (
          <div key={exp?.id} className=" pt-1 text-justify">
            <h3 className="text-sm  text-black font-semibold">
              {exp?.company_name}
            </h3>
            <div className="flex justify-between">
              <p className="text-sm text-black">{exp?.designation}</p>
              <p className="text-sm text-black">
                {formatDate(exp?.start_date)} -{" "}
                {exp?.is_current ? "present" :formatDate(exp?.end_date)}
              </p>
            </div>
            <p className="text-sm text-black font-medium">{exp?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExp;

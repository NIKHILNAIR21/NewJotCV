import React from "react";

const Education = ({ edu, reduxEdu }) => {
  const formatDate = (dateString, formatType) => {
    if (!dateString) return null;

    const date = new Date(dateString);

    return date.toLocaleDateString(undefined, {
      month: "short",
      year: "numeric",
    });
  };
  return (
    <div className="px-6">
      <h1 className="font-semibold uppercase text-base mt-1.5 text-emerald-500 ">
        Education
      </h1>
      <div className="flex ">
        <div className="mt-2 rounded ">
          <h3 className="text-[15.7px] font-medium">
            {reduxEdu?.formData?.schoolName}
          </h3>
          <p className="text-[15px] text-gray-600">
            {reduxEdu?.formData?.degree}
          </p>
          {reduxEdu?.formData?.startDate && (
            <p className=" text-sm text-gray-600">
              {formatDate(reduxEdu?.formData?.startDate)}-{" "}
              {reduxEdu?.currentlyStudying
                ? "present"
                : formatDate(reduxEdu?.formData?.endDate)}
            </p>
          )}
        </div>
        {edu?.map((edu, index) => (
          <div key={edu?.id} className="mt-2 rounded ml-6">
            <div></div>
            <h3 className="text-[15.7px] font-medium">{edu?.university}</h3>
            <p className="text-[15px] text-gray-600">{edu?.course}</p>
            <p className=" text-sm text-gray-600">
              {formatDate(edu?.start_date)} -{" "}
              {edu?.is_current ? "present" : formatDate(edu?.end_date)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;

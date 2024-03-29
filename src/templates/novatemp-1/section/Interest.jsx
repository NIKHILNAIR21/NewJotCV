import React from "react";

const Interest = ({ interest }) => {
  return (
    <div className="px-6">
      <h1 className="font-semibold uppercase text-base mt-2 text-emerald-500 ">
        Interests
      </h1>
      <div className="flex gap-x-3 flex-wrap">
        {interest?.map((item, index) => (
          <p className="text-sm " key={index}>
            {item?.interest} 
          </p>
        ))}
      </div>
    </div>
  );
};

export default Interest;

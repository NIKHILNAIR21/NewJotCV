import React from "react";
import Choose from "../assets/choose.png";
const AboutCard = ({ heading, subtext }) => {
  return (
    <div
      className="w-[358px] h-[358px] rounded-md border px-7"
      style={{
        background: `linear-gradient(to bottom, #F0F7FF 40%, transparent)`,
      }}
    >
      <img className="my-6" src={Choose} alt="" />
      <div className="pb-0">
        <h2 className="font-poppins font-bold text-xl">{heading}</h2>
        <p className="font-poppins font-medium text-left text-lg">{subtext}</p>
      </div>
    </div>
  );
};

export default AboutCard;

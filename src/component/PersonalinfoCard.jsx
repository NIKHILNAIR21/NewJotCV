import React from "react";
import { useDispatch } from "react-redux";
import { setActiveForm } from "../slice/showContentSlice";
const PersonalinfoCard = () => {
  const dispatch = useDispatch();
  return (
    <div
      className="bg-white p-3 rounded-lg m-3"
      onClick={() => dispatch(setActiveForm("PersonalInfoFormShow"))}
    >
      PersonalInfo
    </div>
  );
};

export default PersonalinfoCard;

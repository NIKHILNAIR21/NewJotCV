import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateSocialLinks,
  addSocialLinks,
  reset,
  deleteSocialLinks,
} from "../slice/SocialLInksSlice";
const SocialInfoForm = () => {
  const dispatch = useDispatch();

  const SocialLinkData = useSelector((state) => state.socialLinks?.social);
  const [links, setLinks] = useState([
    "Website",
    "Linkedin",
    "Github",
    "Twitter(X)",
    "Dribble",
    "Behance",
  ]);
  const [localSocialLinks, setLocalSocialLinks] = useState([]);

  useEffect(() => {
    setLocalSocialLinks(SocialLinkData);
    let newfilterLinks = links?.filter((data)=>{
        return !SocialLinkData?.some((item) => data === item.name);
    })
    console.log(newfilterLinks);
    setLinks(newfilterLinks)
  }, [SocialLinkData]);

  const handlechose = (item) => {
    dispatch(addSocialLinks({ link: "", name: item }));
    let newArr = links?.filter((i) => i !== item);
    setLinks(newArr);
  };
  const handleChange = (e, item) => {
    const inputValue = e.target.value;

    // URL validation function
    const isValidUrl = (url) => {
      try {
        new URL(url);
        return true;
      } catch (error) {
        console.error("Invalid URL:", error.message);
        return false;
      }
    };

    // Update the link property of the item in the local state
    const updatedLocalSocialLinks = localSocialLinks.map((data) =>
      data.name === item ? { ...item, link: inputValue } : data
    );
    // Set the updated local state
    setLocalSocialLinks(updatedLocalSocialLinks);

    // Update the link property of the item in the state
    const updatedItem = { ...item, link: inputValue };

    // Dispatch the action to update the Redux state
    dispatch(updateSocialLinks(updatedItem));

    // Handle invalid URL case (you can show an error message to the user if needed)
    console.error("Please enter a valid URL");
  };

  return (
    <div>
      <h2 className="text-lg">Links</h2>
      <div className="flex flex-col gap-1 w-[27rem] flex-wrap">
        {localSocialLinks?.map((item) => (
          <div className="flex gap-2 items-end my-3">
            <div className="flex-col">
              <div>
                <label>{item[name]}</label>
              </div>
              <input
                type="text"
                placeholder={`Enter your ${item?.name} URL`}
                name={item?.name}
                value={item?.link}
                className="p-2 rounded-lg w-full outline-none"
                onChange={(e) => handleChange(e, item)}
              />
            </div>
            <button
              onClick={() => dispatch(deleteSocialLinks(item.name))}
              className="bg-red-500 text-white p-2 rounded-lg"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="flex gap-1 w-[27rem] flex-wrap">
        {links?.map((item) => (
          <button
            onClick={() => handlechose(item)}
            className="p-2 bg-blue-200  rounded-full"
          >
            ➕ {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SocialInfoForm;

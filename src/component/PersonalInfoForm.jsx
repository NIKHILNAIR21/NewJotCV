import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { updatePersonalInfo, updatePhoto } from "../slice/personalInfo.js";
import NoImg from "../assets/NoImage.jpg";
import Edit from "../assets/edit.png";
import ReactQuill from "react-quill";
import { isNumberKey } from "../constant.js";
import "react-quill/dist/quill.snow.css";
import {
  updateCVProfile,
  createCVProfile,
  createSocialLinks,
} from "../services/ApiServices.js";
import SocialInfoForm from "./SocialInfoForm.jsx";
const PersonalInfoSchema = Yup.object().shape({
  FullName: Yup.string()
    .max(25, "Max 25 character or less")
    .required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  profession: Yup.string().required("Profession is required"),
  city: Yup.string().required("Address  is required"),
  phoneNumber: Yup.number()
    .min(10, "minimum 10 digit number")
    .required("Phone number is required"),
});
const PersonalInfoForm = () => {
  const [selectedPic, setSelectedPic] = useState(null);
  const dispatch = useDispatch();
  const initialValues = useSelector((state) => state.personalInfo);
  const socialLinks = useSelector((state) => state.socialLinks?.social);
  //   image upload
  const handlePhotoChange = (event) => {
    event.preventDefault();
    const selectedPhoto = event.target.files[0];
    setSelectedPic(selectedPhoto);

    dispatch(updatePhoto(URL?.createObjectURL(selectedPhoto)));
  };
  const handleSubmit = async (values) => {
    console.log(values);
    let formData = new FormData();
    formData.append("email", values.email);
    formData.append("full_name", values.FullName);
    formData.append("position", values.profession);
    formData.append("mobile_no", values.phoneNumber);
    formData.append("address", values.city);
    formData.append("summary", values?.summary);
    formData.append("template", 1);

    {
      selectedPic !== null && formData.append("profile_picture", selectedPic);
    }
    try {
      if (false) {
        let response = await updateCVProfile(id, formData);
        if (response?.status == 200) {
        }
      } else {
        let response = await createCVProfile(formData);
        if (response?.status == 201) {
          let body = {
            profile: response?.data?.data?.id,
            total_links: socialLinks.length,
            // social1: { name: selectedSocial, link },
          };
          socialLinks.forEach((data, index) => {
            body[`social${index + 1}`] = data;
          });

          try {
            let response = await createSocialLinks(body);
            if (response?.data?.status == 201) {
            }
          } catch (error) {}
        }
      }
    } catch (error) {}
  };
  return (
    <div>
      <div className="bg-gray-200 w-full rounded-t-2xl pt-4 relative">
        {initialValues?.photo ? (
          <>
            <img
              src={initialValues?.photo}
              alt="Preview"
              className="w-28  h-28 mx-auto rounded-md"
            />
            <input
              type="file"
              onChange={handlePhotoChange}
              accept="image/*"
              id="fileInput"
              className="absolute left-64 top-[40rem] z-[-100] pb-3 opacity-0 w-0 h-0 cursor-pointer"
            />
            <label htmlFor="fileInput">
              <img
                className="absolute w-8  h-8 top-24 right-44 bg-blue-200 rounded-md"
                src={Edit}
                // onChange={handlePhotoChange}
                alt=""
              />
            </label>
          </>
        ) : (
          <>
            <img
              src={NoImg}
              alt="Preview"
              className=" w-28  h-28 mx-auto  rounded-full"
            />
            <input
              type="file"
              onChange={handlePhotoChange}
              accept="image/*"
              id="fileInput"
              className="absolute left-64 top-[40rem] z-[-100] pb-3 opacity-0 w-0 h-0 cursor-pointer"
            />
            <label htmlFor="fileInput">
              <img
                className="absolute w-8  h-8 top-24 right-44 bg-blue-200 rounded-md"
                src={Edit}
                // onChange={handlePhotoChange}
                alt=""
              />
            </label>
            {/* <img
              className="absolute w-8  h-8 top-24 right-44 bg-blue-200 rounded-md"
              src={Edit}
              onChange={handlePhotoChange}
              alt=""
            /> */}
          </>
        )}
      </div>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={PersonalInfoSchema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({ values, setFieldValue }) => (
          <Form className=" p-4  bg-gray-200 rounded-b-2xl">
            <div className="overflow-y-auto h-96 no-scrollbar">
              <div className="flex flex-col">
                <label htmlFor="FullName">Full Name</label>
                <Field
                  type="text"
                  name="FullName"
                  placeholder="John Doe"
                  className="p-3 rounded-md"
                  value={values.FullName}
                  onChange={(e) => {
                    setFieldValue("FullName", e.target.value);
                    dispatch(updatePersonalInfo({ FullName: e.target.value }));
                  }}
                ></Field>

                <ErrorMessage
                  name="FullName"
                  component="div"
                  className="error-message text-red-500"
                />
              </div>
              <div className="flex flex-col ">
                <label htmlFor="FullName">Summary</label>
                <ReactQuill
                  theme="snow"
                  max="10"
                  value={values.summary}
                  name="summary"
                  onChange={(e) => {
                    console.log(e);
                    setFieldValue("summary", e);
                    dispatch(updatePersonalInfo({ summary: e }));
                  }}
                  className="bg-white rounded-md p-6"
                  style={{ width: "500px" }}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="FullName">profession</label>
                <Field
                  type="text"
                  name="profession"
                  placeholder="Software Developer"
                  className="p-3 rounded-md"
                  value={values.profession}
                  onChange={(e) => {
                    setFieldValue("profession", e.target.value);
                    dispatch(
                      updatePersonalInfo({ profession: e.target.value })
                    );
                  }}
                ></Field>
              </div>
              <div className="flex justify-between gap-3">
                <div className="flex flex-col">
                  <label htmlFor="FullName">Email</label>
                  <Field
                    type="email"
                    name="profession"
                    placeholder="johndeo@gmail.com"
                    className="p-3 rounded-md"
                    value={values.email}
                    onChange={(e) => {
                      setFieldValue("email", e.target.value);
                      dispatch(updatePersonalInfo({ email: e.target.value }));
                    }}
                  ></Field>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="FullName">Mobile Number</label>
                  <Field
                    type="tel"
                    name="Mobile Number"
                    maxLength={10}
                    placeholder="+91-222-222-33-21"
                    className="p-3 rounded-md"
                    value={values.phoneNumber}
                    onKeyPress={isNumberKey}
                    onChange={(e) => {
                      setFieldValue("phoneNumber", e.target.value);
                      dispatch(
                        updatePersonalInfo({
                          phoneNumber: e.target.value,
                        })
                      );
                    }}
                  ></Field>
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="FullName">Address</label>
                <Field
                  type="text"
                  name="Address"
                  placeholder="India, Mumbai"
                  className="p-3 rounded-md"
                  value={values.city}
                  onChange={(e) => {
                    setFieldValue("city", e.target.value);
                    dispatch(updatePersonalInfo({ city: e.target.value }));
                  }}
                ></Field>
              </div>
              <div>
                <SocialInfoForm />
              </div>
            </div>
            <div className="flex  justify-between mt-2">
              <button className="bg-black rounded-full text-white px-2 py-1">
                Back
              </button>
              <button
                onClick={() => handleSubmit(values)}
                type="submit"
                className="bg-blue-600 rounded-full text-white px-2 py-1"
              >
                Save
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PersonalInfoForm;
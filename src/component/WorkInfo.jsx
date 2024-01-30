import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../slice/workExperienceSlice";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const WorkExpSchema = Yup.object().shape({
  companyName: Yup.string()
    .min(2, "Minimum 2 Character")
    .required("Company name is required"),
  jobPosition: Yup.string().required("Job Position is required"),
  startDate: Yup.date().required("Start date is required"),
  endDate: Yup.date().when("currentlyWorking", {
    is: false,
    then: () =>
      Yup.date()
        .required("End Date is required")
        .min(Yup.ref("startDate"), "End Date must be after Start Date"),
  }),
  jobDescription: Yup.string().required("description is required"),
});
const WorkInfo = () => {
  const dispatch = useDispatch();
  const { currentlyWorking, showDescriptionInput, formData } = useSelector(
    (state) => state.workExperience
  );

  const intialValues = { ...formData, currentlyWorking };
  return (
    <div className=" ">
      <Formik
        enableReinitialize
        initialValues={intialValues}
        validationSchema={WorkExpSchema}
      >
        {({ values, setFieldValue, errors }) => (
          <Form>
            <div className="bg-white rounded-[6px] p-4 w-[33rem]">
              <div className="flex flex-col">
                <label className="text-[16px] pb-1">Company Name</label>

                <Field
                  type="text"
                  name="companyName"
                  value={values.companyName}
                  onChange={(e) => {
                    setFieldValue("companyName", e.target.value);
                    dispatch(updateFormData({ companyName: e.target.value }));
                  }}
                  placeholder="Google "
                  className=" outline-none border  rounded-[6px] p-3 "
                />
                <ErrorMessage
                  name="companyName"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="flex flex-col text-left   mt-2 ">
                <label className="text-[16px] pb-1">Job Title</label>
                <Field
                  type="text"
                  name="jobPosition"
                  value={values.jobPosition}
                  onChange={(e) => {
                    setFieldValue("jobPosition", e.target.value);
                    dispatch(updateFormData({ jobPosition: e.target.value }));
                  }}
                  placeholder="Software Developer"
                  className="  outline-none border p-3 rounded-[6px] "
                />
                <ErrorMessage
                  name="jobPosition"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="flex justify-center items-center">
                <div className="flex pt-2 gap-4 w-full  text-left ">
                  <div className="flex flex-col w-full">
                    <label className="text-[16px]  pb-1">Start Date</label>
                    <Field
                      type="date"
                      name="startDate"
                      max={new Date()?.toISOString()?.split("T")[0]}
                      value={values.startDate}
                      onChange={(e) => {
                        setFieldValue("startDate", e.target.value);
                        dispatch(updateFormData({ startDate: e.target.value }));
                      }}
                      className=" outline-none border w-full p-3 rounded-[6px] "
                    />
                    <ErrorMessage
                      name="startDate"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label className="text-[16px]  pb-1">End Date</label>
                    <Field
                      type="date"
                      name="endDate"
                      max={new Date()?.toISOString()?.split("T")[0]}
                      onChange={(e) => {
                        setFieldValue("endDate", e.target.value);
                        dispatch(updateFormData({ endDate: e.target.value }));
                      }}
                      disabled={values.currentlyWorking}
                      value={values.currentlyWorking ? "" : values?.endDate}
                      className=" outline-none w-full border p-3 rounded-[6px]"
                    />
                    <ErrorMessage
                      name="endDate"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                </div>
              </div>

              <div className="flex mt-2  justify-end">
                <Field
                  type="checkbox"
                  id="currentlyWorking"
                  className="outline-none rounded-md "
                  checked={values.currentlyWorking}
                  onChange={() => {
                    setFieldValue("currentlyWorking", !values.currentlyWorking);
                    dispatch(toggleCurrentlyWorking());
                    if (!values.currentlyWorking) {
                      dispatch(updateFormData({ endDate: "" }));
                    }
                  }}
                />
                <label
                  htmlFor="currentlyWorking"
                  className="ml-1 text-base text-sky-500"
                >
                  I am currently Working
                </label>
              </div>
              <div className="flex flex-col   mt-2">
                <label className="text-[16px] ">Job Description</label>
                <ReactQuill
                  theme="snow"
                  name="jobDescription"
                  value={values?.jobDescription}
                  onChange={(e) => {
                    setFieldValue("jobDescription", e.target.value);
                    dispatch(
                      updateFormData({ jobDescription: e.target.value })
                    );
                  }}
                  //   placeholder="I developed brad AI  system Design...."
                  className="outline-none rounded-md "
                />

                <ErrorMessage
                  name="jobDescription"
                  component="div"
                  className="error-message text-red-500"
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default WorkInfo;

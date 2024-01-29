import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  addSkill,
  removeSkill,
  resetSkil,
  restoreSkill,
  updateSkill,
} from "../slice/skillSlice";
const SkillSchema = Yup.object().shape({
  name: Yup.string().required("skill name is required"),
});
const Skillinfo = () => {
  const dispatch = useDispatch();
  const initialValues = useSelector((state) => state?.skills?.formData);
  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={initialValues} // Assuming `skills` is coming from the Redux store
        onSubmit={(values) => {
          addSkillHandler(values);
        }}
        validationSchema={SkillSchema}
      >
        <Form>
          <Field
            type="text"
            name="name"
            value={values?.name}
            onChange={(e) => {
              setFieldValue(`name`, e.target.value);
              dispatch(updateSkill({ name: e.target.value }));
            }}
            placeholder="Javascript"
            className="block appearance-none w-[39rem]  sm:w-[36rem] md:w-[44rem] bg-white border rounded-md border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 "
          />

          <ErrorMessage name="name" component="div" className="text-red-500" />
          <div className="w-full mt-2  ">
            <label
              htmlFor="select"
              className="block text-sm font-medium text-gray-700"
            >
              Select an type:
            </label>
            <div className="relative">
              <select
                id="select"
                value={values?.type}
                onChange={(e) => {
                  setFieldValue(`type`, e.target.value);
                  dispatch(updateSkill({ type: e.target.value }));
                }}
                name="type"
                className="block appearance-none w-[39rem] sm:w-[36rem] md:w-[44rem] bg-white border rounded-md outline-none border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 "
              >
                <option value="1">Beginner</option>
                <option value="2">Intermediate</option>
                <option value="3">Advanced</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Skillinfo;

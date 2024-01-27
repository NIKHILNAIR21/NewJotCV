import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  FullName: "",
  profession: "",
  city: "",
  summary:"",
  phoneNumber: "",
  email: "",
  photo: null,

};

const personalInfoSlice = createSlice({
  name: "personalInfo",
  initialState,
  reducers: {
    getPersonalInfoApi: (state, action) => {
    return action.payload


    },
    updatePersonalInfo: (state, action) => {
      return { ...state, ...action.payload };
    },
    updatePhoto: (state, action) => {
      state.photo = action.payload;
    },

    reset: () => initialState

    
  },
});

export const { updatePersonalInfo, updatePhoto,getPersonalInfoApi,reset } = personalInfoSlice.actions;
export default personalInfoSlice.reducer;

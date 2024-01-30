import { configureStore } from "@reduxjs/toolkit";
import personalInfoReducer from "./slice/personalInfo";
import educationReducer from "./slice/educationSlice";
import workExperienceReducer from "./slice/workExperienceSlice";
import summaryReducer from "./slice/summarySlice";
import skillReducer from "./slice/skillSlice";
import SocialLinksSlice from "./slice/SocialLInksSlice";
import userDetailReducer from "./slice/userDetail";
import  showFormReducer  from "./slice/showContentSlice";
// import { getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

import projectSlice from "./slice/projectSlice";
import educationhistorySlice from "./slice/educationhistorySlice";
import workHistorySlice from "./slice/workHistorySlice";
import projectHistorySlice from "./slice/projectHistorySlice";
import templateIDSlice from "./slice/templateIDSlice";
import allProfileComplitionSlice from "./slice/allProfileComplitionSlice";
import fullProfileSlice from "./slice/fullProfileSlice";
import PickedSlice from "./slice/PickedSlice";
import selectedProfileSlice from "./slice/selectedProfileSlice";
import portfolioProfile from "./slice/portfolioProfile";
import askExpSlice from "./slice/askExpSlice";
import sectionSlice from "./slice/sectionSlice";
const rootReducer = combineReducers({
  personalInfo: personalInfoReducer,
  education: educationReducer,
  workExperience: workExperienceReducer,
  skills: skillReducer,
  summary: summaryReducer,
  showForm: showFormReducer,
  // userDetails
  userDetail: userDetailReducer,
  project: projectSlice,
  eduHistory: educationhistorySlice,
  workHistory: workHistorySlice,
  projectHistory: projectHistorySlice,
  templateID: templateIDSlice,
  isComplete: allProfileComplitionSlice,
  fullProfile: fullProfileSlice,
  socialLinks: SocialLinksSlice,
  // video question picked
  picked: PickedSlice,
  // selectedprofile
  selectedProfile: selectedProfileSlice,
  askExp: askExpSlice,
  portfolioSelction: portfolioProfile,
  showSectios:sectionSlice
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

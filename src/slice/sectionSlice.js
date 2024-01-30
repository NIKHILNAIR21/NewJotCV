// sectionSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Education: false,
  Professional: false,
  Language: false,
  Certificate: false,
  Interest: false,
  Skills: false,
  Projects: false,
};

const sectionSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    setSectionActive: (state, action) => {
      const section = action.payload;
      state[section] = true
    },
  },
});

export const { setSectionActive } = sectionSlice.actions;
export default sectionSlice.reducer;

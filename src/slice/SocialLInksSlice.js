import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  social: [],
};
const SocialLinksSlice = createSlice({
  name: "SocialLinks",
  initialState,
  reducers: {
    addSocialLinks: (state, action) => {
      return { ...state, social: [...state.social, action.payload] };
    },
    updateSocialLinks: (state, action) => {
      const updatedSocial = state.social.map((link) =>
        link?.name === action.payload.name
          ? { ...link, ...action.payload }
          : link
      );

      return { ...state, social: updatedSocial };
    },
    deleteSocialLinks: (state, action) => {
      const linkIdToDelete = action.payload;
      console.log(state);
      // Filter out the social link with the specified id
      const updatedSocial = state.social.filter(
        (link) => link.name !== linkIdToDelete
      );
      console.log(updatedSocial);
      return { ...state, social: updatedSocial };
    },
    resetSocial: () => initialState,
  },
});

export const {
  updateSocialLinks,
  addSocialLinks,
  resetSocial,
  deleteSocialLinks,
} = SocialLinksSlice.actions;
export default SocialLinksSlice.reducer;

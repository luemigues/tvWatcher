import { createSlice } from "@reduxjs/toolkit";

const selectedShow = createSlice({
  name: "selectedShow",
  initialState: {
    value: {},
  },
  reducers: {
    selectShow: (state, action) => {
      state.value = { ...action.payload };
    },
    removeSelectedShow: (state) => {
      state.value = {};
    },
    addPrevEpisode: (state, action) => {
      state.value = { ...state.value ,
        prevEpisode: action.payload };
    },
  },
});

export const { selectShow, removeSelectedShow, addPrevEpisode } = selectedShow.actions;
export default selectedShow.reducer;

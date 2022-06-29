import { createSlice } from "@reduxjs/toolkit";

const selectedShow = createSlice({
  name: "selectedShow",
  initialState: {
    value: {},
    isSelected: false,
  },
  reducers: {
    selectShow: (state, action) => {
      state.value = { ...action.payload };
      state.isSelected = true;
    },
    removeSelectedShow: (state) => {
      state.value = {};
      state.isSelected = false;
    },
    addPrevEpisode: (state, action) => {
      state.value = { ...state.value, prevEpisode: action.payload };
    },
  },
});

export const { selectShow, removeSelectedShow, addPrevEpisode } =
  selectedShow.actions;
export default selectedShow.reducer;

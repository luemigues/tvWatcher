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
  },
});

export const { selectShow, removeSelectedShow } = selectedShow.actions;
export default selectedShow.reducer;

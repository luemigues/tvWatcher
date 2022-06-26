import { createSlice } from "@reduxjs/toolkit";

const selectedShow = createSlice({
  name: "selectedShow",
  initialState: {
    value: {},
  },
  reducers: {
    selectShow: (state, action) => {
      state.selectedShow.value = action.payload;
    },
    removeSelectedShow: (state, action) => {
      state.selectedShow.value = {};
    },
  },
});

export const { selectShow, removeSelectedShow } = selectedShow.actions;
export default selectedShow.reducer;

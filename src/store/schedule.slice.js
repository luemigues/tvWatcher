import { createSlice } from "@reduxjs/toolkit";

const schedule = createSlice({
  name: "schedule",
  initialState: {
    value: [],
  },
  reducers: {
    saveSchedule: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { saveSchedule } = schedule.actions;
export default schedule.reducer;

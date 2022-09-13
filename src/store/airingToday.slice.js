import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tvMaze from "../utils/resources";

export const fetchTodaysEpisodes = createAsyncThunk(
  "airingToday/fetchTodaysEpisodes",
  async () => {
    try {
      let currentDate = new Date(Date.now());
      currentDate = currentDate.toISOString().split("T")[0];

      const response = await tvMaze.getEpisodesByDate(currentDate);
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

const airingToday = createSlice({
  name: "airingToday",
  initialState: {
    value: [],
  },
  reducers: {
    saveTodayEp: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodaysEpisodes.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

export const { saveTodayEp } = airingToday.actions;
export default airingToday.reducer;

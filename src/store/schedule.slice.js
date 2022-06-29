import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tvMaze from "../utils/resources";
import helpers from "../utils/helpers";

export const fetchUpcomingEpisodes = createAsyncThunk(
  "schedule/fetchUpcomingEpisodes",
  async (favs) => {
    try {
      const response = await tvMaze.getFullSchedule();
      let favoriteEps = helpers.filterFavoriteEpisodes(response, favs);
      let upcoming = helpers.getUpcomingEpisodes(favoriteEps);
      return upcoming;
    } catch (err) {
      console.log(err);
    }
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(fetchUpcomingEpisodes.fulfilled, (state, action) => {
      state.value = action.payload;
      state.loading = "false";
    });
  },
});

export const { saveSchedule } = schedule.actions;
export default schedule.reducer;

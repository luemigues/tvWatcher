import { createSlice } from "@reduxjs/toolkit";

const favorite = createSlice({
  name: "favorites",
  initialState: {
    value: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.value.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.value = state.value.filter((show) => {
        return show.show.id !== action.payload.show.id;
      });
    },
  },
});

export const { addFavorite, removeFavorite } = favorite.actions;
export default favorite.reducer;

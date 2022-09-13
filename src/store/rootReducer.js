import { combineReducers } from "redux";
import favorites from "./favorite.slice";
import selectedShow from "./selectedShow.slice";
import schedule from "./schedule.slice";
import airingToday from "./airingToday.slice"

const rootReducer = combineReducers({
  favorites: favorites,
  selectedShow: selectedShow,
  schedule: schedule,
  airingToday: airingToday,
});

export default rootReducer;

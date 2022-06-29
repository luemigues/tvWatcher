import { combineReducers } from "redux";
import favorites from "./favorite.slice";
import selectedShow from "./selectedShow.slice";
import schedule from "./schedule.slice";

const rootReducer = combineReducers({
  favorites: favorites,
  selectedShow: selectedShow,
  schedule: schedule,
});

export default rootReducer;

import { combineReducers } from "redux";
import favorites from "./favorite.slice";
import selectedShow from "./selectedShow.slice";

const rootReducer = combineReducers({
  favorites: favorites,
  selectedShow: selectedShow,
});

export default rootReducer;

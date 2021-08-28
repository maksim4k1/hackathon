import { combineReducers } from "redux";
import entryReducer from "./entryReducer";

const appReducer = combineReducers({
  isAuth: entryReducer,
});

export default appReducer;
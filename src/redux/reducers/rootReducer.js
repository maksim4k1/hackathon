import { combineReducers } from "redux";
import appReducer from "./appReducer";
import loginReducer from "./loginReducer";
import registerReducer from "./registerReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  app: appReducer
});

export default rootReducer;
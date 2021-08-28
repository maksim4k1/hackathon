import { combineReducers } from "redux";
import addTodoReducer from "./addTodoReducer";
import appReducer from "./appReducer";
import loginReducer from "./loginReducer";
import registerReducer from "./registerReducer";
import todolistReducer from "./todolistReducer";

const rootReducer = combineReducers({
  todolist: todolistReducer,
  addTodo: addTodoReducer,
  login: loginReducer,
  register: registerReducer,
  app: appReducer
});

export default rootReducer;
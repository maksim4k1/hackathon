import { getTodosAction } from "./actions/action";
import { EDIT_TODO, ADD_NEW_TODO, SET_ACTIVE_DAY, DELETE_TODO } from "./types"

export function getTodosMiddleware({dispatch}){
  return next => {
    return action => {
      if(
        action.type === EDIT_TODO ||
        action.type === ADD_NEW_TODO ||
        action.type === SET_ACTIVE_DAY ||
        action.type === DELETE_TODO
      ){
        next(action);
        return dispatch(getTodosAction());
      }
      next(action);
    }
  }
}
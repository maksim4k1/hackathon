import { LOGIN, LOGOUT, OPEN_ADD_TODO_MODAL, CLOSE_ADD_TODO_MODAL } from "../types";

export function logInAction(username){
  return { type: LOGIN, payload: username }
}
export function logOutAction(){
  return { type: LOGOUT }
}
export function openAddTodoModalAction(){
  return { type: OPEN_ADD_TODO_MODAL }
}
export function closeAddTodoModalAction(){
  return { type: CLOSE_ADD_TODO_MODAL }
}
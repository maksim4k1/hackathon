import { LOGIN, LOGOUT } from "../types";

export function logInAction(){
  return { type: LOGIN }
}
export function logOutAction(){
  return { type: LOGOUT }
}
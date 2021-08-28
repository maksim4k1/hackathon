import { EDIT_LOGIN_INPUT_VALUE, EDIT_REGISTER_INPUT_VALUE, SET_ACTIVE_DAY, SUBMIT_LOGIN, SUBMIT_REGISTER, EDIT_TODOLIST_INPUT_VALUE, ADD_NEW_TODO } from "../types";
import { logInAction } from "./appActions";

const URL = "http://localhost";

export function editLoginInputValueAction(name, value){
  return { type: EDIT_LOGIN_INPUT_VALUE, payload: {name, value} }
}
export function editRegisterInputValueAction(name, value){
  return { type: EDIT_REGISTER_INPUT_VALUE, payload: {name, value} }
}
export function editTodoListInputValueAction(name, value){
  return { type: EDIT_TODOLIST_INPUT_VALUE, payload: {name, value} }
}
export function submitLoginAction(username, password){
  return async dispatch => {
    let error;

    try {
      if(!username || !password){
        error = "Заполните все поля"
        dispatch({ type: SUBMIT_LOGIN, payload: error });
        return;
      }
      // await fetch(`${URL}/login`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify({
      //     username,
      //     password,
      //   })
      // });
      dispatch(logInAction(username));
    } catch {
      error = "Такой пользователь не найден";
    }
    dispatch({ type: SUBMIT_LOGIN, payload: error });
  }
}
export function submitRegisterAction(username, name, password, confirm_password){
  return async dispatch => {
    let error;

    try {
      if(!username || !name || !password || !confirm_password){
        error = "Заполните все поля"
        dispatch({ type: SUBMIT_REGISTER, payload: error });
        return;
      }
      await fetch(`${URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          name,
          password,
          confirm_password,
        })
      });
      dispatch(logInAction(username));
    } catch {
      error = "Пользователь с таким логином уже существует";
    }
    dispatch({ type: SUBMIT_REGISTER, payload: error });
  }
}
export function submitTodoListAction(title, body, username, date){
  return async dispatch => {
    let error;

    try {
      if(!title || !body){
        error = "Заполните все поля"
        dispatch({ type: ADD_NEW_TODO, payload: error });
        return;
      }
      await fetch(`${URL}/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title,
          body,
          user: username,
          date: date,
          isCompleted: false,
        })
      });
      dispatch(logInAction());
    } catch {
      error = "Что-то пошло не так...";
    }
    dispatch({ type: ADD_NEW_TODO, payload: error });
  }
}
export function setActiveDayAction(day){
  return { type: SET_ACTIVE_DAY, payload: day }
}
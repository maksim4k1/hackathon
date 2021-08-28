import { EDIT_LOGIN_INPUT_VALUE, EDIT_REGISTER_INPUT_VALUE, SUBMIT_LOGIN, SUBMIT_REGISTER } from "../types";

const URL = "http://localhost";

export function editLoginInputValueAction(name, value){
  return { type: EDIT_LOGIN_INPUT_VALUE, payload: {name, value} }
}

export function editRegisterInputValueAction(name, value){
  return { type: EDIT_REGISTER_INPUT_VALUE, payload: {name, value} }
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
      await fetch(`${URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          password,
        })
      });
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
    } catch {
      error = "Пользователь с таким логином уже существует";
    }
    dispatch({ type: SUBMIT_REGISTER, payload: error });
  }
}
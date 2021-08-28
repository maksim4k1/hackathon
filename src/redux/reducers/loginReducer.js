import { editInputValue, submitForm } from "../functions";
import { EDIT_LOGIN_INPUT_VALUE, SUBMIT_LOGIN } from "../types";

const initialLogin = {
  formData: [
    {name: "username", value: ""},
    {name: "password", type: "password", value: ""},
  ],
  error: ""
}

function loginReducer(state=initialLogin, {type, payload}){
  switch (type) {
    case EDIT_LOGIN_INPUT_VALUE: {
      return editInputValue(state, payload);
    }
    case SUBMIT_LOGIN: {
      return submitForm(state, payload);
    }
    default: {
      return state;
    }
  }
}

export default loginReducer;
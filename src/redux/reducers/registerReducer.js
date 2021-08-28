import { editInputValue, submitForm } from "../functions";
import { EDIT_REGISTER_INPUT_VALUE, SUBMIT_REGISTER } from "../types";

const initialLogin = {
  formData: [
    {name: "username", value: ""},
    {name: "name", value: ""},
    {name: "password", value: ""},
    {name: "confirm_password", value: ""},
  ],
  error: ""
}

function registerReducer(state=initialLogin, {type, payload}){
  switch (type) {
    case EDIT_REGISTER_INPUT_VALUE: {
      return editInputValue(state, payload);
    }
    case SUBMIT_REGISTER: {
      return submitForm(state, payload);
    }
    default: {
      return state;
    }
  }
}

export default registerReducer;
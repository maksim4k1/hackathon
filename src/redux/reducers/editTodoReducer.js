import { editInputValue, submitForm } from "../functions";
import { CLOSE_EDIT_TODO_MODAL, OPEN_EDIT_TODO_MODAL, EDIT_TODO_INPUT_VALUE, EDIT_TODO, SET_EDITED_TODO } from "../types";

const initialEditTodo = {
  openModal: false,
  formData: [
    {name: "title", value: ""},
    {name: "body", value: ""},
  ],
  error: "",
  editedTodo: ""
}

function editTodoReducer(state=initialEditTodo, {type, payload}){
  switch (type) {
    case OPEN_EDIT_TODO_MODAL: {
      return {
        ...state,
        openModal: true
      };
    }
    case CLOSE_EDIT_TODO_MODAL: {
      return {
        ...state,
        openModal: false,
        error: ""
      };
    }
    case EDIT_TODO_INPUT_VALUE: {
      return editInputValue(state, payload);
    }
    case EDIT_TODO: {
      return submitForm(state, payload);
    }
    case SET_EDITED_TODO: {
      return{
        ...state,
        editedTodo: payload
      }
    }
    default: {
      return state;
    }
  }
}

export default editTodoReducer;
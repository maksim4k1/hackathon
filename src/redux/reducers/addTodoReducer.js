import { ADD_NEW_TODO, CLOSE_ADD_TODO_MODAL, EDIT_TODOLIST_INPUT_VALUE, OPEN_ADD_TODO_MODAL } from "../types";
import { editInputValue, submitForm } from "../functions";

const initialAddTodo = {
  openModal: false,
  formData: [
    {name: "title", value: ""},
    {name: "body", value: ""},
  ],
  error: ""
}

function addTodoReducer(state=initialAddTodo, {type, payload}){
  switch (type) {
    case OPEN_ADD_TODO_MODAL: {
      return {
        ...state,
        openModal: true
      };
    }
    case CLOSE_ADD_TODO_MODAL: {
      return {
        ...state,
        openModal: false
      };
    }
    case EDIT_TODOLIST_INPUT_VALUE: {
      return editInputValue(state, payload);
    }
    case ADD_NEW_TODO: {
      return submitForm(state, payload);
    }
    default: {
      return state;
    }
  }
}

export default addTodoReducer;
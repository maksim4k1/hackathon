import { LOGIN, LOGOUT } from "../types";

const initialUser = {
  isAuth: false,
  username: ""
}

function entryReducer(state=initialUser, {type, payload}){
  switch(type){
    case LOGIN: {
      return {
        ...state,
        isAuth: true,
        username: payload
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isAuth: false,
        username: ""
      };
    }
    default: {
      return state;
    }
  }
}

export default entryReducer;
import { LOGIN, LOGOUT } from "../types";

function entryReducer(state=false, {type}){
  switch(type){
    case LOGIN: {
      return true;
    }
    case LOGOUT: {
      return false;
    }
    default: {
      return state;
    }
  }
}

export default entryReducer;
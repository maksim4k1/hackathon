import { SET_ACTIVE_DAY } from "../types";

const initialTodolist = {
  todos: [],
  weekDays: [
    {weekDay: 6, date: "28.08", isActive: true},
    {weekDay: 7, date: "29.08", isActive: false},
    {weekDay: 1, date: "30.08", isActive: false},
    {weekDay: 2, date: "31.08", isActive: false},
    {weekDay: 3, date: "01.09", isActive: false},
    {weekDay: 4, date: "02.09", isActive: false},
    {weekDay: 5, date: "03.09", isActive: false},
  ]
}

function todolistReducer(state=initialTodolist, {type, payload}){
  switch (type) {
    case SET_ACTIVE_DAY: {
      const newWeekDays = [...state.weekDays];
      newWeekDays.forEach(day => {
        day.isActive = false;
      });
      newWeekDays.find(day => day.weekDay === payload).isActive = true;
      return {
        ...state,
        weekDays: newWeekDays
      };
    }
    default: {
      return state;
    }
  }
}

export default todolistReducer;
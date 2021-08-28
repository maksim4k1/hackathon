import { GET_TODOS, SET_ACTIVE_DAY } from "../types";

const initialTodolist = {
  todos: [
    {id: 1, title: "Title", body: "asdadsasd"},
    {id: 2, title: "Go to school", body: "asdadsasd"},
    {id: 3, title: "Sleep", body: "asdadsasd"},
    {id: 4, title: "Eata", body: "asdadsasd"},
    {id: 5, title: "AAAAAAAAAAAAAAAAAAAA", body: ""},
  ],
  weekDays: [
    {weekDay: 6, date: "2021-08-28", isActive: true},
    {weekDay: 7, date: "2021-08-29", isActive: false},
    {weekDay: 1, date: "2021-08-30", isActive: false},
    {weekDay: 2, date: "2021-08-31", isActive: false},
    {weekDay: 3, date: "2021-09-01", isActive: false},
    {weekDay: 4, date: "2021-09-02", isActive: false},
    {weekDay: 5, date: "2021-09-03", isActive: false},
  ]
}

function todolistReducer(state=initialTodolist, {type, payload}){
  switch (type) {
    case GET_TODOS: {
      return {
        ...state,
        todos: payload,
      }
    }
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
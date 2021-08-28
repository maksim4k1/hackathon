import Login from "../pages/Login";
import Register from "../pages/Register";
import TodoList from "../pages/TodoList";

const generalRouters = []

export const localReducers = [
  {path: "/", component: TodoList, exact: true},
  ...generalRouters
]

export const publicRouters = [
  {path: "/", component: Login, exact: true},
  {path: "/register", component: Register, exact: true},
  ...generalRouters
];
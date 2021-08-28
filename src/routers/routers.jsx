import Login from "../pages/Login";
import Error404 from "../pages/errors/404";
import Register from "../pages/Register";
import TodoList from "../pages/TodoList";

const generalRouters = [
  {path: "/error/404", component: Error404, exact: true},
]

export const localReducers = [
  {path: "/", component: TodoList, exact: true},
  ...generalRouters
]

export const publicRouters = [
  {path: "/", component: Login, exact: true},
  {path: "/register", component: Register, exact: true},
  ...generalRouters
];
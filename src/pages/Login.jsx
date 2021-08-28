import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";

const Reg = styled.div`
  margin: 20px 0 0;
  text-align: center;
`;

function Login () {
  return(
    <div>
      <LoginForm/>
      <Reg>Не зарегистрированы? <Link to="/register">Регистрация</Link></Reg>
    </div>
  );
}

export default Login;
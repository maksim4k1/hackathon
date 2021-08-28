import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import RegisterForm from "../components/RegisterForm";

const Log = styled.div`
  margin: 20px 0 0;
  text-align: center;
`;

function Register () {
  return(
    <div>
      <RegisterForm/>
      <Log>Уже зарегистрированы? <Link to="/">Авторизация</Link></Log>
    </div>
  );
}

export default Register;
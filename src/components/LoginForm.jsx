import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { editLoginInputValueAction, submitLoginAction } from "../redux/actions/action";
import Form from "./UI/Form";

const Error = styled.div`
  margin: 10px 0;
  color: var(--main-red);
  font-size: 14px;
  text-align: center;
`;

function LoginForm ({formData, error, editInputValue, submitForm}) {
  function inputHandler(event){
    editInputValue(event.target.name, event.target.value);
  }
  function formHandler(event){
    event.preventDefault();
    const username = formData.find(item => item.name === "username").value;
    const password = formData.find(item => item.name === "password").value;
    submitForm(username, password);
  }
  
  return(
    <div>
      <Form title="Авторизация" inputs={formData} inputHandler={inputHandler} formHandler={formHandler}/>
      <Error>{error}</Error>
    </div>
  );
}

const mapStateToProps = state => ({
  formData: state.login.formData,
  error: state.login.error,
});

const mapDispatchToProps = {
  editInputValue: editLoginInputValueAction,
  submitForm: submitLoginAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
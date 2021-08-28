import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { editRegisterInputValueAction, submitRegisterAction } from "../redux/actions/action";
import Form from "./UI/Form";

const Error = styled.div`
  margin: 10px 0;
  color: var(--main-red);
  font-size: 14px;
  text-align: center;
`;

function RegisterForm ({formData, error, editInputValue, submitForm}) {
  function inputHandler(event){
    editInputValue(event.target.name, event.target.value);
  }
  function formHandler(event){
    event.preventDefault();
    const username = formData.find(item => item.name === "username").value;
    const name = formData.find(item => item.name === "name").value;
    const password = formData.find(item => item.name === "password").value;
    const confirm_password = formData.find(item => item.name === "confirm_password").value;
    submitForm(username, name, password, confirm_password)
  }
  
  return(
    <div>
      <Form title="Регистрация" inputs={formData} inputHandler={inputHandler} formHandler={formHandler}/>
      <Error>{error}</Error>
    </div>
  );
}

const mapStateToProps = state => ({
  formData: state.register.formData,
  error: state.register.error,
});

const mapDispatchToProps = {
  editInputValue: editRegisterInputValueAction,
  submitForm: submitRegisterAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
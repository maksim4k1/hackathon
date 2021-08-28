import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { editTodoListInputValueAction, submitTodoListAction } from "../redux/actions/action";
import Form from "./UI/Form";

const Error = styled.div`
  margin: 10px 0;
  color: var(--main-red);
  font-size: 14px;
  text-align: center;
`;

function TodoListForm ({formData, error, editInputValue, submitForm, username, selectedDate}) {
  function inputHandler(event){
    editInputValue(event.target.name, event.target.value);
  }
  function formHandler(event){
    event.preventDefault();
    const title = formData.find(item => item.name === "title").value;
    const body = formData.find(item => item.name === "body").value;
    const user = username;
    const date = selectedDate;
    submitForm(title, body, user, date)
  }
  
  return(
    <div>
      <Form title="Создать новый Todo" inputs={formData} inputHandler={inputHandler} formHandler={formHandler}/>
      <Error>{error}</Error>
    </div>
  );
}

const mapStateToProps = state => ({
  formData: state.addTodo.formData,
  error: state.addTodo.error,
  username: state.app.user.username,
  selectedDate: state.todolist.weekDays.find(item => item.isActive === true).date,
});

const mapDispatchToProps = {
  editInputValue: editTodoListInputValueAction,
  submitForm: submitTodoListAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListForm);
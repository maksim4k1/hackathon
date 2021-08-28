import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import TodoListForm from "../components/TodoListForm";
import Todos from "../components/Todos";
import Button from "../components/UI/Button";
import Modal from "../components/UI/Modal";
import WeekList from "../components/WeekList";
import { openAddTodoModalAction, closeAddTodoModalAction, closeEditTodoModalAction } from "../redux/actions/appActions";
import { editTodoInputValueAction, editTodoAction } from "../redux/actions/action";
import Form from "../components/UI/Form";

const TodoListElement = styled.div`
  padding: 30px 20px;
`;

const Error = styled.div`
  margin: 10px 0;
  color: var(--main-red);
  font-size: 14px;
  text-align: center;
`;

function TodoList ({formData, isOpenAddModal, openAddModal, closeAddModal, isOpenEditModal, closeEditModal, editInputValue, editTodo, error, editedTodo}) {
  function inputHandler(event){
    editInputValue(event.target.name, event.target.value);
  }
  function formHandler(event){
    event.preventDefault();
    const title = formData.find(item => item.name === "title").value;
    const body = formData.find(item => item.name === "body").value;
    editTodo(title, body, editedTodo);
  }

  return(
    <TodoListElement>
      <Button style={{margin: "0 0 20px auto"}} onClick={openAddModal}>Создать новый Todo</Button>
      <Modal isOpenModal={isOpenAddModal} closeModal={closeAddModal}>
        <TodoListForm/>
      </Modal>
      <WeekList/>
      <Modal isOpenModal={isOpenEditModal} closeModal={closeEditModal}>
        <Form inputs={formData} inputHandler={inputHandler} formHandler={formHandler} title="Изменить Todo"/>
        <Error>{error}</Error>
      </Modal>
      <Todos/>
    </TodoListElement>
  );
}

const mapStatetoProps = state => ({
  isOpenAddModal: state.addTodo.openModal,
  isOpenEditModal: state.editTodo.openModal,
  formData: state.editTodo.formData,
  error: state.editTodo.error,
  editedTodo: state.editTodo.editedTodo,
});

const mapDispatchToProps = {
  openAddModal: openAddTodoModalAction,
  closeAddModal: closeAddTodoModalAction,
  closeEditModal: closeEditTodoModalAction,
  editInputValue: editTodoInputValueAction,
  editTodo: editTodoAction,
}

export default connect(mapStatetoProps, mapDispatchToProps)(TodoList);
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import TodoListModal from "../components/TodoListForm";
import Button from "../components/UI/Button";
import Modal from "../components/UI/Modal";
import WeekList from "../components/WeekList";
import { openAddTodoModalAction, closeAddTodoModalAction } from "../redux/actions/appActions";

const TodoListElement = styled.div`
  padding: 30px 20px;
`;

function TodoList ({isOpenModal, openModal, closeModal}) {
  return(
    <TodoListElement>
      <Button style={{margin: "0 0 20px auto"}} onClick={openModal}>Создать новый Todo</Button>
      <Modal isOpenModal={isOpenModal} closeModal={closeModal}>
        <TodoListModal/>
      </Modal>
      <WeekList/>
    </TodoListElement>
  );
}

const mapStatetoProps = state => ({
  isOpenModal: state.addTodo.openModal,
});

const mapDispatchToProps = {
  openModal: openAddTodoModalAction,
  closeModal: closeAddTodoModalAction,
}

export default connect(mapStatetoProps, mapDispatchToProps)(TodoList);
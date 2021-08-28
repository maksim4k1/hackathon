import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { deleteTodoAction, setEditedTodoAction } from "../redux/actions/action";
import { openEditTodoModalAction } from "../redux/actions/appActions";
import { gap } from "../styles/mixins";
import Button from "./UI/Button";

const Item = styled.li`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  alibn-items: center;
  background: var(--main-grey);
  border-radius: 10px;
`;
const Content = styled.div`

`;
const Title = styled.h4`
  font-size: 20px;
  font-weight: 700;
`;
const Body = styled.p`
  margin: 5px 0 0;
`;
const Buttons = styled.div`
  display: flex;
  ${gap("20px")}
`;

function TodoItem ({index, id, title, body, deleteTodo, openModal, setEditedTodo}) {
  return(
    <Item>
      <Content>
        <Title>{index}. {title}</Title>
        <Body>{body}</Body>
      </Content>
      <Buttons>
        <Button style={{margin: 0, padding: "5px 15px"}} onClick={() => {openModal(); setEditedTodo(id)} }>Изменить</Button>
        <Button style={{margin: 0, padding: "5px 15px"}} onClick={() => deleteTodo(id)}>Удалить</Button>
      </Buttons>
    </Item>
  );
}

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = {
  openModal: openEditTodoModalAction,
  deleteTodo: deleteTodoAction,
  setEditedTodo: setEditedTodoAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { gap } from "../styles/mixins";
import TodoItem from "./TodoItem";

const List = styled.ul`
  margin: 30px 0 0;
  display: flex;
  flex-flow: column;
  ${gap("10px")}
`;

function Todos ({todos}) {
  return(
    <List>
      {
        todos.map((todo, index) => {
          return <TodoItem key={todo.id} index={index + 1} id={todo.id} title={todo.title} body={todo.body}/>
        })
      }
    </List>
  );
}

const mapStateToProps = state => ({
  todos: state.todolist.todos
});

export default connect(mapStateToProps)(Todos);
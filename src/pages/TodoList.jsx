import React from "react";
import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoFrom from "../components/TodoForm";
import Todos from "../components/Todos";

const TodoList = () => {
  return (
    <Paper>
      <Header />

      <TodoFrom />

      <Todos />
    </Paper>
  );
};
export default TodoList;

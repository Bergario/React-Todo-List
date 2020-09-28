import React, { useState } from "react";
import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoFrom from "../components/TodoForm";
import Todos from "../components/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "belajar" },
    { text: "memancing" },
    { text: "menyapu" },
    { text: "menggambar" },
    { text: "berkebun" }
  ]);

  const addTodo = (value) => {
    const addTextTodo = [...todos, { text: value }];

    setTodos(addTextTodo);
  };
  return (
    <Paper>
      <Header />

      <TodoFrom addTodo={addTodo} />

      <Todos todos={todos} />
    </Paper>
  );
};
export default TodoList;

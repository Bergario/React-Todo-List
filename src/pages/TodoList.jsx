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

  const [showAdd, setShowAdd] = useState(false);
  const showAddToggle = () => setShowAdd(!showAdd);

  return (
    <Paper>
      <Header showAddToggle={showAddToggle} />

      <TodoFrom addTodo={addTodo} showAdd={showAdd} />

      <Todos todos={todos} />
    </Paper>
  );
};
export default TodoList;

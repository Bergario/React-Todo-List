import React, { useState } from "react";
import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoFrom from "../components/TodoForm";
import Todos from "../components/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "belajar", isCompleted: false },
    { text: "memancing", isCompleted: false },
    { text: "menyapu", isCompleted: false },
    { text: "menggambar", isCompleted: false },
    { text: "berkebun", isCompleted: false }
  ]);

  const addTodo = (value) => {
    const addTextTodo = [...todos, { text: value, isCompleted: false }];

    setTodos(addTextTodo);
  };

  const completedTodo = (index) => {
    const addTextTodo = [...todos];
    addTextTodo[index].isCompleted = !addTextTodo[index].isCompleted;

    setTodos(addTextTodo);
  };

  const [showAdd, setShowAdd] = useState(false);
  const showAddToggle = () => setShowAdd(!showAdd);

  return (
    <Paper>
      <Header showAddToggle={showAddToggle} showAdd={showAdd} />

      <TodoFrom addTodo={addTodo} showAdd={showAdd} />

      <Todos todos={todos} completedTodo={completedTodo} />
    </Paper>
  );
};
export default TodoList;

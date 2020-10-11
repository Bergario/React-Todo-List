import React from "react";
import PropTypes from "prop-types";

const Todo = ({ text, completedTodo, index, isCompleted }) => {
  return (
    <div className="todo" onClick={() => completedTodo(index)}>
      <span
        className="todo-text"
        style={{ textDecoration: isCompleted ? "line-through" : "initial" }}
      >
        {text}
      </span>
    </div>
  );
};

Todo.PropTypes = {
  text: PropTypes.string.isRequired,
  completedTodo: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isCompleted: PropTypes.bool.isRequired
};

export default Todo;

import React from "react";
import Todo from "./Todo";
import PropTypes from "prop-types";

const Todos = ({ todos, completedTodo }) => {
  return (
    <section className="todos">
      {todos.map((e, i) => {
        return (
          <Todo
            key={i}
            text={e.text}
            completedTodo={completedTodo}
            index={i}
            isCompleted={e.isCompleted}
          />
        );
      })}
    </section>
  );
};

Todos.propTypes = {
  todo: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  ),
  completedTodo: PropTypes.func.isRequired
};

export default Todos;

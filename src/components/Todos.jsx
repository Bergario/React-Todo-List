import React from "react";
import Todo from "./Todo";
import PropTypes from "prop-types";

const Todos = ({ todos }) => {
  return (
    <section className="todos">
      {todos.map((i) => {
        return <Todo text={i.text} />;
      })}
    </section>
  );
};

Todos.propTypes = {
  todo: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  )
};

export default Todos;

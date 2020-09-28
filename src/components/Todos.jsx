import React from "react";
import Todo from "./Todo";
import PropTypes from "prop-types";

const Todos = ({ todos }) => {
  return (
    <section className="todos">
      {todos.map((e, i) => {
        return <Todo key={i} text={e.text} />;
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

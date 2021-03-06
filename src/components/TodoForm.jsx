import React, { useState } from "react";
import PropTypes from "prop-types";

const TodoForm = ({ addTodo, showAdd }) => {
  const [value, setValue] = useState("");

  const handleFormSubmit = (e) => {
    if (!value) {
      alert("Todo List is Required!");
      return;
    }
    if (value.length > 20) {
      alert("Please shorter text todo!");
      setValue("");
      return;
    }
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  if (showAdd) {
    return (
      <section className="add">
        <form action="" className="add-form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="add-input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="add-btn">Add</button>
        </form>
      </section>
    );
  } else {
    return null;
  }
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};

export default TodoForm;

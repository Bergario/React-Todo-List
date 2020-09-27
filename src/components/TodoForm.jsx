import React, { useState } from "react";
import PropTypes from "prop-types";

const TodoForm = () => {
  const [value, setValue] = useState("");

  const handleFormSubmit = (e) => {
    if (!value) {
      alert("Todo List is Required!");
      return;
    }
    e.preventDefault();
    // addTodo(value);
    alert(value);
    setValue("");
  };
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
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default TodoForm;

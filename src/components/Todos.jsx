import React from "react";
import Todo from "./Todo";

const Todos = () => {
  const todos = [
    { text: "belajar" },
    { text: "memancing" },
    { text: "menyapu" },
    { text: "menggambar" },
    { text: "berkebun" },
    { text: "berkebun" },
    { text: "berkebun" },
    { text: "berkebun" },
    { text: "berkebun" },
    { text: "berkebun" },
    { text: "berkebun" },
    { text: "berkebun" },
    { text: "berkebun" },
    { text: "berkebun" },
    { text: "berkebun" },
    { text: "berkebun" },
    { text: "berkebun" },
    { text: "berkebun" }
  ];
  return (
    <section className="todos">
      {todos.map((i) => {
        return <Todo text={i.text} />;
      })}
    </section>
  );
};

export default Todos;

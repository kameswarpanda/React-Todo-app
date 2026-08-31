import React from "react";
import TodoItem from "./TodoItem";

export default function TodoItems({ todoItems }) {
  return (
    <div className="d-flex flex-column align-items-center w-100">
      {todoItems.map((item) => (
        <TodoItem key={item.name + item.dueDate} todoDate={item.dueDate} todoName={item.name}></TodoItem>
      ))}
    </div>
  );
}
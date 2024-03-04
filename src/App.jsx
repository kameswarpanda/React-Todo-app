import React from "react";
import TodoAppName from "./components/AppName";
import TodoInput from "./components/TodoInput";
import TodoItems from "./components/TodoItems";
import "./App.css";

export default function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
    {
      name: "Do Exercise",
      dueDate: "Right now",
    },
  ];

  return (
    <center>
      <TodoAppName />
      <TodoInput />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

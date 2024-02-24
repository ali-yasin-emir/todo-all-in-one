"use client";

import { useState } from "react";

const Todo1 = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, todo];
    });
  };

  const deleteTodo = (index) => {
    todos.find((todo) => todo.index);
  };

  return (
    <div className="flex flex-col gap-6">
      <form className="flex flex-col gap-2">
        <h1 className="text-2xl">Todo App 1</h1>
        <p> (onChange & useState)</p>
      </form>
      <input
        required
        onChange={handleChange}
        className="w-fit text-black"
        type="text"
      />
      <button
        disabled={!todo}
        onClick={() => addTodo(todo)}
        className="disabled:bg-gray-400 w-fit p-2 text-white border-[1px]"
      >
        Add Todo
      </button>
      <ul className="flex flex-col gap-2 text-white">
        {todos.map((todo, index) => {
          return (
            <li
              className=" text-white flex items-center justify-between"
              key={index}
            >
              <span>{todo}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo1;

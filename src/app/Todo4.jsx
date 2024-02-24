"use client"

import { useContext } from "react";
import { TodoContext } from "./store/contexts/todo-context";

const Todo4 = () => {

    const {todo, todos, handleChange, handleAdd, handleDelete} = useContext(TodoContext)

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl">Todo App 4</h1>
        <p>(onChange & useContext
            <br/>& useReducer)</p>
      </div>
      <input
        required
        onChange={handleChange}
        className="w-fit text-black"
        type="text"
      />
      <button
        disabled={!todo}
        onClick={handleAdd}
        className="disabled:bg-gray-400 w-fit p-2 text-white border-[1px]"
      >
        Add Todo
      </button>
      <ul className="flex flex-col gap-2 text-white">
        {todos.map((todo, index) => {
          return (
            <li
              className="bg-slate-600 px-2 py-1 text-white flex items-center justify-between"
              key={index}
            >
              <span>{todo}</span>
              <span
                key={index}
                onClick={() => handleDelete(todo)}
                className="text-xs cursor-pointer"
              >
                ❌
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo4;

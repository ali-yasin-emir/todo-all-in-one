"use client";

import { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TODO":
      return {
        ...state,
        todo: action.payload,
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo !== action.payload)
      };
    default:
      return state;
  }
};

const Todo3 = () => {
  // const [todo, setTodo] = useState("");
  // const [todos, setTodos] = useState([]);

  const INITIAL_STATE = {
    todos: [],
    todo: "",
  };

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const handleChange = (e) => {
    dispatch({
      type: "SET_TODO",
      payload: e.target.value,
    });
  };

  const handleAdd = () => {
    dispatch({
      type: "ADD_TODO",
      payload: state.todo,
    });
  };

  const handleDelete = (todo) => {
    dispatch({
      type: "DELETE_TODO",
      payload: todo,
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <form className="flex flex-col gap-2">
        <h1 className="text-2xl">Todo App 3</h1>
        <p>(onChange & useState & 
          <br/>useReducer)</p>
      </form>
      <input
        required
        onChange={handleChange}
        className="w-fit text-black"
        type="text"
      />
      <button
        disabled={!state.todo}
        onClick={() => handleAdd()}
        className="disabled:bg-gray-400 w-fit p-2 text-white border-[1px]"
      >
        Add Todo
      </button>
      <ul className="flex flex-col gap-2 text-white">
        {state.todos.map((todo, index) => {
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

export default Todo3;

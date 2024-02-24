"use client";

import { useRef, useState } from "react";

const Todo2 = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const todoRef = useRef();

  const addTodo = () => {
    const enteredTodo = todoRef.current.value;
    if(enteredTodo !== ""){
      setTodo(enteredTodo);
    } else{
      return;
    }
    setTodos((prevTodos) => {
      return [...prevTodos, enteredTodo];
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl">Todo App 2</h1>
        <p> (useRef & useState)</p>
      </div>
      <input ref={todoRef} className="disabled:bg-gray-300 w-fit text-black" type="text" />
      <button onClick={addTodo} className="w-fit p-2 text-white border-[1px]">
        Add Todo
      </button>
      <ul className="flex flex-col gap-2">
        {todos.map((todo) => {
          return <li key={todo}>{todo}</li>;
        })}
      </ul>
    </div>
  );
};

export default Todo2;

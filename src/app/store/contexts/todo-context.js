"use client";

import { createContext, useReducer } from "react";
import { INITIAL_STATE } from "../reducers/todo-reducer";
import reducer from "../reducers/todo-reducer";

export const TodoContext = createContext({
  todos: [],
  todo: "",
  reducer: () => {},
  handleChange: () => {},
  handleAdd: () => {},
  handleDelete: () => {},
});

// {
//   todos: [],
//   todo: "",
//   reducer: () => {},
//   handleChange: () => {},
//   handleAdd: () => {},
//   handleDelete: () => {},
// }

const TodoContextProvider = ({ children }) => {
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

  const value = {
    todos: state.todos,
    todo: state.todo,
    reducer, // reducer: reducer
    handleChange, // handleChange
    handleAdd, // handleAdd: handleAdd
    handleDelete, // handleDelete: handleDelete
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoContextProvider;

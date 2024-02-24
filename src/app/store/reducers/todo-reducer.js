export const INITIAL_STATE = {
  todos: [],
  todo: "",
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (
    type // action.type
  ) {
    case "SET_TODO":
      return {
        ...state,
        todo: payload, // action.payload
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, payload], // action.payload
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo !== payload), // action.payload
      };
    default:
      return state;
  }
};

export default reducer;

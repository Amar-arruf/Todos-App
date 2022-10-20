export const initialState = {
  darkMode: false,
  value: "",
  todos: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLICK":
      return {
        ...state,
        darkMode: state.darkMode === false ? true : false,
      };
    case "ONKEYPRESS":
      return {
        ...state,
        value: action.payload,
      };
    case "HIT_ENTER":
      return {
        ...state,
        todos: [...state.todos, action.itemData],
        value: "",
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        todos: action.itemData,
      };
    default:
      return state;
  }
};

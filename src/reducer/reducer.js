export const initialState = {
  darkMode: false,
  value: "",
  todos: [],
  filter: {
    completed: false,
    active: false,
    all: true,
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLICK":
      return {
        ...state,
        darkMode: state.darkMode === false ? true : false,
      };
    case "FILTER_COMPLETED":
      console.log("filter completed activate");
      return {
        ...state,
        filter: {
          completed: true,
          active: false,
          all: false,
        },
      };
    case "CLEAR_ALL_COMPLETED":
      return {
        ...state,
        todos: action.dataUpdated,
      };
    case "FILTER_ACTIVE":
      console.log("filter active activate");
      return {
        ...state,
        filter: {
          completed: false,
          active: true,
          all: false,
        },
      };
    case "FILTER_ALL":
      console.log("filter all activate");
      return {
        ...state,
        filter: {
          completed: false,
          active: false,
          all: true,
        },
      };
    case "REORDER_LIST":
      console.log("reorder item success");
      return {
        ...state,
        todos: action.reorderList,
      };
    case "CHECKED_COMPLETED":
      return {
        ...state,
        todos: action.updateData,
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

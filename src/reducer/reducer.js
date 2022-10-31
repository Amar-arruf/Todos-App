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
      return {
        ...state,
        filter: {
          completed: true,
          active: false,
          all: false,
        },
      };
    case "FILTER_ACTIVE":
      return {
        ...state,
        completed: false,
        active: true,
        all: false
      }
    case "FILTER_ALL" :
      return {
        ...state,
        completed : false,
        active: false,
        all: true
      } 
    case "CHECKED_COMPLETED":
      return {
        ...state,
        todos: action.updateData
      }
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

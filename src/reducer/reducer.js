export const initialState = {
  darkMode: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "click":
      return {
        darkMode: state.darkMode === false ? true : false,
      };
    default:
      return;
  }
};

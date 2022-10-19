import React, { memo, useReducer } from "react";
import { initialState, reducer } from "../../reducer/reducer";

const Input = () => {
  const [input, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch({ type: "ONKEYPRESS", payload: value });
  };

  const handleInput = (e) => {
    e.preventDefault();
    dispatch({ type: "HIT_ENTER", itemData: input.value });
  };
  return (
    <div className="laptop:p-5 mobile:p-3 dark:bg-wrapperBackground bg-wrapper-background rounded">
      <form onSubmit={handleInput}>
        <span className="relative pr-5 before:absolute before:content-[''] before:w-[25px] before:h-[25px] before:rounded-full before:border-2 before:border-gray-200 dark:before:border-gray-600"></span>
        <input
          className="appearance-none pl-5 w-[300px] bg-transparent focus:outline-0 dark:text-white text-black border-none relative mobile: p-1"
          type="text"
          name="Input"
          placeholder="Create new a todo..."
          value={input.value}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default memo(Input);

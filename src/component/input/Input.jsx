import React, { memo } from "react";

const Input = ({ onsubmit, onchange, onvalue }) => {
  return (
    <div className="laptop:p-5 mobile:p-3 dark:bg-wrapperBackground bg-wrapper-background rounded">
      <form onSubmit={onsubmit}>
        <span className="relative pr-5 before:absolute before:content-[''] before:w-[25px] before:h-[25px] before:rounded-full before:border-2 before:border-gray-200 dark:before:border-gray-600"></span>
        <input
          className="appearance-none pl-5 w-[300px] bg-transparent focus:outline-0 dark:text-white text-black border-none relative mobile: p-1"
          type="text"
          name="Input"
          placeholder="Create new a todo..."
          value={onvalue}
          onChange={onchange}
        />
      </form>
    </div>
  );
};

export default memo(Input);

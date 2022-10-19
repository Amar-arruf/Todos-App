import React from "react";
const itemTodos = ({ myKey, title }) => {
  return (
    <div
      id={myKey}
      className="border-b-2 border-slate-600 py-5 px-5 bordetr dark:bg-wrapperBackground bg-wrapper-background"
    >
      <span className="relative pr-5 before:absolute before:content-[''] before:w-[25px] before:h-[25px] before:rounded-full before:border-2 before:border-gray-200 dark:before:border-gray-600"></span>
      <span className="appearance-none pl-5 w-[300px] bg-transparent focus:outline-0 dark:text-white text-black border-none relative mobile: p-1">
        {title}
      </span>
    </div>
  );
};

export default itemTodos;

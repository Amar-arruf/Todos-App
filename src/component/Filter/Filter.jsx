import React, { memo } from "react";

const Filter = ({ length, All, onActive, onCompleted }) => {
  return (
    <div className="w-full border-t-2 dark:border-slate-600 text-sm laptop:p-5 mobile:p-3 font-regular text-black dark:text-white absolute left-0 bottom-0 flex items-center justify-between z-30">
      <div> {length} items left</div>
      <div className="flex items-center cursor-pointer">
        <a href="#/" className="text-[#3b82f6]">
          <p>All</p>
        </a>
        <a href="#/">
          <p className="px-4">Active</p>
        </a>
        <a href="#/">
          <p>Completed</p>
        </a>
      </div>
      <div>Clear Completed</div>
    </div>
  );
};

export default memo(Filter);

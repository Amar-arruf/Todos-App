import React, { memo } from "react";

const Filter = ({ length, onCompleted }) => {
  return (
    <div className="w-full border-t-2 dark:border-slate-600 text-sm laptop:p-5 mobile:p-3 font-regular text-black dark:text-white absolute left-0 bottom-0 flex items-center justify-between z-30">
      <div> {length} items left</div>
      <div className="flex items-center cursor-pointer">
        <p className="text-[#3b82f6]">All</p>
        <p className="px-4">Active</p>
        <p onClick={onCompleted}>Completed</p>
      </div>
      <div>Clear Completed</div>
    </div>
  );
};

export default memo(Filter);

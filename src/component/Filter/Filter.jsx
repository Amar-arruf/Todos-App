import React, { memo, useEffect, useState } from "react";

const Filter = ({ length, onCompleted, onActive, onAll, onClearCompleted }) => {
  let contentDinamically;

  const [width, updatedWidth] = useState({
    matches: window.innerWidth > 1024 ? true : false,
  });

  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 1024px)");
    mediaQuery.addEventListener("change", updatedWidth);

    // this is the cleanup function to remove the listener
    return () => mediaQuery.addEventListener("change", updatedWidth);
  }, [width]);

  if (width && !width.matches) {
    contentDinamically = (
      <div className="w-full border-t-2 dark:border-slate-600 text-sm laptop:p-5 mobile:p-3 font-regular text-gray-400 dark:text-gray-500 absolute left-0 bottom-0 flex items-center justify-between z-30">
        <div className="active:text-black dark:active:text-white">
          {length} items left
        </div>
        <div
          className="active:text-black dark:active:text-white cursor-pointer"
          onClick={onClearCompleted}
        >
          Clear Completed
        </div>
      </div>
    );
  } else {
    contentDinamically = (
      <div className="w-full border-t-2 dark:border-slate-600 text-sm laptop:p-5 mobile:p-3 text-gray-400 dark:text-gray-500 absolute left-0 bottom-0 flex items-center justify-between z-30 text-sm">
        <div className="active:text-black dark:active:text-white">
          {length} items left
        </div>
        <div className="flex items-center cursor-pointer">
          <p onClick={onAll} className={"text-[#3b82f6]"}>
            All
          </p>
          <p
            onClick={onActive}
            className="px-4 active:text-black dark:active:text-white"
          >
            Active
          </p>
          <p
            onClick={onCompleted}
            className="active:text-black dark:active:text-white"
          >
            Completed
          </p>
        </div>
        <div
          className="active:text-black dark:active:text-white cursor-pointer"
          onClick={onClearCompleted}
        >
          Clear Completed
        </div>
      </div>
    );
  }

  return contentDinamically;
};

export default memo(Filter);

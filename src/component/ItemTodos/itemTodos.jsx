import React, { memo } from "react";

const ItemTodos = (props) => {
  let checkedICon;

  if (props.checked === true) {
    checkedICon = (
      <div className="h-[26px] w-[26px] px-[8px] py-[8px] bg-activeChecked rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25">
          <path
            fill="none"
            fillRule=""
            stroke="#FFF"
            strokeWidth="evenodd"
            d="M1 4.304L3.696 7l6-6"
          />
        </svg>
      </div>
    );
  } else {
    checkedICon = "";
  }

  return (
    <div
      id={props.myKey}
      className="border-b-2 dark:border-slate-600 border-gray-200 py-3 laptop:px-5 mobile:px-3 dark:bg-wrapperBackground bg-wrapper-background flex justify-between"
    >
      <div
        className="relative h-[30px] w-[30px] mobile: w-[30px]  border-2 dark:border-slate-600 rounded-full"
        onClick={props.click.bind(this, props.myKey)}
      >
        {checkedICon}
      </div>
      <span className=" justify-contappearance-none pl-5 w-[300px] bg-transparent focus:outline-0 dark:text-white text-black border-none relative mobile: p-1">
        <div
          className={props.checked === true ? "line-through text-gray-400" : ""}
        >
          {props.title}
        </div>
      </span>
      <div
        className="px-2 py-2 grow cursor:pointe"
        onClick={props.onRemove.bind(this, props.myKey)}
      >
        <svg
          className="ml-auto "
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
        >
          <path
            fill="gray"
            strokeWidth="2"
            fillRule="evenodd"
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default memo(ItemTodos);

import React, { memo } from "react";
import "./todowrapper.css";

function todoWrapper(props) {
  return (
    <div className="w-full laptop:mt-10 mobile:mt-5 bg-wrapper-background dark:bg-wrapperBackground  rounded h-[400px] overflow-y-scroll">
      {props.children}
    </div>
  );
}

export default memo(todoWrapper);

import React, { memo } from "react";

const Container = (props) => {
  return (
    <div className="laptop:w-600 mobile:w-full mx-auto laptop:pt-14 mobile:px-5 pt-10">
      {props.children}
    </div>
  );
};

export default memo(Container);

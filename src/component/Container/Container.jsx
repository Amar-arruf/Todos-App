import React, { memo } from "react";

const Container = (props) => {
  return (
    <div className="laptop:w-600 mobile:w-full mx-auto laptop:py-14 mobile:px-5 py-10">
      {props.children}
    </div>
  );
};

export default memo(Container);

import React, { memo } from "react";
import ItemTodos from "../ItemTodos/itemTodos";

const Todoslist = ({ data, handleRemove, handleListCompleted }) => {
  return (
    <div>
      {data.map((item, index) => {
        return (
          <ItemTodos
            title={item.text}
            myKey={index}
            key={item.id}
            onRemove={handleRemove}
            checked={item.completed}
            click={handleListCompleted}
          />
        );
      })}
    </div>
  );
};

export default memo(Todoslist);

import React, { memo } from "react";
import ItemTodos from "../ItemTodos/itemTodos";
import { Draggable } from "react-beautiful-dnd";

const Todoslist = ({
  data,
  handleRemove,
  handleListCompleted,
  Ref,
  Droppable,
  placeholder,
}) => {
  return (
    <div ref={Ref} {...Droppable}>
      {data.map((item, index) => {
        return (
          <Draggable key={item.id} draggableId={String(item.id)} index={index}>
            {(provided) => (
              <ItemTodos
                Ref={provided.innerRef}
                Draggable={{ ...provided.draggableProps }}
                dragHandler={{ ...provided.dragHandleProps }}
                title={item.text}
                myKey={index}
                key={item.id}
                onRemove={handleRemove}
                checked={item.completed}
                click={handleListCompleted}
              />
            )}
          </Draggable>
        );
      })}
      {placeholder}
    </div>
  );
};

export default memo(Todoslist);

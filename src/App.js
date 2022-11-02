import { useCallback, useReducer, useEffect, useState } from "react";
import Container from "./component/Container/Container";
import Filter from "./component/Filter/Filter";
import Input from "./component/input/Input";
import Title from "./component/Title/Title";
import Todoslist from "./component/TodosList/todosList";
import TodoWrapper from "./component/todoWrapper/todoWrapper";
import { initialState, reducer } from "./reducer/reducer";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

function App() {
  let newData;
  let mobileContenFilter;
  const [state, dispatch] = useReducer(reducer, initialState);
  const [mobileFilter, setIsMobileFilter] = useState({
    matches: window.innerWidth > 1024 ? true : false,
  });

  const handleInput = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({
        type: "HIT_ENTER",
        itemData: {
          id: Number(Date.now()),
          text: state.value,
          completed: false,
        },
      });
    },
    [state]
  );

  const handleChange = useCallback((e) => {
    const value = e.target.value;
    dispatch({ type: "ONKEYPRESS", payload: value });
  }, []);

  const handleRemoveItem = useCallback(
    (myKey) => {
      const todos = state.todos.filter((item) => {
        return state.todos.indexOf(item) !== myKey;
      });
      dispatch({ type: "REMOVE_ITEM", itemData: todos });
    },
    [state]
  );

  const handleListCompleted = useCallback(
    (myKey) => {
      state.todos[myKey].completed =
        state.todos[myKey].completed === false ? true : false;
      dispatch({ type: "CHECKED_COMPLETED", updateData: state.todos });
    },
    [state]
  );

  const handlerClearCompleted = useCallback(() => {
    let a = [...state.todos];
    let b = a.filter((item) => item.completed === true);
    b.forEach((f) =>
      a.splice(
        a.findIndex((e) => e.completed === f.completed),
        1
      )
    );
    console.log(a);
    dispatch({ type: "CLEAR_ALL_COMPLETED", dataUpdated: a });
  }, [state]);

  const handlerFilterCompleted = () => {
    dispatch({ type: "FILTER_COMPLETED" });
  };

  const handlerFilterActive = () => {
    dispatch({ type: "FILTER_ACTIVE" });
  };

  const handlerFilterAll = () => {
    dispatch({ type: "FILTER_ALL" });
  };

  if (state.filter.completed === true) {
    newData = state.todos.filter((newVal) => {
      return newVal.completed === true;
    });
  } else if (state.filter.active === true) {
    newData = state.todos.filter((newVal) => {
      return newVal.completed === false;
    });
  } else {
    newData = state.todos;
  }

  let newLength = newData.filter((item) => item.completed === true).length;

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const item = [...newData];
    const [reorderItem] = item.splice(result.source.index, 1);
    item.splice(result.destination.index, 0, reorderItem);

    newData = item;
  };

  // mobileFilterContent
  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 1024px)");
    mediaQuery.addEventListener("change", setIsMobileFilter);

    // this is the cleanup function to remove the listener
    return () => mediaQuery.addEventListener("change", setIsMobileFilter);
  }, [mobileFilter]);

  if (mobileFilter && mobileFilter.matches === true) {
    mobileContenFilter = null;
  } else {
    mobileContenFilter = (
      <div className="flex items-center cursor-pointer my-3 p-4 justify-center rounded bg-wrapper-background dark:bg-wrapperBackground text-gray-400 dark:text-gray-500 text-sm">
        <p onClick={handlerFilterAll} className={"text-[#3b82f6]"}>
          All
        </p>
        <p
          onClick={handlerFilterActive}
          className="px-4 active:text-black dark:active:text-white"
        >
          Active
        </p>
        <p
          onClick={handlerFilterCompleted}
          className="active:text-black dark:active:text-white"
        >
          Completed
        </p>
      </div>
    );
  }

  return (
    <div className="bg-secondBackground dark:bg-mainBackground text-regular font-josefin">
      <div className="h-full laptop:bg-hero-light laptop:dark:bg-hero-dark mobile:dark:bg-hero-mobile-dark mobile:bg-hero-mobile-light bg-no-repeat bg-contain ">
        <Container>
          <Title />
          <Input
            onsubmit={handleInput}
            onvalue={state.value}
            onchange={handleChange}
          />
          <TodoWrapper>
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="item">
                {(provided) => (
                  <Todoslist
                    Droppable={{ ...provided.droppableProps }}
                    Ref={provided.innerRef}
                    placeholder={provided.placeholder}
                    data={newData}
                    handleRemove={handleRemoveItem}
                    handleListCompleted={handleListCompleted}
                  />
                )}
              </Droppable>
            </DragDropContext>
            <Filter
              length={
                state.filter.completed === true
                  ? newData.length
                  : newData.length - newLength
              }
              onCompleted={handlerFilterCompleted}
              onActive={handlerFilterActive}
              onAll={handlerFilterAll}
              onClearCompleted={handlerClearCompleted}
            />
          </TodoWrapper>
          {mobileContenFilter}
        </Container>
      </div>
      <p className=" py-5 mt-7 text-gray-400 dark:text-gray-600 text-center bg-secondBackground dark:bg-mainBackground">
        drag and drop to reorder list
      </p>
    </div>
  );
}

export default App;

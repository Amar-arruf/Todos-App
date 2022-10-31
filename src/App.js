import { useCallback, useReducer } from "react";
import Container from "./component/Container/Container";
import Filter from "./component/Filter/Filter";
import Input from "./component/input/Input";
import ItemTodos from "./component/ItemTodos/itemTodos";
import Title from "./component/Title/Title";
import TodoWrapper from "./component/todoWrapper/todoWrapper";
import { initialState, reducer } from "./reducer/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  var todosList;
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

  todosList = state.todos.map((item, index) => {
    return (
      <ItemTodos
        title={item.text}
        myKey={index}
        key={item.id}
        onRemove={handleRemoveItem}
        checked={item.completed}
        click={handleListCompleted}
      />
    );
  });

  const handlerFilterCompleted = () => {
    if (state.filter.completed === true) {
      const completed = state.todos.filter((item) => item.completed === true);
      console.log(completed);
      todosList = "";
    } else {
      return todosList;
    }
  };

  return (
    <div className="bg-secondBackground dark:bg-mainBackground text-regular font-josefin">
      <div className="h-screen laptop:bg-hero-light laptop:dark:bg-hero-dark mobile:dark:bg-hero-mobile-dark mobile:bg-hero-mobile-light bg-no-repeat bg-contain">
        <Container>
          <Title />
          <Input
            onsubmit={handleInput}
            onvalue={state.value}
            onchange={handleChange}
          />
          <TodoWrapper>
            {todosList}
            <Filter
              length={state.todos.length}
              onCompleted={handlerFilterCompleted}
            />
          </TodoWrapper>
        </Container>
      </div>
    </div>
  );
}

export default App;

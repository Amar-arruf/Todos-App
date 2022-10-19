import { useReducer } from "react";
import Container from "./component/Container/Container";
import Input from "./component/input/Input";
import ItemTodos from "./component/ItemTodos/itemTodos";
import Title from "./component/Title/Title";
import TodoWrapper from "./component/todoWrapper/todoWrapper";
import { initialState, reducer } from "./reducer/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInput = (e) => {
    e.preventDefault();
    dispatch({ type: "HIT_ENTER", itemData: state.value });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch({ type: "ONKEYPRESS", payload: value });
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
            {state.todos.map((item, index) => {
              return (
                <ItemTodos title={item} myKey={parseInt(index)} key={index} />
              );
            })}
          </TodoWrapper>
        </Container>
      </div>
    </div>
  );
}

export default App;

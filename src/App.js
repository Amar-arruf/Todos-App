import Container from "./component/Container/Container";
import Title from "./component/Title/Title";

function App() {
  return (
    <div className="bg-secondBackground dark:bg-mainBackground text-regular font-josefin">
      <div className="h-screen laptop:bg-hero-light laptop:dark:bg-hero-dark mobile:dark:bg-hero-mobile-dark mobile:bg-hero-mobile-light bg-no-repeat bg-contain">
        <Container>
          <Title />
        </Container>
      </div>
    </div>
  );
}

export default App;

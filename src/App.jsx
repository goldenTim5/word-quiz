import Home from "./components/Home";
import Keyboard from "./components/Keyboard";
import Speech from "./components/Speech";

function App() {
  return (
    <>
      <Home></Home>
      <Speech />
      <Keyboard correctLetter={"A"} />
    </>
  );
}

export default App;

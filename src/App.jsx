import "./App.css";
import { Hero } from "./components";
import { heroapi } from "./data/data";

function App() {
  return (
    <>
      <Hero heroapi={heroapi} />
    </>
  );
}

export default App;

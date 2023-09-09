import "./App.css";
import { Hero } from "./components";
import Popular from "./components/Popular";
import { heroapi } from "./data/data";

function App() {
  return (
    <>
      <Hero heroapi={heroapi} />
      <Popular />
    </>
  );
}

export default App;

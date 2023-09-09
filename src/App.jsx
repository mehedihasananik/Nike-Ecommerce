import "./App.css";
import { Hero } from "./components";
import Popular from "./components/Popular";
import { heroapi, popularsales, toprateslaes } from "./data/data";

function App() {
  return (
    <>
      <Hero heroapi={heroapi} />
      <Popular endPoint={popularsales} />
      <Popular endPoint={toprateslaes} />
    </>
  );
}

export default App;

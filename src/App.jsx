import "./App.css";
import { Hero } from "./components";
import Popular from "./components/Popular";
import { heroapi, popularsales, toprateslaes } from "./data/data";

function App() {
  return (
    <div className="overflow-hidden ">
      <Hero heroapi={heroapi} />
      <Popular endPoint={popularsales} ifExists />
      <Popular endPoint={toprateslaes} />
    </div>
  );
}

export default App;

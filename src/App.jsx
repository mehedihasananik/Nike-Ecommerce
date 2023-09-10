import "./App.css";
import { Hero, Popular, HighLight, Stories, Footer } from "./components";

import {
  heroapi,
  popularsales,
  toprateslaes,
  highlight,
  sneaker,
  story,
  footerAPI,
} from "./data/data";

function App() {
  return (
    <div className="overflow-hidden flex flex-col gap-7 md:gap-14 ">
      <Hero heroapi={heroapi} />
      <Popular endPoint={popularsales} ifExists />
      <HighLight endPoint={highlight} ifExists />
      <Popular endPoint={toprateslaes} />
      <HighLight endPoint={sneaker} />
      <Stories story={story} />
      <Footer footerAPI={footerAPI} />
    </div>
  );
}

export default App;

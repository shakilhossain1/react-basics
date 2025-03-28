import "./App.css";
import Navbar from "./Navbar";
import HelloWorld from "./HelloWorld";
import Footer from "./Footer";

import { useState } from "react";

function App() {
  const [number, setNumber] = useState(60);

  function handleClick() {
    setNumber(number + 1);
  }

  return (
    <>
      <Navbar />
      <HelloWorld />

      <div>{number}</div> <br />

      <button onClick={handleClick}>click me</button>

      <Footer />
    </>
  );
}

export default App;

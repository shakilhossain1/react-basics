import "./App.css";
import Navbar from "./Navbar";
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
      <h1>Hello </h1>

      <div>{number}</div> <br />

      <button onClick={handleClick}>click me</button>

      <Footer />
    </>
  );
}

export default App;

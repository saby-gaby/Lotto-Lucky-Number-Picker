import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Numbers from "./components/Numbers/Numbers";
import randomNums from "./randomNums";

function App(props) {
  const [getNumbers, setNumbers] = useState([]);
  // console.log(getNumbers);

  const clickHandler = () => {
    setNumbers(randomNums());
  };

  const reset = () => {
    setNumbers([]);
  };

  return (
    <div className="App">
      <Header />
      {getNumbers.length !== 0 && <Numbers />}

      <div className="btn">
        <button onClick={reset}>Reset</button>
        <button onClick={clickHandler}>Show me lucky Numbers</button>
      </div>
    </div>
  );
}

export default App;

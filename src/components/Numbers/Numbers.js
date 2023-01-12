import React from "react";
import "./Numbers.css";
import randomNums from "../../randomNums.js";

const Numbers = (props) => {
  const numbers = randomNums();
  return (
    <div className="numContainer">
      {numbers.map((num, i) => {
        return (
          <div className="num" key={i}>
            {num}
          </div>
        );
      })}
    </div>
  );
};

export default Numbers;

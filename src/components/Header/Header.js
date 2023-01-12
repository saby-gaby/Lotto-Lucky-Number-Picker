import React from "react";
import "./Header.css";

const Header = ({getNumbers}) => {
  return (
    <div className="header">
      <h1>Lotto 6 / 49</h1>
      {!getNumbers &&<p>Click on the button bellow to generate your lucky numbers</p>}
    </div>
  );
};

export default Header;

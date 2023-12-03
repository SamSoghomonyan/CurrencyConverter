import React from "react";
import "./style.css";
import Rates from "../Rates";
function Header({ rates }) {
  return (
    <div className="header">
      <div className="container">
        <Rates rates={rates} />
      </div>
    </div>
  );
}

export default Header;

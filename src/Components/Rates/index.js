import React from "react";
import "./style.css";
function Rates({ rates }) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>....</th>
            <th>USD</th>
            <th>EUR</th>
            <th>UAH</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>USD</td>
            <td>1</td>
            <td>{rates.EUR}</td>
            <td>{rates.UAH}</td>
          </tr>
          <tr>
            <td>EUR</td>
            <td>1.09</td>
            <td>1</td>
            <td>39.65</td>
          </tr>
          <tr>
            <td>UAH</td>
            <td>0.027</td>
            <td>0.025</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Rates;

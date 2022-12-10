import React from "react";
import "./CurrentData.css";

export default function CurrentData() {
  return (
    <div className="CurrentData">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Saturday, 10 december</h5>
            <h5>12:45</h5>
          </div>
          <div className="col-md-4">
            <h5>Snowing</h5>
            <h5>img</h5>
          </div>
          <div className="col-md-4">
            <h5>Humidity</h5>
            <h5>Wind</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

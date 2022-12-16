import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <ul>
              <li>Saturday</li>
              <li>Sunday</li>
              <li>Monday</li>
              <li>Tuesday</li>
              <li>Wednesday</li>
              <li>Thursday</li>
            </ul>
          </div>
          <div className="col-4">
            <ul>
              <li>-3C...+3C </li>
              <li>-3C...+3C </li>
              <li>-3C...+3C </li>
              <li>-3C...+3C </li>
              <li>-3C...+3C </li>
              <li>-3C...+3C </li>
            </ul>
          </div>
          <div className="col-4">
            <ul>
              <li>snow </li>
              <li>snow </li>
              <li>snow </li>
              <li>snow </li>
              <li> snow</li>
              <li>snow </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

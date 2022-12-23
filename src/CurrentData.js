import React from "react";

import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./CurrentData.css";

export default function CurrentData(props) {
  return (
    <div className="CurrentData">
      <h1>{props.data.city}</h1>
      <h2>
        <FormattedDate date={props.data.date} />
      </h2>
      <h3 className="text-capitalize">{props.data.description}</h3>
      <div className="overview d-inline-flex">
        <WeatherIcon code={props.data.icon} />
        <span className="temperature">
          {Math.round(props.data.temperature)}
        </span>
        <span className="unit">°C</span>
      </div>

      <ul>
        <li>{props.data.humidity}%</li>
        <li>{Math.round(props.data.wind)}m/h</li>
      </ul>
    </div>
  );
}

import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }

  return (
    <div className="ForecastDay">
      <div className="row">
        <div className="col-4">
          <div className="forecast-day">{day()}</div>
        </div>
        <div className="col-5">
          <div className="forecast-temperature">
            <span className="forecast-temperature-max">
              {maxTemperature()}°C
            </span>
            <span className="forecast-temperature-min">
              {" "}
              {minTemperature()}°C
            </span>
          </div>
        </div>
        <div className="col-3">
          <div className="forecast-icon d-flex">
            <WeatherIcon code={props.data.weather[0].icon} size={32} />
          </div>
        </div>
      </div>
    </div>
  );
}

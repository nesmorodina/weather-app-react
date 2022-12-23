import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
  }
  if (loaded) {
    let apiKey = "854825cbb885ded52dd50cc86b8fc7e7";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  } else {
    return (
      <div className="Forecast">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="forecast-day">Saturday</div>
            </div>
            <div className="col-5">
              <div className="forecast-temperature">
                <span className="forecast-temperature-max">+3°C</span>
                <span className="forecast-temperature-min">-3°C</span>
              </div>
            </div>
            <div className="col-3">
              <div className="forecast-icon d-flex">
                <WeatherIcon code="01d" size={32} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

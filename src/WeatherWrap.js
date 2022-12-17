import React, { useState } from "react";
import axios from "axios";
import "./WeatherWrap.css";

export default function WeatherWrap() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });

    setReady(true);
  }

  if (ready) {
    return (
      <div className="WeatherWrap">
        <div className="conteiner">
          <div className="row">
            <div className="col-md-6">
              <div className="searchForm">
                <form>
                  <input
                    type="search"
                    placeholder="Search city..."
                    className="search"
                    autocomplete="off"
                  />
                  <button type="button" className="btn btn-light">
                    Search
                  </button>
                </form>
              </div>

              <div className="currentData">
                <h1>Lublin</h1>
                <h2>
                  <span className="date">date</span>{" "}
                  <span className="time">
                    {" "}
                    <strong>15:00</strong>{" "}
                  </span>
                </h2>
                <h3 className="text-capitalize">{weatherData.description}</h3>
                <div className="overview">
                  <img
                    src=""
                    alt={weatherData.description}
                    className="float-left"
                  />
                  <span className="temperature">
                    {Math.round(weatherData.temperature)}
                  </span>
                  <span className="unit">°C</span>
                </div>

                <ul>
                  <li>{weatherData.humidity}%</li>
                  <li>{Math.round(weatherData.wind)}m/h</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "854825cbb885ded52dd50cc86b8fc7e7";
    let city = "Lublin";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}

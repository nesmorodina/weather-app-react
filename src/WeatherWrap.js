import React, { useState } from "react";
import axios from "axios";
import "./WeatherWrap.css";
import CurrentData from "./CurrentData";

export default function WeatherWrap(props) {
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState(props.defaultCity);

  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });

    setReady(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    const apiKey = "854825cbb885ded52dd50cc86b8fc7e7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="WeatherWrap">
        <div className="conteiner">
          <div className="row">
            <div className="col-md-6">
              <div className="searchForm">
                <form onSubmit={handleSubmit}>
                  <input
                    type="search"
                    placeholder="Search city..."
                    className="search"
                    autocomplete="off"
                    onChange={handleCityChange}
                  />
                  <button type="button" className="btn btn-light">
                    Search
                  </button>
                </form>
              </div>
              <CurrentData data={weatherData} />
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

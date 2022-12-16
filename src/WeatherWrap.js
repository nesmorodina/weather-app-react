import React from "react";
import "./WeatherWrap.css";
import SearchForm from "./SearchForm";
import CurrentData from "./CurrentData";
import Forecast from "./Forecast";

export default function WeatherWrap() {
  return (
    <div className="WeatherWrap">
      <div className="conteiner">
        <SearchForm />
        <div className="row">
          <div className="col-md-6">
            <h1>Lublin</h1>
            <CurrentData />
          </div>
          <div className="col-md-6">
            <Forecast />
          </div>
        </div>
      </div>
    </div>
  );
}

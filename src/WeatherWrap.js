import React from "react";
import "./WeatherWrap.css";
import SearchForm from "./SearchForm";
import CurrentData from "./CurrentData";
import Forecast from "./Forecast";

export default function WeatherWrap() {
  return (
    <div className="WeatherWrap">
      <div className="conteiner">
        <div className="row">
          <div className="col-md-3">
            <h1>Lublin</h1>
          </div>

          <div className="col-md-9">
            <SearchForm />
          </div>
          <CurrentData />
          <Forecast />
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./Search.css";
import Weather from "./Weather.js";
import Forecast from "./Forecast.js";

export default function Search() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
      coords: response.data.coordinates,
    });
  }

  function searchCity(event) {
    event.preventDefault();
    let apiKey = "f08a6a7fd3e944f30od1c4cc4b5b3tf6";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={searchCity}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Type a city..."
            class="form-control"
            onChange={updateCity}
          ></input>
        </div>
        <div className="col-3">
          <input type="submit" value="Search" class="btn btn-primary"></input>
        </div>
      </div>
    </form>
  );

  if (loaded) {
    return (
      <div className="container">
        {form}
        <Weather data={weather} />
        <Forecast coords={weather.coords} />
      </div>
    );
  } else {
    return form;
  }
}

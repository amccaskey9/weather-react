import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./Search.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function searchCity(event) {
    event.preventDefault();
    let apiKey = "2b6fdad0cbd018949c50c70f72250726";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={searchCity}>
      <input
        type="search"
        placeholder="Type a city..."
        onChange={updateCity}
      ></input>
      <button class="btn btn-primary" type="submit">
        Search
      </button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <h3>{city}</h3>
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°F</li>
          <li>Description: {weather.description}</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
          <li>Humidity: {Math.round(weather.humidity)}%</li>
          <li>Wind Speed: {Math.round(weather.wind)} mph</li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}

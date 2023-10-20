import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastData from "./ForecastData.js";

export default function Forecast(props) {
  const [forecast, setForecast] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function displayForecast(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }

  let apiKey = "f08a6a7fd3e944f30od1c4cc4b5b3tf6";
  let lat = props.coords.latitude;
  let lon = props.coords.longitude;
  let forecastUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=imperial`;

  axios.get(forecastUrl).then(displayForecast);

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastData data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}

import React from "react";

export default function ForecastData(props) {
  console.log(props);

  let weathericon = props.data.condition.icon_url;
  let description = props.data.condition.description;

  function max() {
    let max_temp = Math.round(props.data.temperature.maximum);

    return `${max_temp}°`;
  }

  function min() {
    let min_temp = Math.round(props.data.temperature.minimum);

    return `${min_temp}°`;
  }

  function Day() {
    let date = new Date(props.data.time * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = date.getDay();

    return days[day];
  }

  return (
    <div>
      <div className="Forecast-day">{Day()}</div>
      <div claassName="Forecast-icon">
        <img src={weathericon} alt={description}></img>
      </div>
      <div className="Forecast-temps">
        <span className="Forecast-max">{max()}</span> |{" "}
        <span className="Forecast-min">{min()}</span>
      </div>
    </div>
  );
}

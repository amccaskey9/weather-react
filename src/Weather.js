import React from "react";
import Date from "./Date.js";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6">
          <h1 className="text-capitalize">{props.data.city}</h1>
        </div>
        <div className="col">
          <Date date={props.data.date} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ul>
            <div className="flex-row">
              <li>{Math.round(props.data.temperature)}°F</li>
              <li className="text-capitalize">{props.data.description}</li>
            </div>
          </ul>
        </div>
        <div className="col">
          <li>
            <img src={props.data.icon} alt={props.data.description} />
          </li>
        </div>
      </div>
      <div className="row">
        <ul>
          <li>Humidity: {Math.round(props.data.humidity)}%</li>
          <li>Wind Speed: {Math.round(props.data.wind)} mph</li>
        </ul>
      </div>
    </div>
  );
}

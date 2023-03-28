import React, { useState } from "react";
import axios from "axios";
import { MagnifyingGlass } from "react-loader-spinner";

export default function Weather() {
  let [city, setCity] = useState("");
  let [info, setInfo] = useState({});
  const [loaded, setLoaded] = useState(false);

  function Weather(response) {
    setLoaded(true);
    setInfo({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "7e977d5c64e3857ddc3fd8233d003772";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(Weather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Type a city" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}

        <ul>
          <li>Temperature: {Math.round(info.temperature)}°C</li>
          <li>Description: {info.description}</li>
          <li>Humidity: {info.humidity}%</li>
          <li>Wind: {info.wind}km/h</li>
          <li>
            <img src={info.icon} alt={info.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        {" "}
        {form}
        <MagnifyingGlass
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="progress-bar-wrapper"
          glassColor="#c0efff"
          color="#313f4b"
          timeout={3000}
        />
      </div>
    );
  }
}

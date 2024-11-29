import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [city, setCity] = useState("Toronto");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const API_KEY = "1345d30246c94db5d8065c87f22bfe4a"; 


  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        setWeather(response.data);
        setError(null);
      } catch (err) {
        setError("City not found. Please try again.");
        setWeather(null);
      }
    };

    fetchWeather();
  }, [city]);

 
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputCity = e.target.city.value.trim();
    if (inputCity) {
      setCity(inputCity);
    }
  };

  return (
    <div className="container" style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="city"
            className="form-control"
            placeholder="Enter city"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Search
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div className="mt-4">
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
        </div>
      )}
    </div>
  );
};

export default App;

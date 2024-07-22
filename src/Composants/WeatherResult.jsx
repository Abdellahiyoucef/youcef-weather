import React from 'react';

const WeatherResult = ({ weather }) => {
  if (!weather) {
    return null;
  }

  return (
    <div>
      <h3>Weather in {weather.name}</h3>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Condition: {weather.weather[0].description}</p>
    </div>
  );
};

export default WeatherResult;

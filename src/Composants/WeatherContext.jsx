import React, { createContext, useState } from 'react';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);

  return (
    <WeatherContext.Provider value={{ weather, setWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};
//WeatherProvider est un composant fonctionnel qui prend children comme propriété 
//destructurée. Les children sont les composants imbriqués dans ce fournisseur de contexte.
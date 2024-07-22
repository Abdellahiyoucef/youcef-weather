import React, { useState } from 'react';

const WeatherForm = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();//empache lactualisation de la page
    onSearch(city);//est une fonction qui est passée en tant que prop au composant 
                                                                     //WeatherForm. 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={city} 
        onChange={(e) => setCity(e.target.value)} //: Un gestionnaire d'événements qui //
        //met à jour l'état city à chaque changement dans le champ de saisie.
        placeholder="Enter city" 
      />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default WeatherForm;

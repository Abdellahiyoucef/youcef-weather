// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Composants/Header';
import Nav from './Composants/Nav';
import Section from './Composants/Section';
import Footer from './Composants/Footer';
import WeatherForm from './Composants/WeatherForm';
import WeatherResult from './Composants/WeatherResult';
import axios from 'axios';

const App = () => {
  const [weather, setWeather] = useState(null);

  const handleSearch = (city) => {
    const apiKey = '38c08c590e90844c701aeda9823a5f64';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    axios.get(url)
      .then(response => {
        setWeather(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données météo:', error);
      });
  };

  useEffect(() => {
    // Ville par défaut
    const defaultCity = 'Paris';
    handleSearch(defaultCity);
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <Nav />
        <Section>
          <Routes>
            <Route path="/" element={<><WeatherForm onSearch={handleSearch} /><WeatherResult weather={weather} /></>} />
            <Route path="/about" element={<p>About this app: as part of preparation for our react module exam and to master the knowledge acquired in the lessons in practice we prepared a metio application which gives the metio information of each region in the world we use several react techniques which taught us with note excellent teacher Ms. Benayiache such as the hoock the routs the props the axsios the api....</p>} />
          </Routes>
        </Section>
        <></>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

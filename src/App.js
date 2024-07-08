import React from 'react';
import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>Weather App</h1>
      
      <Weather defaultCity="New York" />
      <footer>
        This project was coded by&nbsp;
        <a href="https://nadika.name/index.html" target="_blank">Nadika</a> and is <a href="https://github.com/nadika-zavodovska/forecast-app-react" target="_blank"> open-sourced on GitHub</a>
      </footer>
      </div>
    </div>
  );
}


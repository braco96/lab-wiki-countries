import logo from "./logo.svg";
import "./App.css";
// Components used throughout the app
import NavBar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
// React hooks to handle state and effects
import { useEffect, useState } from "react";
// React Router's components to define routes
import { Routes, Route } from "react-router-dom";
// Static data containing all countries
import countriesData from "./countries.json";

function App() {
  // Store the list of countries in the component state
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Load the country data once when the component mounts
    setCountries(countriesData);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/* Navigation bar on top */}
      <NavBar />

      <div className="container">
        <div className="row">
          {/* Left column with the list of countries */}
          <CountriesList countries={countries} />
          {/* Right column switches content based on the route */}
          <Routes>
            <Route
              path="/:countryId"
              element={<CountryDetails countries={countries} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

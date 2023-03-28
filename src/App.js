import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
      </header>
      <footer>
        {" "}
        Created by Sarah Nafice and is an
        <a
          href="https://github.com/SarahShecodes/weather-app-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Open-source code
        </a>{" "}
      </footer>
    </div>
  );
}

export default App;

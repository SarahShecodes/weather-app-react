import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
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
    </div>
  );
}

import "./App.css";
import WeatherWrap from "./WeatherWrap";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherWrap defaultCity="Lublin" />
        <footer>
          This project was coded by Olga Neskorodiana and is{" "}
          <a
            href="https://github.com/nesmorodina/weather-app-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://neon-cucurucho-e418b1.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

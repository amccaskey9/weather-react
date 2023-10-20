import "./App.css";
import Search from "./Search.js";

function App() {
  return (
    <div className="App">
      <Search />
      <footer>
        <p>
          This project was coded by Aiyana McCaskey and is open-sourced on{" "}
          <a
            href="https://github.com/amccaskey9/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          and hosted on{" "}
          <a
            href="https://marvelous-licorice-80709c.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
          .
        </p>
      </footer>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { LogoImage } from "./components/Image";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LogoImage logo={logo} alt="my logo" />
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
    </div>
  );
}

export default App;


import './App.css';
import {Navbar} from "./components/Nav/Navbar.js";
import {Nameapp} from "./utils/constantes.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav>
        <img src="\images\logo.jpg" className="App-logo" alt="logo" />
        <div><Navbar/></div>
      </nav>
        <p>
          holas
        </p>
        <h1>{Nameapp}</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
      <div><Navbar/></div>
      

    </div>
  );
}

export default App;

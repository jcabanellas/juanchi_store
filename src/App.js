
import './App.css';
import {Navbar} from "./components/Nav/Navbar.js";
import {Nameapp} from "./utils/constantes.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container-fluid">
          <div className="row">
            <img src="\images\logo.jpg" className="App-logo col col-md-3" alt="logo" />
            <h1 className="col col-md-3">{Nameapp}</h1>
            <Navbar className="col col-md-3"></Navbar>
          </div>
        </div>
       
        
        
        
      </header>
      
      
      

    </div>
  );
}

export default App;

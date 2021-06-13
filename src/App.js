
import './App.css';
import {Navbar} from "./components/Nav/Navbar.js";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container-fluid">
          <div className="row">
            <img src="\images\logo.jpg" className="App-logo col col-md-3" alt="logo" />
            
            <div className="col col-md-6"><Navbar ></Navbar></div>
          
          </div>
        </div>
       
        
        
        
      </header>
      
      
      

    </div>
  );
}

export default App;

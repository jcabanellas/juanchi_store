
import './App.css';

import { HomeContainer } from './containers/Home/Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import { Navbar } from './components/Nav/Navbar';
import ItemDetailContainer from './containers/ItemDetail/ItemDetailContainer';


function App() {
  
 
  return (
    <BrowserRouter>
      <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/detalle" component={ItemDetailContainer}/>
          
        
        </Switch>
    </BrowserRouter>
  );
}

export default App;

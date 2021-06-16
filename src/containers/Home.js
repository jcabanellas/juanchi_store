import React from 'react'

import { Navbar } from '../components/Nav/Navbar.js';
import { ItemList} from '../components/ItemList/ItemList.js';


export const HomeContainer = () => {
    
    return (
        <div>
    
            <div className="App">
                <header className="App-header">
                    <div className="container-fluid">
                        <div className="row">
                
                
                            <div className="col col-md-12"><Navbar ></Navbar></div>
                            <ItemList entrega={"entrega 24 hs"}></ItemList>

                
                        </div>
                        </div>
                </header>

            <div>
            
              
        </div>
      
      
      

    </div>
           
            
        </div>
    )
};



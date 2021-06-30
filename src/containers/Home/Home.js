import React from 'react'

import { Navbar } from '../../components/Nav/Navbar.js';
import Itemmeli from '../../components/Api/itemmeli';

import ItemDetailContainer from './../ItemDetail/ItemDetailContainer';

export const HomeContainer = () => {
    
    return (
        <div>
    
            <div className="App">
                <header className="App-header">
                    <div className="container-fluid">
                        <div className="row">
                
                
                            <div className="col col-md-12"><Navbar></Navbar></div>
                            <div className="container">
                            <Itemmeli></Itemmeli>
                            <ItemDetailContainer></ItemDetailContainer>                            
                            </div>

                
                        </div>
                        </div>
                </header>

            <div>
            
              
        </div>
      
      
      

    </div>
           
            
        </div>
    )
};



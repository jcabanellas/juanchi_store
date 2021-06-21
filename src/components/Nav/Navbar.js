import './estilosnav.css';
import React from 'react';
import { CartWidget } from '../CartWidget/CartWidget';




export const Navbar =() => {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="row">
                    <img src="..\images\logo.jpg" className="App-logo col col-md-3" alt="logo" />
                    <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                     </button>
                    <div className="collapse navbar-collapse col-md-6" id="navbarNav">
                        <ul className="navbar-nav navuno">
                            <li className="nav-item">
                            <a className="nav-link categorias" href="aa" aria-current="page">Nosotros</a>
                            </li>
                            <li className="nav-item ">
                            <a className="nav-link categorias" href="aa"  >Productos</a>
                            </li>
                            <li className="nav-item ">
                            <a className="nav-link categorias" href="aa">Logística</a>
                            </li>
                        
                        </ul>
                    <CartWidget></CartWidget>
                    </div>
                </div>
            </div>
        </nav>
    )
};










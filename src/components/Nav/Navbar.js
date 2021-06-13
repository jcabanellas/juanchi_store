import './estilosnav.css';
import React from 'react';

export const Navbar =() => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                
                <button className="navbar-toggler col-md-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse container-fluid" id="navbarNav">
                    <ul className="navbar-nav back row">
                        <li className="nav-item col-md-3">
                            <a className="nav-link active categorias" href="aa" aria-current="page">Nosotros</a>
                        </li>
                        <li className="nav-item col-md-3">
                            <a className="nav-link categorias" href="aa"  >Productos</a>
                        </li>
                        <li className="nav-item col-md-3">
                            <a className="nav-link categorias" href="aa">Logística</a>
                        </li>
                        
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
};









import React from 'react'
import './estilosCard.css'

import Counter from '../Counter/Counter';
import { Link } from 'react-router-dom';

const CardComponent = ({title,price,img,stock}) => {
    
    

    return (
        <div>
    
        <div className="card">
            <div>
            <div className="card-body">
            <img src={img} alt=""/>
            <h1 className="card-title">{title}</h1>
            <div className="row">
                <div>
                    <strong>"Precio" {price} </strong>
                    <strong>"Stock:" {stock}</strong>
                </div>
                <button><Link to={'/detalle'}>Ver detalle</Link></button>
                <Counter  stock={stock}></Counter>
            </div>
            
            
            
            

            </div>
            </div>
        </div>
        
       
        </div>
        
    )
}

export default CardComponent

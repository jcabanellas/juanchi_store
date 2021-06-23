import React from 'react'
import './estilosCard.css'

import Counter from './../Counter/Counter';


const CardComponent = ({title,price,img}) => {
    
    

    return (
        <div>
    
        <div className="card container">
            <div className="row">
            <div className="col card-body">
            <h1 className="card-title">{title}</h1>
            <strong>"Precio" {price} </strong>
            <img src={img} alt=""/>
            
            <Counter></Counter>
            
            
            
            

            </div>
            </div>
        </div>
        
       
        </div>
        
    )
}

export default CardComponent

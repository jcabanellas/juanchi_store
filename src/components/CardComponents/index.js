import React from 'react'
import './estilosCard.css'
import { Buttongeneral } from '../ButtonComp'

const CardComponent = ({productouno}) => {
    return (
        <div>
    
        <div className="card container-fluid">
            <div className="row">
            <div className="col">
            <h1>{productouno.name}</h1>
            <strong>{"Precio" + productouno.price}</strong>
            <Buttongeneral text={"Agregar"}></Buttongeneral>

            </div>
            </div>
        </div>
        
       
        </div>
        
    )
}

export default CardComponent

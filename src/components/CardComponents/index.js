import React from 'react'
import './estilosCard.css'
import { Buttongeneral } from '../ButtonComp';
import Counter from './../Counter/Counter';


const CardComponent = ({productouno}) => {
    
    

    return (
        <div>
    
        <div className="card container">
            <div className="row">
            <div className="col card-body">
            <h1 className="card-title">{productouno.name}</h1>
            <strong>{"Precio" + productouno.price}</strong>
            <p>Stock: {productouno.stock}</p>
            <Counter stock={productouno.stock}></Counter>
            {productouno.stock >0 ?
            <Buttongeneral text={"Agregar"}></Buttongeneral>
            :
            <p>No hay disponibilidad</p> 
            }
            

            </div>
            </div>
        </div>
        
       
        </div>
        
    )
}

export default CardComponent

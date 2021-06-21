import React from 'react';
import './estilosbutton.css';


export const Buttongeneral = ({text,counter}) => {
    

    const onAdd =() =>{
        console.log(`Agregamos ${counter} unidades al carrito`)

    }
    
    return (
        <button onClick={onAdd}>
            {text}
        </button>
        
    )
    
    }


    







import React from 'react';
import './estilosbutton.css';



export const Buttongeneral = ({text,onAdd}) => {

    
    return (
        <button onClick={onAdd}>
            {text}
        </button>
        
    )
    
    }


    







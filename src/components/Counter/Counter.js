import React,{useState} from 'react'
import './estiloCounter.css'
import { Buttongeneral} from './../ButtonComp/index';

const Counter = ({stock}) => {
    const[counter,setCounter]=useState(1);

    const restar=() =>{
            if(counter>1){
                setCounter(counter-1)
            }
    }

    const sumar =() =>{
        
            if (counter<stock)
            setCounter(counter+1)
    }

    const onAdd =() =>{
        console.log(`Agregamos ${counter} unidades al carrito`)
        

    }
   

    return (
        <div>
            <button onClick={restar}>-</button>
            <p counter={counter}>{counter}</p>
            <button onClick={sumar}>+</button>
            {stock >0 ?
            <Buttongeneral text={"Agregar al carrito"} onAdd={onAdd}></Buttongeneral>
            
            :
            <p>No hay disponibilidad</p> 
            }
            
        </div>
    )
    
}

export default Counter

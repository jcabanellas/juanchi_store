import React from 'react'
import CardComponent from './../CardComponents/index';

export const ItemList = ({entrega, children}) => {
    const producto=[{id:1, name:'Harina',price:'10'},
                  {id:2, name:'Semolin', price:'20'}];
    
    
    
    return (
        <>
        {children}
        <div>
            <CardComponent productouno={producto[0]}><h1>{entrega}</h1></CardComponent>
            <CardComponent productouno={producto[1]}></CardComponent>
        </div>
        </>
    )
};






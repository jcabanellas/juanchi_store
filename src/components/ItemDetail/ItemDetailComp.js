import React from 'react'

const ItemDetailComp = (item) => {
    return (
        <div>
           <img src={item.imagen} alt=""/>
           <p>{item.title}</p>
           <p>{item.price}</p>
            
        </div>
    )
}

export default ItemDetailComp

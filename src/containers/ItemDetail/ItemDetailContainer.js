import React from 'react';
import { useEffect, useState } from 'react';
import ItemDetailComp from './../../components/ItemDetail/ItemDetailComp';
import {getData} from '../../utils/constantes';

const ItemDetailContainer = (props) => {
    const [item,setItem] =useState([]);

    useEffect(()=> {
        
        const newItem = async() =>{
            let data = await getData ('harina000')
            let item = data.map(element =>{
                return{
                    title:element.title,
                    img: element.thumbnail,
                    price: element.price,
                    seller:element.seller.id,
                   
                }
            })
                setTimeout(() => {
                    setItem(item[0]);
                }, 2000);
                
    }

newItem();


 },[])
    
    
    return (
        <div>
        {item ? 
        <ItemDetailComp item={item}/>
        : <p>"a"</p>}

        </div>
    );
};
    


export default ItemDetailContainer;

import React from 'react';
import { useEffect, useState } from 'react';
import { getData } from '../../utils/constantes';
import ItemDetailComp from './../../components/ItemDetail/ItemDetailComp';


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
                        
                    }
                })
                    setTimeout(() => {
                        setItem(item[0]);
                    }, 2000);
        }
    
    newItem();
    console.log (newItem)

     },[])
    return (
        <div>
        {item ? 
        <ItemDetailComp item={item}></ItemDetailComp>
        : <p>"a"</p>}
            
        </div>
    );
    };


export default ItemDetailContainer

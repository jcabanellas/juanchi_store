import React from 'react'
import CardComponent from './../CardComponents/index';
import {getData} from '../../utils/constantes';
import { useState, useEffect } from 'react';

function Itemmeli() {
    let [productos, setProductos] = useState([]);
    useEffect(() => {
        const WaitforData = async() =>{
            let data = await getData ('harina000'); //lamada a la Api
            let aux = data.map(element =>{
                return{
                    title:element.title,
                    img: element.thumbnail,
                    price: element.price,
                }
            })
            setProductos(aux);
        }

        WaitforData();
    },[])
    if (productos.length>0){
        console.log(productos);
    }
    return(
        <div>
            <div className="container">
                <div className="row">
                {productos.lenght ===0 ? 'Si cargo' : 'no' }
                {productos.map((element,index) => {
                    return (
                        <span key={index}>
                        <CardComponent title={element.title} price={element.price} img={element.img}></CardComponent>
                        </span>
                    )
                    })}

            
            
                </div>
            </div>
        </div>
        
    )
}

export default Itemmeli

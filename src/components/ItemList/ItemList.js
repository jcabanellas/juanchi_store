import React from 'react'
import CardComponent from './../CardComponents/index';



export const ItemList = () => {
    const producto=[{id:1, name:'Harina organica trigo',price:'10', stock:10},
                  {id:2, name:'Semolin', price:'20', stock:5},
                  {id:3, name:'Harina centeno', price:'15',stock:0}  ];

    

                  
    
    
    return (
        <>
       
        <div className="container">

            <div className="row">
            
                <div className="col col-md-3">   
                <CardComponent productouno={producto[0]}></CardComponent>
                
                </div> 

                <div className="col col-md-3">
                <CardComponent productouno={producto[1]}></CardComponent>
                
                </div>

                <div className="col col-md-3">
                <CardComponent productouno={producto[2]}></CardComponent>
                
                </div>


            </div> 

        </div>
        </>
    )
};






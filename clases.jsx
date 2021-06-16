/*Clase 2 - JSX*/
        //Estilos

        <div style={{backgroundColor:'red',margin:'10px'}}></div>

        //Exportacion e importación

        export const navBar =() => {
            return (
                <div>
                    <h1></h1>
                </div>
            )
        }

        //E importamos en otro archivo simplemente donde lo usamos(1) y lo llamamos arriba (2) para que quede grabado y asi usar cuando queramos
        < navBar />
        import{navBar} from "..";

        //Eventos en react 
        onClick={saludar} //sin parentisis luego de saludar es mejor para que no se eejectute continuamente.
        // onClick={() => {saludar()}}

/*Clase 3 - Componentes*/


// 'rafce'  ya escribe la funcion para exportar.

export const CardComponent = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <strong>{props.productData.price}</strong>
            
        </div>
    )
};

//* y en app.js
const product = [{id=1, price="99", name="zapa"},
                 {id=2, price="10", name="remera"}];
//y llamado
//<CardComponent productData={product[0]}/>

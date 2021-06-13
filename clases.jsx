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



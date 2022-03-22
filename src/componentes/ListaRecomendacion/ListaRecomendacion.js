import React from "react";
import './ListaRecomendacion.css'

class ListaRecomendacion extends React.Component{

    render(){
        let {cargando, datos} = this.props

        if(cargando){
            return <p>Cargando...</p>
        }else if (datos == null){
            return <p>No hay datos que mostrar</p>
        }else{
            return(
                <ul className="listado">
                    {datos.map(elemento => (
                        <li key={elemento.id}>
                           <p>Nombre: {elemento.nombre} <br></br> 
                           Correo: {elemento.correo} <br></br> 
                           Número: {elemento.numero}</p> 
                        </li>
                    ))}
                </ul>
            );
        }
    }
}



export default ListaRecomendacion;
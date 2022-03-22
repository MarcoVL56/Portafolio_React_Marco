import React from "react";
import './Opiniones.css'

class Opiniones extends React.Component{

    render(){
        let {cargando, datos} = this.props

        if(cargando){
            return <p>Cargando...</p>
        }else if (datos == null){
            return <p>No hay datos que mostrar</p>
        }else{
            return(
                <div className="row">
                    <div className="col-12" >
                        <div className="d-flex justify-content-center">
                            <ul className="row slider">
                                {datos.map(elemento => (
                                    <li className=" col-12 col-lg-6 col-xxl-4"  key={elemento.id} id={`opinion_${elemento.id}`} >
                                        <div className="contenedor-opiniones">
                                            <p>{elemento.opinion}</p> 
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div> 
                    </div>
                </div>
               
            );
        }
    }
}

export default Opiniones;
import React from "react";
import './ContratarServicio.css';
import Formulario from "../Formulario/Formulario";
import {ListaRecomendacionComponenteHOC} from '../HOC/HOC'


function ContratarServicio(props) {
    
    return(
        <div className="row py-5">
            <div className="col-12 col-sm-5 contenedor-flex">    
                <div className="contenido-contratar">
                    <h2>Personas que recomiendan mis servicios</h2>
                    <ListaRecomendacionComponenteHOC url={props.direccion}/>
                </div>
            </div>

            <div className="col-12 col-sm-7">
                <div className="fondo-formulario">
                    <Formulario/>
                </div>
            </div>
        </div>
    );
}

export default ContratarServicio;
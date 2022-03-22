import React from "react";
import './Presentacion.css';

function Presentacion(props) {

    return(
        <div className="row align-items-center">
            <div className="col-8 col-sm-6 px-2">
                <div className="contenido-presentacion">
                    <h1>{props.titulo}</h1>
                    <h2>{props.slogan}</h2>
                </div>    
            </div>
            <div className="col-4 col-sm-6">
                <div className="col-10">
                    <img className="img-fluid" src={props.imagen} alt="imagen principal"></img>
                </div>  
            </div>
        </div>
    );
}

export default Presentacion;
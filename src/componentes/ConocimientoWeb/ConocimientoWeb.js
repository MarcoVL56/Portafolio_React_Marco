import React from "react";
import './ConocimientoWeb.css'

function ConocimientoWeb(props){
    return(
        <div className="row align-items-center">
            <div className="col-12 col-lg-6">
                <div className="contenido-inicial">
                    <h2>Conocimiento como Desarrollador Web</h2>
                    <p>Sé realizar páginas webs dinamicas que puedan cumplir cualquier
                        tarea, actualmente me encuento en un proceso de ir mejorando mis diseños
                        y mi programación.</p>
                    <button onClick={props.onClick}> Ir a Ingenieria en Sistemas</button>
                </div>
            </div>
            <div className="col-12 col-lg-6">
                <div className="contenido fondo-opciones">
                    <h3>Desarrollo Web estandar</h3>
                    <p>Uso HTML, CSS con (Sass y Bootstrap), JavaScript para realizar diferentes
                        tipos de páginas webs.</p>
                </div>  
                <div className="contenido fondo-opciones">
                    <h3>React</h3>
                    <p>Utilizo React para tener un mejor manejo de los recursos y para la creación Single Page Application.</p>
                </div>  
            </div>
          
        </div>
    )
}

export default ConocimientoWeb;
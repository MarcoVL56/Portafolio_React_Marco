import React from "react";
import './ConocimientoIng.css';

function ConocimientoIng(props){
    return(
        <div className="row align-items-center">
            <div className="col-12 col-lg-6">
                <div className="contenido-inicial">
                    <h2>Conocimiento como Ingeniero en Sistemas</h2>
                    <p>Poseo conocimiento de diferentes 
                        lenguajes de programación para la realización 
                        de programas de escritorio y páginas con un 
                        funcionamiento más administrativo.</p>
                    <button onClick={props.onClick}>Ir a Desarrollo Web</button>
                </div>      
            </div>
            <div className="col-12 col-lg-6">
                <div className="contenido fondo-opciones">
                    <h3>Lenguajes de programación</h3>
                    <p>Sé programar diferentes tipos de aplicaciones con los siguientes 
                        lenguajes de programación: Java, Visual Basic, C#, Python.</p>
                </div>  
                <div className="contenido fondo-opciones">
                    <h3>Gestores de bases de datos utilizados</h3>
                    <p>Para el almacenamiento de datos sé utilizar bases de datos
                        relaciones como: MySQL, SqlServer y no relaciones como: 
                        MongoDb o Firebase.</p>
                </div>
            </div>
         </div>
    );
}

export default ConocimientoIng;

import React from "react";
import { BrowserRouter, Link, Route, Routes} from "react-router-dom";
import { OpinionesComponenteHOC } from "../HOC/HOC";
import './Proyectos.css'


function Proyectos(props) {
    return(
        <div className="row">
            <div className="col-12 text-center">
                <div className="contenido-proyecto">
                   <h2>Proyectos y Opiniones </h2> 
                </div>
            </div>
            <BrowserRouter>
                <nav className="col-12 fondo-proyecto-nav d-flex justify-content-center">
                    <ul className="lista-proyecto">
                        <li className="lista-proyecto-contenida">
                            <Link className="link-proyecto" to="/">Campus</Link>
                        </li>
                        <li className="lista-proyecto-contenida"> 
                            <Link className="link-proyecto" to="/proyectoimitacion">Página imitación</Link>
                        </li>
                        <li className="lista-proyecto-contenida">
                            <Link className="link-proyecto" to="/proyectojuego">Juego del Ahorcado</Link>
                        </li>
                        <li className="lista-proyecto-contenida">
                            <Link className="link-proyecto" to="/opiniones">Opiniones sobre mi</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<ProyectoCampus/>}/>
                    <Route path="/proyectoimitacion" element={<ProyectoImitacion/>}/>
                    <Route path="/proyectojuego" element={<ProyectoJuego/>}/>
                    <Route path="/opiniones" element={<OpinionesComponenteHOC url= {props.direccion}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Proyectos;


function ProyectoCampus(){
    return(
        <div className="row fondo-opcion">
            <div className="col-12 col-lg-4">
                <div className="contenido-proyecto">
                    <h3>Proyecto de un Campus</h3>
                    <p>◉ Utilicé Java como lenguaje de programación y MySql como gestor de bases de datos.</p>
                    <p>◉ Este proyecto lo realicé en uno de los cursos de la carrera de Ingeniería en Sistemas
                        en el cual tuve que crear un campus con múltiples funciones.</p>
                </div>
            </div>
            <div className="col-12 col-lg-8">
                <div className="col-12">
                    <img className="img-fluid" src="/img/img-campus.png" alt="Imagen campus"></img>
                </div> 
            </div>
        </div>
    )
}

function ProyectoImitacion(){
    return(
        <div className="row fondo-opcion">
            <div className="col-12 col-lg-4">
                <div className="contenido-proyecto">
                    <h3>Proyecto Imitación de la Página de Buildonauts</h3>
                    <p>◉ Utilicé HTML y CSS.</p>
                    <p>◉ Este proyecto lo realicé en el primer módulo del posgrado de desarrollo web 
                        para aprender HTML y CSS.
                    </p>      
                </div> 
            </div>
            <div className="col-12 col-lg-8">
                <div className="col-12">
                    <img className="img-fluid" src="/img/img-imitacion.png" alt="Imagen imitacion"></img>
                </div> 
            </div>
        </div>
    )
}

function ProyectoJuego(){
    return(
        <div className="row fondo-opcion">
            <div className="col-12 col-lg-4">
                <div className="contenido-proyecto">
                    <h3>Proyecto del Juego del Ahorcado</h3>
                    <p>◉ Utilicé HTML, CSS y JavaScript. </p>
                    <p>◉ Este proyecto lo realicé en el segundo módulo del posgrado de desarrollo web para 
                        aprender sobre el lenguaje de JavaScript.
                    </p>     
                </div> 
            </div>
            <div className="col-12 col-lg-8">
                <div className="col-12">
                    <img className="img-fluid" src="/img/img-juego.png" alt="Imagen juego"></img>
                </div> 
            </div>
        </div>
    )
}


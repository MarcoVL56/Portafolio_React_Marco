import React, {useState, useEffect} from "react";
import './Navegacion.css';

function Navegacion(props){
    const [activarMenu, setActivarMenu] = useState(false)
    const [anchoPantalla, setAnchoPantalla] = useState(window.innerWidth)

    const activarNav = () => {
        setActivarMenu(!activarMenu)
    }

    useEffect(()=>{
        const cambiarAncho = () =>{
            setAnchoPantalla(window.innerWidth)
        }
        
        window.addEventListener('resize', cambiarAncho)
        
        return () => {
            window.removeEventListener('resize', cambiarAncho)
        }
    }, [])

    return(
        <nav className="row">
            <div className="col-4">
                <a className="col-4 py-2" href="#seccion_presentacion">
                    <img className="img-fluid" src={props.logo} alt="logo página"></img>
                </a>
            </div>
            <div className="col-8 d-flex justify-content-end">    
                {(activarMenu  || anchoPantalla > 1200) && (
                <ul className="lista">
                    <li className="lista-contenida">
                        <a className="link" href="#seccion_presentacion">
                            {props.seccion.primera_seccion}
                        </a>
                    </li>
                    <li className="lista-contenida">
                        <a className="link" href="#seccion_experiencia">
                            {props.seccion.segunda_seccion}
                        </a>
                    </li>
                    <li className="lista-contenida">
                        <a className="link" href="#seccion_proyectos">
                            {props.seccion.tercera_seccion}
                        </a>
                    </li>
                    <li className="lista-contenida">
                        <a className="link" href="#seccion_servicios">
                            {props.seccion.quinta_seccion}
                        </a>
                    </li>
                    <li className="lista-contenida">
                        <a className="link" href="#seccion_contacto">
                            {props.seccion.cuarta_seccion}
                        </a>
                    </li>
                </ul>
                )}
                <span onClick={activarNav} className="boton-menu pt-1">
                    <img src={props.icono} alt="opcion-menu"></img>
                </span>
            </div>
        </nav>
    );
}

export default Navegacion;


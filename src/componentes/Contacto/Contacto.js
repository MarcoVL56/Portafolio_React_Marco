import React from "react";
import './Contacto.css';

function Contacto(props) {

    return(
        <div className="row py-5">
            <div className="col-6">
                <div className="contenido-contacto">
                    <h2>Contacto</h2>
                    <h3>Correo electrónico:</h3>
                    <p>{props.correo}</p>
                    <h3>Número teléfonico:</h3>
                    <p>{props.numeroTelefonico}</p>
                </div>
            </div>
            <div className="col-6">
                <div className="contenido-contacto" >
                  <h2>Redes sociales</h2>
                  <ul className="lista-contacto">
                      <li className="lista-contenida-contacto">
                          <a className="link" href="https://www.facebook.com/marco.vargaslanzas">
                              <img src={props.iconos.facebook} alt="icono-facebook"></img>
                          </a>
                      </li>
                      <li className="lista-contenida-contacto">
                          <a className="link" href="https://www.linkedin.com/in/marco-vargas-lanzas-aa7171228/">
                              <img src={props.iconos.linkedin} alt="icono-linkedin"></img>
                          </a>
                      </li>
                  </ul>
                </div>
            </div>
        </div>
    );
}

export default Contacto;
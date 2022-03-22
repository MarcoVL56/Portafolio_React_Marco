import React from 'react';
import './App.css';
import Presentacion from './componentes/Presentacion/Presentacion';
import Proyectos from './componentes/Proyectos/Proyectos';
import Contacto from './componentes/Contacto/Contacto';
import Navegacion from './componentes/Navegacion/Navegacion';
import {Experiencia} from './componentes/Experiencia/Experiencia';
import ContratarServicio from './componentes/ContratarServicio/ContratarServicio';


function App() {
  let secciones = {primera_seccion: "Presentación", segunda_seccion: "Experiencia", 
  tercera_seccion: "Proyectos", cuarta_seccion: "Contacto", quinta_seccion: "Formulario"}

  let url = "https://my-json-server.typicode.com/MarcoVL56/Api_Recomendaciones/registro"

  return (
    <div>
      <header className='fondo-encabezado fixed-top'>
        <div className='container-fluid'>
          <Navegacion logo="/img/logo-portafolio.png"
           seccion={secciones} icono ="/img/img-icono.svg"
           />
        </div>
      </header>

      <section id='seccion_presentacion' className='fondo-presentacion'>
        <div className='container'>
          <Presentacion 
            titulo="Marco Vargas Lanzas" 
            slogan="Ingeniero en Sistemas y estudiante de 
            Front-End Web Developmet de la Universidad Cenfotec"
            imagen="/img/imagen-principal.png"
          />
        </div>
      </section>

      <section id='seccion_experiencia' className='fondo-experiencia'>
        <div className='container'>
          <Experiencia/>
        </div>
      </section>
      
      <section id='seccion_proyectos' className='fondo-proyectos'>
        <div className='container'>
          <Proyectos direccion = {url}/>
        </div>
      </section>

      <section id='seccion_servicios' className='fondo-contratar'>
        <div className='container'>
          <ContratarServicio direccion = {url}/>
        </div>
      </section>

      <footer id='seccion_contacto' className='fondo-contacto'>
        <div className='container'>
          <Contacto correo ='marco1111vl@gmail.com' 
            numeroTelefonico ='83222405'
            iconos = {{
              facebook: "/img/img-facebook.svg", 
              whatsapp: "/img/img-whatsapp.svg",
              linkedin: "/img/img-linkedin.svg"}} 
          />
        </div>
      </footer>
    </div>
  );
}

export default App;


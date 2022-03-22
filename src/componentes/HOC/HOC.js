import React from "react";
import { ejecutarPeticion } from "../Funciones/Funciones";
import ListaRecomendacion from "../ListaRecomendacion/ListaRecomendacion";
import Opiniones from "../Opiniones/Opiniones";

export const ListaRecomendacionComponenteHOC = ComponenteHOC(
    ListaRecomendacion, 
    (props,manejadorEventos) => ejecutarPeticion (props,manejadorEventos)
)

export const OpinionesComponenteHOC = ComponenteHOC(
    Opiniones,
    (props,manejadorEventos) => ejecutarPeticion (props,manejadorEventos)
)

function ComponenteHOC (ComponenteRecibido, metodoRecibido){
    return class extends React.Component{
        constructor(props){
            super(props)
            this.manejadorEventos = this.manejadorEventos.bind(this)
            this.state = {cargando : false, datos: null}
        }

        componentDidMount(){
            metodoRecibido(this.props, this.manejadorEventos)
        }

        manejadorEventos(respuestaCargando, respuestaDatos){
            this.setState({cargando: respuestaCargando, datos: respuestaDatos})
        }
        render(){
            return(
                <ComponenteRecibido 
                    cargando= {this.state.cargando}
                    datos= {this.state.datos}
                    {...this.props}
                />
            )
        }
    }
}

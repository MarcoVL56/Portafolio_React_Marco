import React, {useState} from "react";
import './Experiencia.css';
import ConocimientoWeb from "../ConocimientoWeb/ConocimientoWeb";
import ConocimientoIng from "../ConocimientoIng/ConocimientoIng";

export function Experiencia(){
    const [cambioComponente, setCambioComponente] = useState(true);
    let componente;

    const cambiarEstado = () => {
        setCambioComponente(!cambioComponente)
    }

    if(cambioComponente){
        componente =  <ConocimientoIng onClick = {cambiarEstado}/>
    }else{
        componente = <ConocimientoWeb onClick = {cambiarEstado}/> 
    }

    return(
        <div>
            {componente}
        </div>
    )
}


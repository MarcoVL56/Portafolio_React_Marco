import React from "react"

export function ejecutarPeticion (propiedades, manejadorEventos){
    manejadorEventos(true, null)
    let url = propiedades.url
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => {
            manejadorEventos(false, resultado)
        })
        .catch (excepcion => {
            console.log(excepcion)
            manejadorEventos(false, null)
        })
} 
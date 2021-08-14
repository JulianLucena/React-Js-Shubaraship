import React from "react"

const Agregar = ({agregarOpinion}) => {

    const manejarSubmit = (ev) => {

        ev.preventDefault()

        let nombre = ev.target.nombre.value;
        let opinion = ev.target.opinion.value;

        agregarOpinion(nombre, opinion)

        ev.target.reset()
    }

    return(
        <form onSubmit={manejarSubmit}>
            <p>Nombre: </p>
            <input type="text" name="nombre" placeholder="Tu nombre..."/>
            <p>Comentario: </p>
            <textarea placeholder="Tu opinión..." id="opinion" />
            <button type="submit">OPINAR</button>
        </form>
    )
}

export default Agregar
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
        <form onSubmit={manejarSubmit} className="OpContainer">
            <p className="OpTextA">Nombre: </p>
            <input type="text" name="nombre" placeholder="Tu nombre..." className="OpTextArea"/>
            <p className="OpTextB">Comentario: </p>
            <textarea placeholder="Tu opinión..." id="opinion" className="OpTextArea"/>
            <br/>
            <button type="submit" className="OpButton">OPINAR</button>
        </form>
    )
}

export default Agregar
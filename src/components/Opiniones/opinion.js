import React from "react"

const Opinion = ({data: {nombre, opinion, likes, fecha, id }, sumarLike
}) => {
    return (
        <article className="opiniones">

            <strong>{nombre} dijo:</strong>
            <p>{opinion}</p>
            <em>Likes: {likes} - {fecha}</em>
            <button onClick={() => sumarLike(id)}>Dar Like!</button>

        </article>
    )
}

export default Opinion;
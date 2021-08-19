import React from "react"

const Opinion = ({data: {nombre, opinion, likes, fecha, id }, sumarLike
}) => {
    return (
        <article className="Com">

            <p className="ComNombre" >{nombre} dijo:</p>
            <p className="ComCom">{opinion}</p>
            <p className="ComDate">{fecha}</p>
            <p className="ComLikes"> Likes: {likes}</p>
            <button onClick={() => sumarLike(id) } className="ComBtn">Dar Like</button>
        </article>
    )
}

export default Opinion;
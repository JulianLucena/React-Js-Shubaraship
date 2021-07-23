import React from "react";
import { useParams } from "react-router";
import { funkopop } from "./funkopop.json"

const Figuras = () => {

    const 
    { id } = useParams();    

    return <div>
            <img src={funkopop[id].img} alt={funkopop[id].title} />
            <h1>{funkopop[id].title}</h1>
            <h2>${funkopop[id].price}</h2>
    </div>
}

export default Figuras;
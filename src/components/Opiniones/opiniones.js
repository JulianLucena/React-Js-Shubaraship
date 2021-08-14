import React, {useState, useEffect} from "react";
import { database } from "../../firebase/firebase";
import Agregar from "./agregar";
import Opinion from "./opinion";

const Opiniones = () => {

    const [opiniones, setOpiniones] = useState([])

    const obtenerOpiniones = async () => {

        let opinionesRemotas = database.collection("opiniones")

        let opinionesFetcheadas =  await opinionesRemotas
        .get()
        .then((query) => 
            query.docs.map((item) => ({...item.data(), id: item.id}))
        )

        setOpiniones(opinionesFetcheadas)
    }

    useEffect(() => {
        obtenerOpiniones()
    }, [])

    const agregarOpinion = (nombre, opinion) => {

        let nuevaOpinion = {
            nombre: nombre,
            opinion: opinion,
            likes: 1,
            fecha: new Date().toString(),            
        }

        let opinionesRemotas = database.collection("opiniones")

        opinionesRemotas.add(nuevaOpinion).then(() => alert("GRACIAS POR TU OPINIÓN!"))
        .catch((err) => alert("ERROR: ", err))
        .finally(() => obtenerOpiniones())        
    }

    const sumarLike = async (id) => {
        let opinionesRemotas = database.collection("opiniones")

        let opinionLikeada = opinionesRemotas.doc(id)

        let likesAnteriores = await opinionLikeada
            .get()
            .then(res => res.data().likes)

        opinionLikeada.update({
            likes: likesAnteriores +1
        })
        .then(() => obtenerOpiniones())
        .catch((err) => alert("ERROR: ", err))
    }

    return (
        <div>
            <h1>OPINIONES:</h1>

            <Agregar agregarOpinion={agregarOpinion} />

            <section>               
                {opiniones.map((item) => (
                <Opinion data={item} key={item.id} sumarLike={sumarLike}/>
                ))}
            </section>
        </div>
    );

};

export default Opiniones;
import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";
import { database } from "../../firebase/firebase";

const ItemListContainer = () => {

    const [figurasAMostrar, setFigurasAMostrar] = useState([]);

    const obtenerFiguras = () => {

        const figuras = database.collection("Figuras");

        figuras
        .get()
        .then((query) => 
            setFigurasAMostrar(query.docs.map(doc => {
                return {...doc.data(), id: doc.id };
            }))
        );
    }

    return <div>

        <button onClick={obtenerFiguras}>Llamar Firebase</button>

        {figurasAMostrar.length ? (
            figurasAMostrar.map(figura => <ItemList figura ={figura} />)
        ) : (
            <h3>Cargando...</h3>
        )}
        
    </div>
};

export default ItemListContainer;
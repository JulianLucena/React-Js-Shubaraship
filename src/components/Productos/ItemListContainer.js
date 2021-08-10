import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";
import { database } from "../../firebase/firebase";

const ItemListContainer = () => {

    const [productoAMostrar, setProductoAMostrar] = useState([]);

    const { catId } = useParams()

    const obtenerProductos = () => {     
   
        const categoria = database.collection(catId);

        categoria
        .get()
        .then((query) => 
                setProductoAMostrar(query.docs.map(doc => {
                return {...doc.data(), id: doc.id };
            }))
        );
    }

    return <div>

        <button onClick={obtenerProductos}>Llamar Firebase</button>

        {productoAMostrar.length ? (
            productoAMostrar.map(figura => <ItemList figura ={figura} />)
        ) : (
            <h3>Cargando...</h3>
        )}
        
    </div>
};

export default ItemListContainer;
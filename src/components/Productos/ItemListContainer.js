import React, { useEffect, useState, useCallback } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";
import { database } from "../../firebase/firebase";

const ItemListContainer = () => {

    const [productoAMostrar, setProductoAMostrar] = useState([]);

    const { catId } = useParams()

    const obtenerProductos = useCallback( () => {     
   
        const categoria = database.collection(catId);

        categoria
        .get()
        .then((query) => 
                setProductoAMostrar(query.docs.map(doc => {
                return {...doc.data(), id: doc.id };
            }))
        );
    }, [catId])

    useEffect(() => {
        obtenerProductos()
    }, [catId, obtenerProductos])

    return <div>        
        <div className="producto">
            {productoAMostrar.length ? (
                productoAMostrar.map(producto => <ItemList producto = {producto}  />)
            ) : (
                <div>
                   <p className="EmptyCard">Cargando...</p>
                </div>  
            )}
        </div>         
    </div>
};

export default ItemListContainer;
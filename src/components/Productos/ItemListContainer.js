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

    useEffect(() => {
        obtenerProductos()
    }, [catId])

    return <div>        
        <div className="producto">
            {productoAMostrar.length ? (
                productoAMostrar.map(producto => <ItemList producto ={producto} />)
            ) : (
                <h3>Cargando...</h3>
            )}
        </div>         
    </div>
};

export default ItemListContainer;
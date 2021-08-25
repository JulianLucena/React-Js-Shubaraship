import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { database } from "../../firebase/firebase";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})

    const { catId, id } = useParams()

    const obtenerProducto =  useCallback( () => {     
   
        const categoria = database.collection(catId);

        categoria.doc(id)
            .get()
            .then((query) => {

                setItem({
                    id,
                    ...query.data()
                })
            })
    }, [catId, id])
    
    useEffect(() => {
        obtenerProducto()
    }, [id, obtenerProducto])

    return <div>
        <ItemDetail {...item}/>
    </div>
};

export default ItemDetailContainer;
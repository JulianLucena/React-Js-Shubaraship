import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { ItemPops } from "./Productos-Figuras";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})

    const { id } = useParams()

    useEffect(() => {
        const producto = ItemPops.find(prod => prod.id)
        setItem(producto)
    })

    return <div>
        <ItemDetail {...item}/>
    </div>
};

export default ItemDetailContainer;
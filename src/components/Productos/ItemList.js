import React, { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"
import Item from "./Item"

export const ItemList = ( {items} ) => {

    const {carrito} = useContext(CartContext)
    console.log(carrito)

    return (
        <div>
            {items.map( producto => <Item key={producto.id} item={producto}/>)}
        </div>
    )
}

export default ItemList;
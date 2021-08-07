import React, { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"
import Item from "./Item"

export const ItemList = ( {figura} ) => {

    const {carrito} = useContext(CartContext)
    console.log(carrito)

    return (
        <div>
            <img src={figura.img} alt={figura.nombre} />
            <h1>{figura.nombre} (ID: {figura.id}) </h1>            
            <h2>Precio: ${figura.precio}</h2>
            <h3>Cantidad: {figura.stock}</h3>
        </div>
    )
}

export default ItemList;
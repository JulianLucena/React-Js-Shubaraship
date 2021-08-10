import React, { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"
import { Link } from "react-router-dom";

export const ItemList = ( {figura} ) => {

    const {carrito} = useContext(CartContext)

    return (
        <div className="producto">
            <img className="StyleImg" src={figura.img} alt={figura.nombre} />
            <h1>{figura.nombre} (ID: {figura.id}) </h1>            
            <h2>Precio: ${figura.precio}</h2>
            <h3>Cantidad: {figura.stock}</h3>
            <Link to={`/categoria/${figura.categoria}/${figura.id}`}>Ver más...</Link>
        </div>
    )
}

export default ItemList;
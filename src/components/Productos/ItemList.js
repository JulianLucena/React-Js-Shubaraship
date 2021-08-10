import React, { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

export const ItemList = ( {producto} ) => {

    const {carrito} = useContext(CartContext)

    return (       
        <div className="Card">
            <img className="StyleImg" src={producto.img} alt={producto.nombre} />
            <h1>{producto.nombre}</h1>            
            <h3>Precio: ${producto.precio}</h3>
            <h4>Cantidad: {producto.stock}</h4>
            <Link to={`/categoria/${producto.categoria}/${producto.id}`}><h4>Ver más...</h4></Link>
        </div>
    )
}

export default ItemList;
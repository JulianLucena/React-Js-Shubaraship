import React, { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

export const ItemList = ( {producto} ) => {

    const {carrito} = useContext(CartContext)

    return (       
        <div className="card myCard">
            <img className="StyleImg" src={producto.img} alt={producto.nombre} />
            <span className="CardTitle">{producto.nombre}</span>            
            <span className="CardPrice">Precio: ${producto.precio}</span>
            <span className="CardAmount">Cantidad: {producto.stock}</span>
            <Link to={`/categoria/${producto.categoria}/${producto.id}`}><span className="CardMore">Ver más...</span></Link>
        </div>
    )
}

export default ItemList;
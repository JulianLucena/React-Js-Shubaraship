import React from "react"
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

export const ItemList = ( {producto} ) => {

    return (       
        <div className="card myCard">
            <span className="CardTitle">{producto.nombre}</span>     
            <img className="StyleImg" src={producto.img} alt={producto.nombre}/>                   
            <span className="CardPrice">Precio: ${producto.precio}</span>
            <span className="CardAmount">Stock: {producto.stock}</span>
            <Link className="CardMore" to={`/categoria/${producto.categoria}/${producto.id}`}><span>Comprar</span></Link>
        </div>
    )
}

export default ItemList;
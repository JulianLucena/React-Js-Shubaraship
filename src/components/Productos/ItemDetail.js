import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";

const ItemDetail = ({category, id, img, price, stock, title}) => {

    const [cantidad, setCount] = useState(1);

    const [finished, setFinished] = useState(false);

    const handleState = () => setFinished(!finished);

    const {agregarAlCarrito, carrito, eliminarProducto} = useContext(CartContext)
    console.log(carrito)

    const handleAgregar = () => {
        agregarAlCarrito({
            category,
            id,
            img,
            price,
            stock,
            title,
            cantidad
        })
    }
    const handleEliminar = () => {
        eliminarProducto(id)
    }

    return(
        <div className="detailbox">
            <div>
                <img src={img} alt={title}/>
                <h1>{title}</h1>
                <h2>Precio: ${price}</h2> 
                <p>Cantidad disponible: {stock}</p>
                {!finished ? (     
                    <>               
                    <ItemCount stock={stock} cantidad={cantidad} setCount={setCount} />
                    <button onClick={handleState, handleAgregar}>Agregar al carrito</button> 
                    <button onClick={handleEliminar}>Eliminar producto</button>
                    </>
                ) : (
                    <>
                    <Link to="/cart" onClick={handleState}>
                        <button onClick={handleState}>Terminar mi compra</button>
                    </Link>
                    <button onClick={handleState}>Modificar</button>
                    </>
                )}                
            </div>
        </div>
    );
};

export default ItemDetail;
import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";

const ItemDetail = ({category, id, img, precio, stock, nombre}) => {

    const [cantidad, setCount] = useState(1);

    const [finished, setFinished] = useState(false);

    const handleState = () => {
        setFinished(!finished);
        
    }

    const handleStateAndCart = () => {
        setFinished(!finished)
        agregarAlCarrito({
            category,
            id,
            img,
            precio,
            stock,
            nombre,
            cantidad
        })
    }

    const {agregarAlCarrito, carrito, eliminarProducto} = useContext(CartContext)
    console.log(carrito)

    const handleEliminar = () => {
        eliminarProducto(id)
    }

    return(
        <div className="detailbox">
            <div classname="">
                <img src={img} alt={nombre}/>
                <h1>{nombre}</h1>
                <h2>Precio: ${precio}</h2> 
                <p>Cantidad disponible: {stock}</p>
                {!finished ? (     
                    <>               
                    <ItemCount stock={stock} cantidad={cantidad} setCount={setCount} />
                    <button onClick={handleStateAndCart}>Agregar al carrito</button> 
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
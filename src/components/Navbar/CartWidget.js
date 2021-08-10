import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import imagenCarrito from "./Imagen-Carrito.png"

export const CardWidget = () => {

    const {cantidadCarrito, totalCarrito} = useContext(CartContext)

    return(
        <Link to="/cart">
            <div>
                <img className = "CarritoLogo" src = {imagenCarrito} alt = "Imagen del Carrito"></img>
                {/* <h4>Carrito</h4>
                <p>Cantidad: {cantidadCarrito()}</p>
                <p>Total: {totalCarrito()}</p> */}
            </div>
        </Link>
    );
};

export default CardWidget

import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import imagenCarrito from "./Imagen-Carrito.png"

export const CardWidget = () => {

    const {cantidadCarrito, totalCarrito} = useContext(CartContext)

    return(
        <div>
            <img className = "Logo" src = {imagenCarrito} alt = "Imagen del Carrito"></img>
            <h4>Carrito</h4>
            <p>Cantidad: {cantidadCarrito()}</p>
            <p>Total: {totalCarrito()}</p>
        </div>
    );
};

export default CardWidget

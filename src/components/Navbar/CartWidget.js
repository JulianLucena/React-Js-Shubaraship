import React, { useContext } from "react";
import { Link } from "react-router-dom";
import imagenCarrito from "./Imagen-Carrito.png"

export const CardWidget = () => {

    return(
        <Link to="/cart">
            <div>
                <img className = "CarritoLogo" src = {imagenCarrito} alt = "Imagen del Carrito"></img>
            </div>
        </Link>
    );
};

export default CardWidget

import React from "react";
import imagenCarrito from "./Imagen-Carrito.png"

const CardWidget = () => {
    return(
        <div>
            <img className = "Logo" src = {imagenCarrito} alt = "Imagen del Carrito"></img>
        </div>
    );
};

export default CardWidget

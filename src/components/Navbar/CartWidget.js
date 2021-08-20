import React, { useContext } from "react";
import { Link } from "react-router-dom";
import imagenCarrito from "./Imagen-Carrito.png"

export const CardWidget = () => {

    return(
        <Link to="/cart">
            <div>
                <img className = "CarritoLogo" src = "https://firebasestorage.googleapis.com/v0/b/shubaraship.appspot.com/o/Banners%2FCart.png?alt=media&token=be4c55a3-caf1-43bd-a9df-4a0d72249339" alt = "Imagen del Carrito"></img>
            </div>
        </Link>
    );
};

export default CardWidget

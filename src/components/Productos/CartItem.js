import React from "react";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
    return(
        <div className="ItemStyleContainer">
            <img className="ItemStyleImg" src={item.img} alt= {item.title} />
            <h1>{item.nombre}</h1>
            <h2>Precio: {item.precio}</h2>      
            <h2>Cantidad: {item.cantidad}</h2>  
        </div>
    );
};

export default CartItem;
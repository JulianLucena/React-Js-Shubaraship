import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"

const CartItem = ({ item }) => {

    return(
        <div className="ItemStyleContainer card myCard">
            <img className="StyleImg" src={item.img} alt= {item.title} />
            <span className="CardTitle">{item.nombre}</span>
            <span className="CardPrice">Precio: {item.precio}</span>      
            <span className="CardAmount">Cantidad: {item.cantidad}</span>  
            <span className="CardTotal">Total: {item.precio * item.cantidad}</span>
        </div>
    );
};

export default CartItem;
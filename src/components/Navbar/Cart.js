import React, { useContext } from "react"
import { CartContext } from "../CartContext/CartContext";
import Item from "../Productos/Item"

const Cart = () => {

    const {carrito} = useContext(CartContext)

    return (
        <div>
            <h1>HOLA SOY EL CARRITO</h1>  
            {carrito.map( producto => <Item key={producto.id} item={producto}/>)}       
        </div>
    )
}

export default Cart;
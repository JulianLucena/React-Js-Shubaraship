import React, { useContext } from "react"
import { CartContext } from "../CartContext/CartContext";
import Item from "../Productos/Item"

const Cart = () => {

    const {carrito} = useContext(CartContext)

    return (
        <div> 
            {carrito.length ? (
            carrito.map(producto => <Item key={producto.id} item={producto}/>)
            ) : (
            <h1>Tu carrito está vacío</h1>
            )}  
            {/* {carrito.map( producto => <Item key={producto.id} item={producto}/>)}  */}

            <hr/>

            <h2>Nombre:</h2>
            <input type="text" name="txtNombre" id="txtNombre" defaultValue=""/>
            <h2>Apellido:</h2>
            <input type="text" name="txtApellido" id="txtApellido" defaultValue=""/>
            <h2>Email:</h2>
            <input type="text" name="txtEmail" id="txtEmail" defaultValue=""/>
            <h2>Número de Teléfono:</h2>
            <input type="text" name="txtTelefono" id="txtTelefono" defaultValue=""/>
            <hr/>
            <button>Aceptar</button>

        </div>
    )
}

export default Cart;
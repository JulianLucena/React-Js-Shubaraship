import React, { useContext } from "react"
import { CartContext } from "../CartContext/CartContext";
import CartItem from "../Productos/CartItem"

const Cart = () => {

    const {carrito, totalCarrito, cantidadCarrito} = useContext(CartContext)

    return (
        <div> 
            <div className="producto">
                {carrito.length ? (
                carrito.map(producto => <CartItem key={producto.id} item={producto}/>)
                ) : (
                <h1>Tu carrito está vacío</h1>
                )}                 
            </div>            
            
            <div>
                <h1>Cantidad: {cantidadCarrito()}</h1>
                <h1>Total: ${totalCarrito()}</h1>
                <h2>Nombre:</h2>
                <input type="text" name="txtNombre" id="txtNombre" defaultValue=""/>
                <h2>Apellido:</h2>
                <input type="text" name="txtApellido" id="txtApellido" defaultValue=""/>
                <h2>Email:</h2>
                <input type="text" name="txtEmail" id="txtEmail" defaultValue=""/>
                <h2>Número de Teléfono:</h2>
                <input type="text" name="txtTelefono" id="txtTelefono" input="holanda" defaultValue=""/>
                <button>Aceptar</button>
            </div>
            

        </div>
    )
}

export default Cart;
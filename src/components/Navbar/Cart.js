import React, { useContext, useEffect, useState } from "react"
import { database } from "../../firebase/firebase";
import { CartContext } from "../CartContext/CartContext";
import CartItem from "../Productos/CartItem"

const Cart = () => {

    const {carrito, totalCarrito, cantidadCarrito} = useContext(CartContext)

    const [compras, setCompras] = useState([])

    const obtenerCompras = async () => {

        let comprasRemotas = database.collection("compras")

        let comprasFetcheadas = await comprasRemotas
        .get()
        .then((query) => 
            query.docs.map((item) => ({...item.data(), id: item.id}))
        )

        setCompras(comprasFetcheadas)
    }

    useEffect(() => {
        obtenerCompras()
    }, [])

    const agregarCompra = (nombre, carrito, email, telefono) => {

        let nuevaCompra = {
            nombre: nombre,
            carrito: carrito,
            email: email,
            telefono: telefono,
            fecha: new Date().toString(),
        }

        let comprasRemotas = database.collection("compras")

        comprasRemotas.add(nuevaCompra).then(() => alert("GRACIAS POR TU COMPRA!"))
        .catch((err) => alert("ERROR: ", err))
        .finally(() => obtenerCompras())
    }

    const manejarCompra = (ev) => {

        ev.preventDefault()

        let nombre = ev.target.nombre.value;
        let carrito = ev.target.carrito.value;
        let email = ev.target.email.value;
        let telefono = ev.target.telefono.value;

        agregarCompra(nombre, carrito, email, telefono)

        ev.target.reset()       
    }

    return (
        <div> 
            <div className="producto">
                {carrito.length ? (
                carrito.map(producto => <CartItem key={producto.id} item={producto}/>)
                ) : (
                <h1>Tu carrito está vacío</h1>
                )}                 
            </div>            
            
            <form onSubmit={manejarCompra}>
                <h1>Cantidad: {cantidadCarrito()}</h1>
                <h1>Total: ${totalCarrito()}</h1>
                <h2>Nombre:</h2>
                <input type="text" name="nombre" id="nombre" placeholder="Nombre..."/>
                <h2>Email:</h2>
                <input type="text" name="email" id="email" placeholder="Tu Email..."/>
                <h2>Número de Teléfono:</h2>
                <input type="text" name="telefono" id="telefono" placeholder="Número de teléfono..."/>
                <button type="submit">COMPRAR</button>
            </form>           
        </div>
    )
}

export default Cart;
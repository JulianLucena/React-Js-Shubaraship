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
        let email = ev.target.email.value;
        let telefono = ev.target.telefono.value;

        agregarCompra(nombre, carrito, email, telefono)

        ev.target.reset()  
        ev.carrito.reset()     
    }

    return (
        <div> 
            <div className="producto">
                {carrito.length ? (
                carrito.map(producto => <CartItem key={producto.id} item={producto}/>)
                ) : (
                <div>                    
                    <img className="gif" src="https://firebasestorage.googleapis.com/v0/b/shubaraship.appspot.com/o/Banners%2Fshuba-duck.gif?alt=media&token=c1bae293-646c-4889-bc84-6195e517ab4f" alt="Shuba Duck"></img>
                    <p className="EmptyCard">Tu carrito está vacío</p>
                </div>                
                )}                 
            </div>    

            <p className="EmptyCard">Cantidad: {cantidadCarrito()}</p>
            <p className="EmptyCard">Total: ${totalCarrito()}</p>        
            
            <form className="OpContainer" onSubmit={manejarCompra}>                
                <p className="OpTextA">Nombre:</p>
                <input className="OpTextArea" type="text" name="nombre" id="nombre" placeholder="Nombre..."/>
                <p className="OpTextB">Email:</p>
                <input className="OpTextArea" type="text" name="email" id="email" placeholder="Tu Email..."/>
                <p className="OpTextB">Número de Teléfono:</p>
                <input className="OpTextArea" type="text" name="telefono" id="telefono" placeholder="Número de teléfono..."/>
                <button className="OpButton" type="submit">COMPRAR</button>
            </form>           
        </div>
    )
}

export default Cart;
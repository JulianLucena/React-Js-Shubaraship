import React, { createContext, useState } from "react"

export const CartContext = createContext() 

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])

    const agregarAlCarrito = (item) => {
        setCarrito([...carrito, item])
    }

    const eliminarProducto = (id) => {
        setCarrito(carrito.filter(prod => prod.id !== id))
    }

    const totalCarrito = () => {
        return carrito.reduce( (acc, prod) => (prod.price * prod.cantidad), 0)
    }

    const cantidadCarrito = () => {
        return carrito.reduce( (acc, prod) => acc + prod.cantidad, 0)
    }

    return <CartContext.Provider value={{carrito, agregarAlCarrito, totalCarrito, cantidadCarrito, eliminarProducto}}>
        {children}
    </CartContext.Provider>
}
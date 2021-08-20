import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";

const ItemDetail = ({categoria, id, img, precio, stock, nombre, info}) => {

    const { catId } = useParams()

    const [cantidad, setCount] = useState(1);

    const [finished, setFinished] = useState(false);

    const handleState = () => {
        setFinished(!finished);        
    }

    const handleStateAndCart = () => {
        setFinished(!finished)
        agregarAlCarrito({
            categoria,
            id,
            img,
            precio,
            stock,
            nombre,
            cantidad,
            info
        })
    }

    const {agregarAlCarrito, carrito, eliminarProducto} = useContext(CartContext)

    const handleEliminar = () => {
        eliminarProducto(id)
    }

    return(
        <div className="itemDetail">
            <div>
                <img className="IDImg" src={img} alt={nombre}/>
                <div>
                    <p className="IDNombre">{nombre}</p>
                    <p className="IDPrecio">Precio: ${precio}</p> 
                    <p className="IDStock">Stock: {stock}</p>
                    <p className="IDInfo">{info}</p>                    
                </div>                
                {!finished ? (     
                    <div className="IDContador"> 
                        <ItemCount stock={stock} cantidad={cantidad} setCount={setCount} /> 
                        <button className="IDBtn" onClick={handleStateAndCart}>Agregar al carrito</button> 
                        <button className="IDBtn" onClick={handleEliminar}>Eliminar del carrito</button>
                    </div>
                ) : (
                    <div className="IDContador">
                        <Link to="/cart" onClick={handleState}>
                            <button className="IDBtn" onClick={handleState}>Terminar mi compra</button>
                        </Link>
                        <button className="IDBtn" onClick={handleState}>Modificar</button>
                    </div>
                )}                
            </div>
            <div className="VolverBtn">
                <Link to="/categoria/:catId">
                    <a> Volver </a>
                </Link>
            </div>            
        </div>
    );
};

export default ItemDetail;
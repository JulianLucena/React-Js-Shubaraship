import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";

const ItemDetail = ({category, id, img, precio, stock, nombre, info}) => {

    const { catId } = useParams()

    const [cantidad, setCount] = useState(1);

    const [finished, setFinished] = useState(false);

    const handleState = () => {
        setFinished(!finished);        
    }

    const handleStateAndCart = () => {
        setFinished(!finished)
        agregarAlCarrito({
            category,
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
                <img className="itemDetailImg" src={img} alt={nombre}/>
                <div className="itemDetailText">
                    <p className="itemDetailNombre">{nombre}</p>
                    <p className="itemDetailPrecio">Precio: ${precio}</p> 
                    <p className="itemDetailStock">Stock: {stock}</p>
                    <p className="itemDetailInfo">{info}</p>                    
                </div>                
                {!finished ? (     
                    <div className="itemDetailContador"> 
                        <ItemCount stock={stock} cantidad={cantidad} setCount={setCount} /> 
                        <button className="IteamDetailBtn" onClick={handleStateAndCart}>Agregar al carrito</button> 
                        <button className="IteamDetailBtn" onClick={handleEliminar}>Eliminar del carrito</button>
                    </div>
                ) : (
                    <div className="itemDetailContador">
                        <Link to="/cart" onClick={handleState}>
                            <button className="IteamDetailBtn" onClick={handleState}>Terminar mi compra</button>
                        </Link>
                        <button className="IteamDetailBtn" onClick={handleState}>Modificar</button>
                    </div>
                )}                
            </div>
            <div className="VolverBtnContainer">
                <Link to="/categoria/:catId">
                    <a className="VolverBtn"> Volver </a>
                </Link>
            </div>            
        </div>
    );
};

export default ItemDetail;
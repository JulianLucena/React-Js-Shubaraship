import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({category, id, img, price, stock, title}) => {

    const [count, setCount] = useState(1);

    const [finished, setFinished] = useState(false);

    const handleState = () => setFinished(!finished);

    return(
        <div className="detailbox">
            <div>
                <img src={img} alt={title}/>
                <h1>{title}</h1>
                <h2>Precio: ${price}</h2> 
                <p>Cantidad disponible: {stock}</p>
                {!finished ? (     
                    <>               
                    <ItemCount stock={stock} count={count} setCount={setCount} />
                    <button onClick={handleState}>Comprar</button> 
                    </>                   
                ) : (
                    <>
                    <Link to="/cart" onClick={handleState}>
                        <button onClick={handleState}>Terminar mi compra</button>
                    </Link>
                    <button onClick={handleState}>Modificar</button>
                    </>
                )}                
            </div>
        </div>
    );
};

export default ItemDetail;
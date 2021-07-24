import React, { useState } from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({category, id, img, price, stock, title}) => {

    const [count, setCount] = useState(1);

    return(
        <div className="detailbox">
            <div>
                <img src={img} alt={title}/>
                <h1>{title}</h1>
                <h2>Precio: ${price}</h2> 
                <p>Cantidad disponible: {stock}</p>
                <ItemCount stock={stock} count={count} setCount={setCount} />
            </div>
        </div>
    );
};

export default ItemDetail;
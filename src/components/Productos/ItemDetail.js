import React from "react";

const ItemDetail = ({category, id, img, price, stock, title}) => {
    return(
        <div className="detailbox">
            <div>
                <img src={img} alt={title}/>
                <h1>{title}</h1>
                <h2>Precio: ${price}</h2> 
                <p>Cantidad disponible: {stock}</p>
            </div>
        </div>
    );
};

export default ItemDetail;
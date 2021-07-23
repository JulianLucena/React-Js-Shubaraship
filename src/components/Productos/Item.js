import React from "react";

const Item = ({ item }) => {
    return(
        <div className="ItemStyleContainer">
            <img className="ItemStyleImg" src={item.img} alt= {item.title} />
            <h1>{item.title}</h1>
            <h2>Precio: {item.price}</h2>               
        </div>
    );
};

export default Item;
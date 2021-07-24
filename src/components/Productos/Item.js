import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return(
        <div className="ItemStyleContainer">
            <img className="ItemStyleImg" src={item.img} alt= {item.title} />
            <h1>{item.title}</h1>
            <h2>Precio: {item.price}</h2>    
            <Link to={`/detail/${item.id}`}>Ver más...</Link>           
        </div>
    );
};

export default Item;
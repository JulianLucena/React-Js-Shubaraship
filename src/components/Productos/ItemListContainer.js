import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);

    const { id } = useParams();

    const itemsArray = [
        {
            id: 1,
            title: "Funko Pop Figure: All Might",
            img: "./img/All_Might.jpg",
            category: 1,
            price: 2500,
            stock: 10,
        },
        {
            id: 2,
            title: "Funko Pop Figure: Halloween Town Sora",
            img: "./img/Halloween_Sora.png",
            category: 1,
            price: 2500,
            stock: 20,
        },
        {
            id: 3,
            title: "Funko Pop Figure: Queen",
            img: "./img/Queen.png",
            category: 1,
            price: 2500,
            stock: 15,
        }
    ]

    const pedirProductos = () => {
        return new Promise( (resolve, reject) =>{
            setTimeout(() => {
                resolve(itemsArray)
            }, 2000)
        })
    }

    useEffect(() => {
        pedirProductos()
        .then( res => {
            console.log(res)
            setItems(res)
        })
    }, [])

    return <div>
        <ItemList items={items}/>
    </div>
};

export default ItemListContainer;
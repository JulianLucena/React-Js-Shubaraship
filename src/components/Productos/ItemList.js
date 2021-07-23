import React from "react"
import Item from "./Item"

export const ItemList = ( {items} ) => {

    console.log(items)

    return (
        <div>
            {items.map( producto => <Item key={producto.id} item={producto}/>)}
        </div>
    )
}

export default ItemList;
let min = 0;

const ItemCount = ({stock, cantidad, setCount}) => {

    const sumar = () => {
        if (cantidad < stock) {
            setCount(cantidad + 1)         
        }
    }

    const restar = () => {
        if (cantidad > min) {
            setCount(cantidad - 1)
        }
    }

    return(
        <div className="IDContador">            
            <button className="CountBtn" onClick ={restar}>-</button>
            <p className="CountTxt">{cantidad}</p>
            <button className="CountBtn" onClick ={sumar}>+</button>
        </div>        
    );    
};

export default ItemCount;
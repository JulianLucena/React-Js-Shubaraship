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
        <div className="Counter">            
            <button className="CountBtn" onClick ={restar}>-</button>
            <h1>{cantidad}</h1>
            <button className="CountBtn" onClick ={sumar}>+</button>
        </div>        
    );    
};

export default ItemCount;
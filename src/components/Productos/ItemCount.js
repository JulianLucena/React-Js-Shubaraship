let min = 0;

const ItemCount = ({stock, count, setCount}) => {

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)         
        }
    }

    const restar = () => {
        if (count > min) {
            setCount(count - 1)
        }
    }

    return(
        <div className="Counter">            
            <button className="CountBtn" onClick ={restar}>-</button>
            <h1>{count}</h1>
            <button className="CountBtn" onClick ={sumar}>+</button>
        </div>        
    );    
};

export default ItemCount;
import { useState } from 'react';
import './ItemCount.css'

const ItemCount = ({ stock, onAdd }) => {
    const [contador, setContador] = useState(1);

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    };

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    };

    return (
        <div className='row'>
            <div className='col-12 d-flex justify-content-center'>
                <div className='contador d-flex align-items-center justify-content-between rounded-pill mb-1'>
                    <button className='btnDecrementar fs-4 fw-semibold border-0 rounded-pill' onClick={decrementar}>-</button>
                    <strong className='cantidad text-center fs-5'>{contador}</strong>
                    <button className='btnIncrementar fs-5 fw-semibold border-0 rounded-pill' onClick={incrementar}>+</button>
                </div>
            </div>
            <div className='col-12'>
                <button className='btnAgregarProd border-0 rounded-pill fw-semibold p-2' onClick={() => onAdd(contador)} >Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount

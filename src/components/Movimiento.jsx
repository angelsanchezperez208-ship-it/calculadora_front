import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';



const Movimiento = (movimiento) => {
    const { deleteMovimiento } = useContext(GlobalContext);
    const signo = movimiento.movimiento.importe < 0 ? '-' : '+';
  
    return (
        <li className={movimiento.movimiento.importe < 0 ? 'minus' : 'plus'}>
            {movimiento.movimiento.descripcion} <span>{signo}${Math.abs(movimiento.movimiento.importe)}</span>
            <button className='delete-btn' onClick={() => deleteMovimiento(movimiento.movimiento.id)}>x</button>
        </li>
    )
}

export default Movimiento;
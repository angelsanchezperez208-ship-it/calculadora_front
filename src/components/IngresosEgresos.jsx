import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const IngresosEgresos = () => {
  const { movimientos } = React.useContext(GlobalContext);
  const importes = movimientos.map(movimiento => movimiento.importe);

  //egresos
  const egresos = importes
  .filter(item => item < 0)
  .reduce((acc, item) => (acc += item), 0).toFixed(2);

  //ingresos
  const ingresos = importes
  .filter(item => item > 0)
  .reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div>
      <div>Ingresos: ${ingresos}</div>
      <div>Egresos: ${egresos}</div>
    </div>
  )
}

export default IngresosEgresos;
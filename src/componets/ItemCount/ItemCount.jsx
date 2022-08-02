import { useState } from 'react'

const ItemCount = ({ initial=1 , stock=10 , onAdd }) => {
    const [count, setCount] = useState(1)

    const sumar = () => {
      if (count < stock) {
        setCount(count + 1)}
      }
      
    const restar = () => {
      if (count > 1) {
        setCount(count - 1)
      }
     }

     const handleAddToCart = () => {
      onAdd(count)
     }
  return (
    <div className='card w-50 h-25 bg-transparent m-3' >
        <button className='btn-xs btn-outline-success rounded-pill' onClick={sumar}> + </button>
        <label>{ count }</label>
        <button className='btn-xs btn-outline-danger rounded-pill' onClick={restar}> - </button>
        <br />
        <button className='btn btn-outline-success' onClick={handleAddToCart}>Agregar al Carrito</button>
    </div>
  )
}

export default ItemCount

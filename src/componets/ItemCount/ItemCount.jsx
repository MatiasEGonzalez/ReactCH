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
  return (
    <div className='card w-25 bg-transparent rounded-pill margen' >
        <button className='btn-xs btn-outline-success rounded-pill' onClick={sumar}> + </button>
        <label>{ count }</label>
        <button className='btn-xs btn-outline-danger rounded-pill' onClick={restar}> - </button>
    </div>
  )
}

export default ItemCount

import { useState } from 'react'

const ItemCount = () => {
    const [count, setCount] = useState(0)

    const sumar = () => setCount(count + 1)
    const restar = () => setCount(count - 1)
  return (
    <div className='card w-25 bg-transparent rounded-pill margen' >
        <button className='btn-xs btn-outline-success rounded-pill' onClick={sumar}> + </button>
        <label>{ count }</label>
        <button className='btn-xs btn-outline-danger rounded-pill' onClick={restar}> - </button>
    </div>
  )
}

export default ItemCount

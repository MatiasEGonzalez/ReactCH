import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../../helpers/getFetch'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
  // estado un producto
  const [producto, setProducto] = useState({})
  const {detalleId} = useParams()  //  ESTO ME RETORNA UN OBJ
  
  console.log(detalleId)


  //getFetch(detalleId)

  useEffect(()=>{
      getFetch(detalleId)
      .then(respuesta => setProducto(respuesta))

  }, [])
  //console.log(producto)
  return (
    <div>
        ItemDetailContainer
        <ItemDetail producto={producto}/>
      
    </div>
  )
}

export default ItemDetailContainer

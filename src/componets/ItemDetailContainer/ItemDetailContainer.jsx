import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

  const {detalleId} = useParams()  //  ESTO ME RETORNA UN OBJ
  
  console.log(detalleId)

  //getFetch(detalleId)
  return (
    <div>
        ItemDetailContainer
        <ItemDetail />
      
    </div>
  )
}

export default ItemDetailContainer

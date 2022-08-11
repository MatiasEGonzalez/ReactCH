import { doc, getDoc, getFirestore } from 'firebase/firestore'
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

    ////TRAER UN PRODUCTO POR AD --> itemDetailContainer
    useEffect(()=>{
    const db = getFirestore()
    const queryProducto = doc(db, 'productos', 'RtgUtPgykIfcGjXfP79E')
    getDoc (queryProducto)
    .then(response => setProducto( { id: response.id, ...response.data() } ) )
    }, [])

  //useEffect(()=>{
      //getFetch(detalleId)
      //.then(respuesta => setProducto(respuesta))
  //}, [])
  //console.log(producto)
  return (
    <div>
        ItemDetailContainer
        <ItemDetail producto={producto}/>
        
      
    </div>
  )
}

export default ItemDetailContainer

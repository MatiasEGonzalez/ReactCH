import { useState } from "react"
import { useEffect } from "react"
import { getFetch } from "../../../helpers/getFetch"
import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList";



const ItemListContainer = ({ saludar }) => {
    const [ productos, setProductos ] = useState([])
    const [ loading, setLoading ] = useState(true)

      useEffect(()=>{
      getFetch() // mock de una consulta a una api
      .then(respuesta => setProductos(respuesta)) 
      .catch( error => console.log(error))
      .finally(()=> setLoading(false))
    }, [])

    const onAdd = (cant) => {
      console.log(`la cantidad es: ${cant}`)
    }
    

    return (
      <div >
        { saludar }
        
          { loading ? 
            <h1>Cargando ..</h1> 
            : 
            
            <ItemList productos={productos} />
            }
    
        <ItemCount initial={1} stock={10} onAdd={onAdd} />
        </div>
      )
    }
    export default ItemListContainer;
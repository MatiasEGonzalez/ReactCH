import { useState } from "react"
import { useEffect } from "react"
import { getFetch } from "../../../helpers/getFetch"

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

    
    console.log(productos)

    return (
      <div >
        { saludar }
        
          { loading ? 
            <h1>Cargando ..</h1> 
            : 
            
            <ItemList productos={productos} />
            }
    
          
        </div>
      )
    }
    export default ItemListContainer;
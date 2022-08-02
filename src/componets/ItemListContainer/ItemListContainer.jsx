import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

import { getFetch } from "../../../helpers/getFetch"
import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList";



const ItemListContainer = ({ saludar }) => {
    const [ productos, setProductos ] = useState([])
    const [ loading, setLoading ] = useState(true)

    const { categoriaId } = useParams()

      useEffect(()=>{
        if (categoriaId) {
            getFetch() // mock de una consulta a una api
            .then(respuesta => setProductos(respuesta.filter(producto => producto.categoria === categoriaId))) 
            .catch( error => console.log(error))
            .finally(()=> setLoading(false))   
          
        } else {
            getFetch() // mock de una consulta a una api
            .then(respuesta => setProductos(respuesta)) 
            .catch( error => console.log(error))
            .finally(()=> setLoading(false))          
        }

    }, [categoriaId])

    
    console.log(categoriaId)

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
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

import { getFetch } from "../../../helpers/getFetch"

import ItemList from "../ItemList/ItemList";



const ItemListContainer = ({ saludar }) => {
    const [ productos, setProductos ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ bool, setBool ] = useState(true)
    //const [ productos, setProductos ] = useState([])
    
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


    //Agregar Producto
    const agregarProducto = () =>{
      setProductos([
        ...productos,
        { id: productos.length + 1,
          curso: 'Nuevos cursos',
          categoria: 'programacion y desarrollo',
          precio: 2000
        }
      ])
    }
    
    console.log(categoriaId)

    const Loading = () => {
        return <h1>Cargando ..</h1> 
    }

  

    return (
      <div >
        { saludar }
        
        <button onClick={agregarProducto}>Agregar Producto</button>
        
          { loading ? 
             <Loading />
            : 
            
            <ItemList productos={productos} />
            }
    
        
        </div>
      )
    }
    export default ItemListContainer;
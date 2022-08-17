import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, where } from 'firebase/firestore'
import { getFetch } from "../../../helpers/getFetch"

import ItemList from "../ItemList/ItemList";


const ItemListContainer = ({ saludar }) => {
    const [ productos, setProductos ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ bool, setBool ] = useState(true)
    const [ producto, setProducto ] = useState({})
    
    const { categoriaId } = useParams()
    
  


    ////TRAER todos los productos 
    //useEffect(()=>{
    //  const db = getFirestore()
    //  const queryCollection = collection(db, 'productos')
    //  getDocs(queryCollection)
    //  .then(response =>  setProductos( response.docs.map(productos=> ( { id: productos.id, ...productos.data() } ) )))
    //  .catch( error => console.log(error))
    //  .finally(()=> setLoading(false)) 
    //}, [])


    ////TRAER todos los productos pero filtrados
    //useEffect(()=>{
    //  const db = getFirestore()
    //  const queryCollection = collection(db, 'productos')
    //  const queryFiltrada = query(queryCollection, 
    //    where ('precio','>',500),
    //    limit(2),
    //    orderBy('precio','desc'),
    //    )
    //  getDocs(queryFiltrada)
    //  .then(response =>  setProductos( response.docs.map(productos=> ( { id: productos.id, ...productos.data() } ) )))
    //  .catch( error => console.log(error))
    //  .finally(()=> setLoading(false)) 
    //}, [])




    useEffect(()=>{
      if (categoriaId) {
      const db = getFirestore()
      const queryCollection = collection(db, 'productos')
      const queryFiltrada = query(queryCollection, 
        where ('categoria','==', categoriaId),
        
        )
      getDocs(queryFiltrada)
      .then(response =>  setProductos( response.docs.map(productos=> ( { id: productos.id, ...productos.data() } ))))
      .catch( error => console.log(error))
      .finally(()=> setLoading(false)) 
    } else {
      const db = getFirestore()
      const queryCollection = collection(db, 'productos')
      getDocs(queryCollection)
      .then(response =>  setProductos( response.docs.map(productos=> ( { id: productos.id, ...productos.data() } ))))
      .catch( error => console.log(error))
      .finally(()=> setLoading(false)) 
    }


       
  }, [categoriaId])
    console.log(productos)













    
     // useEffect(()=>{
     //   if (categoriaId) {
     //       getFetch() // mock de una consulta a una api
     //       .then(respuesta => setProductos(respuesta.filter(producto => producto.categoria === categoriaId))) 
     //       .catch( error => console.log(error))
     //       .finally(()=> setLoading(false))   
     //     
     //   } else {
     //       getFetch() // mock de una consulta a una api
     //       .then(respuesta => setProductos(respuesta)) 
     //       .catch( error => console.log(error))
     //       .finally(()=> setLoading(false))          
     //   }
    //}, [categoriaId])


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
import ItemCount from '../ItemCount/ItemCount'
import { useCartContext } from '../../Context/CartContext'


import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import { useState } from 'react'
import { Link } from 'react-router-dom'


const ItemDetail = ({producto}) => {
  const [ isCount, setIsCount] = useState(true)

  const {agregarCarrito, cartList } = useCartContext ()

  const onAdd = (cant) => {
    console.log(`la cantidad es: ${cant}`)
    agregarCarrito( {...producto, cantidad: cant})
    setIsCount(false)
  }
  console.log(cartList)
  
  return (
    <Card className="text-center  " style={{ width: '40rem' }}>
      <Card.Header>{producto.categoria}: {producto.curso}</Card.Header>
      <Card.Body className='d-inline-flex'>
          

        <div className="d-inline-flex">
            <Card style={{ width: '18rem' }}  >
              <Card.Img variant="top" src={producto.foto} alt="Producto foto" />
              <Card.Body  >
                <Card.Title>{producto.curso} </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Comprar Curso</Button>
              </Card.Body>
              
            </Card> 
            
        
             
          
          </div>
        
          
         <Card.Text>  
          Precio del curso: ${producto.precio}
        </Card.Text>
      </Card.Body>
      
      <Card.Footer className="text-muted">
        { isCount ?
         <ItemCount initial={1} stock={10} onAdd={onAdd}  />  
         :
         <>
          <Link to={'/cart'}>
            <button className='btn btn-outline-success m-5'>Ver Carrito</button>
          </Link>
          <Link to={'/'}>
            <button className='btn btn-outline-primary m-3'>Seguir comprando</button>
          </Link>
         </>
         }</Card.Footer>
    </Card>

    
  )
}


    
        
        
   





  

export default ItemDetail


import { Card, Col, Row } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../../../Context/CartContext'


const Cart = () => {
 
    const { cartList, vaciarCarrito, precioTotal, eliminarProducto } = useCartContext()
    console.log(cartList)
    return (
      <>
      {cartList.length == 0 ?             

        <Card className="text-center mx-auto" style={{ width: '10rem' }}>
        <CardHeader>No tenes nada en tu carrito aun</CardHeader>
        <button className="btn-outline-light" style={{ borderRadius:"12px", backgroundColor: "#FF9F50", color: "white", margin:"5px", outlineColor:"white" }}>
            <Link to="/list" style={{  color: "white" }}>Ir a comprar</Link>
        </button>
        </Card>
        
        :
        <div>
            <h1>CARRITO</h1>
            <ul>
                {cartList.map( item => (
                  <div key={item.id}>                            
                            <Card className="text-center mx-auto" style={{ width: '40rem' }}>
                                <Row>
                                <Col>
                                    <img src={item.foto} width="230" height="230" style={{ margin: '8px' }}/>
                                </Col>
                                <Col style={{ marginRight: '30px' }}>

                                    <br/><CardHeader >{item.curso}</CardHeader>

                                    <br/>{`Cantidad: ${item.cantidad}`}

                                    <div style={{ marginTop: '5px' }}>{`Precio: ${item.precio}`}</div>
                                    <br/>
                                    <button onClick={() => eliminarProducto(item.id)}>Eliminar Producto</button>                                   
                                </Col>
                                </Row>                              
                            </Card>  
                        </div>
                    ))}  
                </ul>
                
                <Card className="text-center mx-auto" style={{ width: '10rem' }}>
                    <CardHeader>TOTAL</CardHeader>
                    <h3>${precioTotal()}</h3>
                    
                </Card>
                <button className="btn-outline-light" onClick={vaciarCarrito} style={{ borderRadius:"12px", backgroundColor: "#FF9F99", color: "white", margin:"5px", outlineColor:"white" }}>
                    Vaciar Carrito
                </button>
                                
                <br/>
                <br/>                
            </div>
            }
        </>
    )
       
      
   
  
}

export default Cart

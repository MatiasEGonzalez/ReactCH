import { useState } from "react"
import { useEffect } from "react"
import { getFetch } from "../../../helpers/getFetch"
import ItemCount from "../ItemCount/ItemCount"

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'

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
    console.log(productos)

    return (
      <div >
        { saludar }
        
          { loading ? 
            <h1>Cargando ..</h1> 
            :
            productos?.map( producto =>
              
              <div className="d-flex justify-content-center" >
                <Row className="g-3 w-25  m-3 row">                    
                      <Card className="col-sm">
                      <Card.Title>{`${producto.curso}`}</Card.Title>
                        <Card.Img variant="top" src={`${producto.foto}`} className="w-25"/>
                        <Card.Body>                          
                          <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                          </Card.Text>
                          <ItemCount  initial={1} stock={20} onAdd={onAdd} />
                        </Card.Body>
                    </Card>                   
                  
                </Row>
                <Row className="g-3 w-25  m-3 row">                    
                      <Card className="col-sm">
                      <Card.Title>{`${producto.curso}`}</Card.Title>
                        <Card.Img variant="top" src={`${producto.foto}`} className="w-25"/>
                        <Card.Body>                          
                          <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                          </Card.Text>
                          <ItemCount  initial={1} stock={20} onAdd={onAdd} />
                        </Card.Body>
                    </Card>                   
                  
                </Row>
                <Row className="g-3 w-25  m-3 row">                    
                      <Card className="col-sm">
                      <Card.Title>{`${producto.curso}`}</Card.Title>
                        <Card.Img variant="top" src={`${producto.foto}`} className="w-25"/>
                        <Card.Body>                          
                          <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                            
                          </Card.Text>
                          <ItemCount  initial={1} stock={20} onAdd={onAdd} />
                        </Card.Body>
                      
                    </Card>    
                                   
                  
                </Row>
              </div>
              )
            
            
            
            
            
            //<li key={producto.id}>{producto.curso}</li>)
          }
              
          
      </div>
      
    )
}

export default ItemListContainer


//RETOMAR MINURO 01:11:48
/*https://coderhouse.zoom.us/rec/play/BMkepYQCxeWJ2850VVcZTjymMyM7PxZzdY-pu-LMb8Rh1SxEvk8gKz57RM9fPGDgOo6B9_U6nAIPNnZJ.Lz8WW8RwvyZwhNBB?continueMode=true&_x_zm_rtaid=P334FxbdRbuZi_zraxkmTw.1657806582403.bf367118f3e195979ede69c1ed83512b&_x_zm_rhtaid=201*/
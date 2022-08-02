import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ItemDetail = ({producto}) => {
  
  return (
    <Card className="text-center" style={{ width: '40rem' }}>
      <Card.Header>{producto.categoria}: {producto.curso}</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>


        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={producto.foto} alt="Producto foto" />
          <Card.Body>
            <Card.Title>{producto.curso} </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Comprar Curso</Button>
          </Card.Body>
        </Card>
          {/*contador*/}
          Costo del curso: ${producto.precio}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>

    
  )
}


    
        
        
   





  

export default ItemDetail


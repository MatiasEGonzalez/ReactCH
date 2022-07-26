import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from "../ItemCount/ItemCount"


const onAdd = (cant) => {
  console.log(`la cantidad es: ${cant}`)
}

const Item = ({productos}) => {
  return (
        <div className="d-inline-flex  m-5" >
                    <Card style={{ width: '25rem' }} className="align-items-center">
                    <Card.Title>{`${productos.curso}`} </Card.Title>
                    <Card.Img variant="top" src={`${productos.foto}`}  className="w-50 "/>
                    <Card.Body>
                        
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                        <ItemCount initial={1} stock={10} onAdd={onAdd} />
                    </Card.Body>
                    
                    </Card>
        </div>
  )
}

export default Item
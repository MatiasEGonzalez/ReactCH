import React, { memo } from 'react'

import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = memo(
  
  ({productos}) => {
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
                          <Link to={`/detalle/${productos.id}`}>
                             <Button variant="primary">detalle</Button>
                          </Link>
                          
                      </Card.Body>
                      
                      </Card>
          </div>
    )
  }, (prevProp, nextProp) => prevProp.productos.length === nextProp.productos.length

)

export default Item
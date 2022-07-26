import React from 'react'
import Item from '../Item/Item'



const ItemList = ({productos}) => {
  return (
    <div>
        {
            productos?.map( productos => <Item key={productos.id} productos={productos}/> )
        } 
    </div>
  )

}

export default ItemList
import { memo } from 'react'
import Item from '../Item/Item'



const ItemList = memo (
  ({productos}) => {
    return (
      <div>
          {
              productos?.map( productos => <Item key={productos.id} productos={productos}/> )
          } 
      </div>
    )
  
  }
  
)


export default ItemList
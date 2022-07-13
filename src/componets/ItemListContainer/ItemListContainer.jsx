import ItemCount from "../ItemCount/ItemCount"


const ItemListContainer = ({ saludar }) => {
  return (
    <div className="abs-center">
      { saludar }
      
      <ItemCount />
    </div>
    
  )
}

export default ItemListContainer

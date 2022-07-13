import ItemCount from "../ItemCount/ItemCount"


const ItemListContainer = ({ saludar }) => {
    const onAdd = (cant) => {
      console.log(`la cantidad es: ${cant}`)
    }
    return (
      <div className="abs-center">
        { saludar }
        
        <ItemCount  initial={1} stock={20} onAdd={onAdd}/>
      </div>
      
    )
}

export default ItemListContainer

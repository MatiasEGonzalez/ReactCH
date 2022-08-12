import { useCartContext } from '../../../../Context/CartContext'


const Cart = () => {
 
    const { cartList, vaciarCarrito, precioTotal, cantidadTotal, eliminarProducto } = useCartContext()
    console.log(cartList)
    return (
        <div>
            <h1>Carrito</h1>
           
            <ul>
           
                {cartList.map(item => (
                  <li key={item.id}>
                    <div>
                    <img src={item.foto} alt="Foto de producto" className='w-25'/>
                    Curso: {item.curso} - {item.cantidad}  Precio del curso: ${item.precio}
                      
                      
                      <br />
                      
                      <h6> {precioTotal != 0 && `Precio Total: ${precioTotal()}`}</h6>
                      
                     
                    </div>
                    <button onClick={()=> eliminarProducto(item.id)}> X </button>
                  </li>


                  
              ))}
            </ul>
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
            
            
            
                  
        </div>
      
   
    
    )
       
      
   
  
}

export default Cart

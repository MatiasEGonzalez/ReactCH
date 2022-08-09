import { useCartContext } from '../../../../Context/CartContext'

const Cart = () => {

    const { cartList, vaciarCarrito } = useCartContext()

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
                      Total: ${item.cantidad * item.precio}
                    </div>
                  </li>                 
                  
              ))}
            </ul>
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
            

        </div>
      
    
    
    )
       
      
   
  
}

export default Cart

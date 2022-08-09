import { createContext, useState, useContext } from "react";

 const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

 //Componente -> estados para producir renders y que se actualize

 const CartContextProvider = ({children}) => {
    //Aqui puedo declarar todos los estados y funciones globales
   
    const [cartList, setCartList] = useState ([])

    const agregarCarrito = (prod) =>{
        setCartList([
            ...cartList,
            prod
        ])
    }

    const vaciarCarrito = () => {
        setCartList([])
    }

    return(
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            vaciarCarrito
        }}>
            { children }
        </CartContext.Provider>


    )
}

export default CartContextProvider
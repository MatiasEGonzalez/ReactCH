import { createContext, useState, useContext } from "react";

 const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

 //Componente -> estados para producir renders y que se actualize

 const CartContextProvider = ({children}) => {
    //Aqui puedo declarar todos los estados y funciones globales
   
    const [cartList, setCartList] = useState ([])

    const agregarCarrito = (prod) =>{
        const idx = cartList.findIndex(producto => producto.id === prod.id) //retorna la posicion del array que esta ocupando ese objeto, sino hay ni uno devuelve -1
        if (idx != -1) {
            //existe
            //cartList[idx].cantidad += prod.cantidad  /// cant += 5
            let cant = cartList[idx].cantidad
            cartList[idx].cantidad = cant + prod.cantidad
        } else {
            //No existe
            setCartList([
                ...cartList,
                prod
            ])
        }
    }

    const vaciarCarrito = () => {
        setCartList([])
    }

    //funcion total del precio
    const precioTotal = ()=>{
        return cartList.reduce ((acumPrecio, prodObj) => acumPrecio += (prodObj.precio * prodObj.cantidad) , 0) // <-- precio total
    }

    const cantidadTotal = () =>{
        return cartList.reduce((contador, produObject) => contador += produObject.cantidad , 0)
    }

    const eliminarProducto = (id) => {
        setCartList(cartList.filter(prod => prod.id !== id))
    }

    

    return(
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            vaciarCarrito,
            precioTotal,
            cantidadTotal,
            eliminarProducto
        }}>
            { children }
        </CartContext.Provider>


    )
}

export default CartContextProvider
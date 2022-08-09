import { BrowserRouter, Routes, Route, Navigate } from  'react-router-dom'

import NavBar from './componets/NavBar/NavBar'
import ItemListContainer from './componets/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer'



import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Cartwidget from './componets/NavBar/Cartwidget/Cartwidget'
import CartContextProvider from './Context/CartContext'
import Cart from './componets/NavBar/Cartwidget/Cart/Cart'




function App() {
  

  return (
   <BrowserRouter>
      <CartContextProvider>
          <div className='App' >
          <header className="App-header">
              <NavBar />
              <Routes>
              
                    <Route path='/categoria/:categoriaId' element={<ItemListContainer /> } />
                
                    <Route path='/list' element={<ItemListContainer /> } />
                    <Route path='/detalle/:detalleId' element={<ItemDetailContainer /> } />
                    <Route path='/cart' element={<Cart /> } />         
                                   
                  
              </Routes>
              </header>
          </div>
      </CartContextProvider>      
   </BrowserRouter>
   
  )
}

export default App

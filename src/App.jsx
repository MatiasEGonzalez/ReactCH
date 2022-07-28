import { BrowserRouter, Routes, Route } from  'react-router-dom'

import NavBar from './componets/NavBar/NavBar'
import ItemListContainer from './componets/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer'
import Cart from './componets/NavBar/Cartwidget/Cart/Cart'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  

  return (
   <BrowserRouter>
      
      <div className='App' >
      <header className="App-header">
          <NavBar />
          <Routes>
          

           
            
                <Route path='/list' element={<ItemListContainer /> } />
                <Route path='/detalle' element={<ItemDetailContainer /> } />
                <Route path='/cart' element={<Cart /> } />
                
                
                

               
                    

            
            
          
          </Routes>
          </header>
      </div>
   
   </BrowserRouter>
  )
}

export default App

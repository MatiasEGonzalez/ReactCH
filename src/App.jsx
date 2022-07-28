import { BrowserRouter, Routes, Route, Navigate } from  'react-router-dom'

import NavBar from './componets/NavBar/NavBar'
import ItemListContainer from './componets/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer'



import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Cartwidget from './componets/NavBar/Cartwidget/Cartwidget'



function App() {
  

  return (
   <BrowserRouter>
      
      <div className='App' >
      <header className="App-header">
          <NavBar />
          <Routes>
          

           
            
                <Route path='/list' element={<ItemListContainer /> } />
                <Route path='/detalle/:Id' element={<ItemDetailContainer /> } />
                <Route path='/cart' element={<Cartwidget /> } />
                
              
                
                

               
                    

            
            
          
          </Routes>
          </header>
      </div>
   
   </BrowserRouter>
  )
}

export default App

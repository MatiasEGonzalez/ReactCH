


import NavBar from './componets/NavBar/NavBar'
import ItemListContainer from './componets/ItemListContainer/ItemListContainer'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  

  return (
   
    <div className='App' >
      <header className="App-header">
        <div>
        
        <NavBar />
        
        <ItemListContainer saludar={'Contador del Item List Container'} />
        
          

        </div>
        
      </header>
     
    </div>
  )
}

export default App

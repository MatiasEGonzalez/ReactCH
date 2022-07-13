import Formularios from "../Formularios/Formularios"
import Titulos from "../Titulos/titulos"

//EN EL COMPONENTE CONTENEDOR, VAN A ESTAR AGREGADAS LAS LLAMADAS A APIS, FUNCIONES, CARDS.. ETC
const ComponenteContainer = ( {saludar} ) => {
/*
    function saludar (){
        alert ('Hola Matias')
      }
*/   

  return (
    <div>
        <Titulos  titulo= 'Titulo de la app' subTitulo= 'Subtitulo de la app'/>
        <Formularios saludar = { saludar }/>
        {saludar}
    </div>
  )
}

export default ComponenteContainer

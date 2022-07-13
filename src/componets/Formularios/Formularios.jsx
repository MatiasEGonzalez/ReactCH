import Titulos from "../Titulos/titulos"



const Formularios = () => {
    return(
      <div>
        <Titulos  titulo= 'Titulo del form' subTitulo= 'Subtitulo del form'/>
        <form>
        <input type="text" placeholder='Ingrese su nombre' />
        <button>Click</button>
        </form>
      </div>
      
    )
  }

  export default Formularios
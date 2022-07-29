let productos = [
    { id:'1', categoria: 'Idiomas', curso: 'Ingles', precio: 600 , foto:"/Imagenes/logoE.jpeg"},
    { id:'2', categoria: 'Idiomas', curso: 'Frances', precio: 600 , foto:"/Imagenes/logoE.jpeg"},
    { id:'3', categoria: 'Finanzas', curso: 'Tradding', precio: 550, foto: "/Imagenes/logoE.jpeg"},
    { id:'4', categoria: 'Finanzas', curso: 'Futuros', precio: 550, foto: "/Imagenes/logoE.jpeg"},
    { id:'5', categoria: 'Programacion y Desarrollo', curso: 'Diseño web' , precio: 550, foto: "/Imagenes/logoE.jpeg"},
    { id:'6', categoria: 'Programacion y Desarrollo', curso: 'Desarrollo web'  , precio: 550, foto: "/Imagenes/logoE.jpeg"},
    { id:'7', categoria: 'Programacion y Desarrollo', curso: 'Desarrollo de videojuegos' , precio: 550, foto: "/Imagenes/logoE.jpeg"},
    { id:'8', categoria: 'Programacion y Desarrollo', curso: 'JavaScript' , precio: 550, foto: "/Imagenes/logoE.jpeg"},
    { id:'9', categoria: 'Programacion y Desarrollo', curso: 'React' , precio: 150, foto: "/Imagenes/logoE.jpeg"},
    { id:'10', categoria: 'Programacion y Desarrollo', curso: 'Java' , precio: 220, foto: "/Imagenes/logoE.jpeg"},
    { id:'11', categoria: 'Programacion y Desarrollo', curso: 'Back-End' , precio: 170, foto: "/Imagenes/logoE.jpeg"},
    { id:'12', categoria: 'Programacion y Desarrollo', curso: 'Construct3 videojuegos' , precio: 240, foto: "/Imagenes/logoE.jpeg"},
    { id:'13', categoria: 'Programacion y Desarrollo', curso: 'UnrealEngine videojuegos', precio: 450, foto: "/Imagenes/logoE.jpeg"},
    { id:'14', categoria: 'Informatica' , curso: 'Excel', precio: 220, foto: "/Imagenes/logoE.jpeg"},
    { id:'15', categoria: 'Programacion y Desarrollo', curso: 'Programacion Inicial', precio: 340, foto: "/Imagenes/logoE.jpeg"},
    { id:'16', categoria: 'Informatica', curso: 'Introduccion a la informatica', precio: 170, foto: "/Imagenes/logoE.jpeg"},
     
  ]
  
  export const  getFetch = (id) => {

  return new Promise (( resolve, reject)=>{
      setTimeout(()=>{
        if (id) {
          resolve(productos.find(productos = productos.id === id))
      }else{
        resolve(productos)
      }

      }, 1000)
      
  })
}


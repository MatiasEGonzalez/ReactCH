let productos = [
    { id:'1', curso: 'Ingles' ,precio: 600 , foto:"/Imagenes/logoE.jpeg"},
    { id:'2', curso: 'Tradding' ,precio: 550, foto: "/Imagenes/logoE.jpeg"},
    { id:'3', curso: 'Futuros' ,precio: 550, foto: "/Imagenes/logoE.jpeg"},
    { id:'4', curso: 'Diseño web' ,precio: 550, foto: "/Imagenes/logoE.jpeg"},
    { id:'5', curso: 'Desarrollo web'  ,precio: 550, foto: "/Imagenes/logoE.jpeg"},
    { id:'6', curso: 'Desarrollo de videojuegos' ,precio: 550, foto: "/Imagenes/logoE.jpeg"},
    { id:'7', curso: 'JavaScript' ,precio: 550, foto: "/Imagenes/logoE.jpeg"},
    { id:'8', curso: 'React' ,precio: 150, foto: "/Imagenes/logoE.jpeg"},
    { id:'9', curso: 'Java' ,precio: 220, foto: "/Imagenes/logoE.jpeg"},
    { id:'10', curso: 'Back-End' ,precio: 170, foto: "/Imagenes/logoE.jpeg"},
    { id:'11', curso: 'Construct3 videojuegos' ,precio: 240, foto: "/Imagenes/logoE.jpeg"},
    { id:'12', curso: 'UnrealEngine videojuegos' ,precio: 450, foto: "/Imagenes/logoE.jpeg"},
    { id:'13', curso: 'Excel' ,precio: 220, foto: "/Imagenes/logoE.jpeg"},
    { id:'14', curso: 'Programacion Inicial' ,precio: 340, foto: "/Imagenes/logoE.jpeg"},
    { id:'15', curso: 'Introduccion a la informatica' ,precio: 170, foto: "/Imagenes/logoE.jpeg"},
     
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


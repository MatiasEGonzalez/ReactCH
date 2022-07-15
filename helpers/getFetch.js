let productos = [
    { id:'1', curso: 'Ingles' ,precio: 600 , foto:"/Imagenes/logoE.jpeg"},
    { id:'2', curso: 'Tradding' ,precio: 550, foto: "./img/.jpg"},
    { id:'3', curso: 'Futuros' ,precio: 550, foto: "./img/.jpg"},
    { id:'4', curso: 'Diseño web' ,precio: 550, foto: "./img/.jpg"},
    { id:'5', curso: 'Desarrollo web'  ,precio: 550, foto: "./img/.jpg"},
    { id:'6', curso: 'Desarrollo de videojuegos' ,precio: 550, foto: "./img/.jpg"},
    { id:'7', curso: 'JavaScript' ,precio: 550, foto: "./img/.jpg"},
    { id:'8', curso: 'React' ,precio: 150, foto: "./img/.jpg"},
    { id:'9', curso: 'Java' ,precio: 220, foto: "./img/.jpg"},
    { id:'10', curso: 'Back-End' ,precio: 170, foto: "./img/.jpg"},
    { id:'11', curso: 'Construct3 videojuegos' ,precio: 240, foto: "./img/.jpg"},
    { id:'12', curso: 'UnrealEngine videojuegos' ,precio: 450, foto: "./img/.jpg"},
    { id:'13', curso: 'Excel' ,precio: 220, foto: "./img/.jpg"},
    { id:'14', curso: 'Programacion Inicial' ,precio: 340, foto: "./img/.jpg"},
    { id:'15', curso: 'Introduccion a la informatica' ,precio: 170, foto: "./img/.jpg"},
     
  ]
  
  export const  getFetch = () => {
    return new Promise(( resolve, reject) =>{
      //acciones
      setTimeout(()=>{
        resolve(productos)
      }, 3000)
      
        
   
    })
  }
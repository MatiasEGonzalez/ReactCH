import { Card, Col, Row } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../../../Context/CartContext'

import { addDoc, collection, doc, documentId, getDocs, getFirestore, query, updateDoc, where, writeBatch } from "firebase/firestore"
import { useState } from "react"


const Cart = () => {
    const [ id, setId ] = useState('')

    const [formData, setFormData] = useState({
        email:'', 
        name:'', 
        phone:'',
        rEmail:''
    })

    const { cartList, vaciarCarrito, eliminarProducto, precioTotal } = useCartContext()
   


    const guardarOrden = async (e) => {
        e.preventDefault()


        const order = {}
        order.buyer = {email:'f@gmail.com', name:'fede', phone:'321321321'}
        order.buyer = formData


        order.items = cartList.map(prod => {
            return {

                producto: prod.curso,
                id: prod.id,
                precio: prod.precio
            }
        })
        
        order.total = precioTotal()


        const db = getFirestore()
        const queryOrders = collection(db, 'orders')
        addDoc(queryOrders, order)        
        .then(resp => setId(resp.id))
        .catch(err => console.log(err))
        .finally(()=> setFormData({
                email:'', 
                name:'', 
                phone:'',
                rEmail:''
            })
        )


        const queryCollectionStock = collection(db, 'productos')

        const queryActulizarStock = query(
            queryCollectionStock,                  
            where( documentId() , 'in', cartList.map(it => it.id) )        
        )
        const batch = writeBatch(db)

        await getDocs(queryActulizarStock)
        
         .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
             stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
         }) ))
         .catch(err => console.log(err))
        .finally(()=> vaciarCarrito())
        .finally(()=> {
            vaciarCarrito()            
        })
        batch.commit()


    }    
    const handleChange = (e) => {
        
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    
    return (

       <>
      {(cartList.length || id.length) == 0 ?             

        <Card className="text-center mx-auto m-5" style={{ width: '10rem' }}>
        <CardHeader >Aun no tienes nada en el Carrito</CardHeader>
        <button className="btn-outline-light" style={{ borderRadius:"12px", backgroundColor: "#FF9F50", color: "white", margin:"5px", outlineColor:"white" }}>
            <Link to="/list" style={{  color: "white" }}>Ir a comprar</Link>
        </button>
        </Card>
        
        :
        
        <div className="row">
            <h1>Carrito</h1>
            <div className="col-8">
                {id.length > 0 && <h2>El id de su orden es:  {id}</h2> }
                <div className="w-100">                    
                        {cartList.map(producto => (
                            <div key={producto.id}>
                                
                                <img src={producto.foto} alt="Foto de producto" style={{ width: 100 }} />
                               
                                nombre: {producto.curso} - cantidad: {producto.cantidad} - Precio: {producto.precio} - Subtotal: {producto.cantidad * producto.precio}
                                <button onClick={ () => eliminarProducto(producto.id) }> X </button>
                            </div>
                        ))}
                    
                </div>
                <div>
                    <h6>  { precioTotal() !== 0 && `Precio Total: ${ precioTotal() }`} </h6>
                    
                    <button onClick={vaciarCarrito}>Vaciar carrito</button>
                </div>
            </div>
            <div className="col-4">

                <form 
                    onSubmit={ guardarOrden }
                    
                    className="p-2 w-75 border border-2 border-warning rounded" 
                >
                    <label className="ml-0 alert alert-warning">Formulario con sus validaciones</label>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Nombre</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="name"                            
                            placeholder="Ingrese el nombre" 
                            onChange={handleChange}
                            value={formData.name}
                        />                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Phone</label>
                        <input 
                            type="Email"
                            type="text"
                            className="form-control" 
                            name="phone" 
                           
                            onChange={handleChange}
                            placeholder="Ingrese el teléfono"
                            value={formData.phone}
                             />                        
                    </div>
                    <div className="form-group">

                    <label htmlFor="exampleInputEmail1">Email</label>
                        <input 
                        type="email" 
                        className="form-control" 
                        name="email" 
                       
                        onChange={handleChange}
                        placeholder="Enter email" 
                        value={formData.email}
                    />
                    
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Repetir Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        name="rEmail"                            
                        placeholder="Enter email" 
                        onChange={handleChange}
                        value={formData.rEmail}
                    />
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>

            </form>

        </div>    
    </div>
}
  </>
)
}

export default Cart



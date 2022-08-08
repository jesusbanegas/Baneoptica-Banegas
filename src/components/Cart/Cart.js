import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import './Cart.css';

const Cart = () => {

    const [mostrarCart, setMostrarCart] = useState(false)
    const {cart, DeleteAll, eliminarProducto, total, CreateOrder} = useContext(CartContext);

    if (cart.length === 0) {
        return(
            <h1 style={{textAlign:'center', marginTop:'100px', marginBottom:'250px'}}>No hay productos en el carrito. Volver al <Link to='/' style={{color:'blue'}}>Home</Link></h1>
        )
    }
    
    return (mostrarCart === false)

    ? ((<div>
        {
            cart.map((prod) => (
                <div key={prod.id} className="DivisorGeneralCart">
                    <img src={prod.img} className="ImagenesDetalleCart" alt='FotoCarritoDetalle'/>
                    <div>
                        <h2 style={{textDecoration:'underline'}}>{prod.name}</h2>
                        <h2 display={{float:'right'}} style={{fontSize: '20px', fontWeight: '400'}}>Numero de productos: {prod.numProductos}</h2>
                        <h2 style={{fontSize: '20px', fontWeight: '400'}}>Precio total del producto: {prod.suma} $</h2>
                    </div>
                    <button className="BotonEliminarProducto" onClick={() => eliminarProducto(prod.id)}>Eliminar producto del carrito</button>
                </div>
            ))
        }
        <button onClick={DeleteAll} className="BotonEliminarTodos">Eliminar todos los productos de mi carrito</button>
        <h2 style={{marginLeft:'50px', marginTop:'30px'}}>Precio total: {total} $</h2>
        <button className="TerminarMiCompra" onClick={() => setMostrarCart(true)}>Terminar mi compra</button>
    </div>))

    : (<div style={{display:'flex'}}>
        <div className="DivisorFinalCompra">
            <h1 style={{textAlign:'center', textDecoration:'underline'}}>Finalizar compra</h1>
            <p style={{textAlign:'center'}}>Introduzca sus datos para finalizar el pedido:</p>
            <div style={{textAlign:'center'}}>
                <p style={{fontWeight:'500', textDecoration:'underline'}}>Nombre:</p><input type="text" placeholder="Nombre" className="formInput" id="nombre"></input>
                <p style={{fontWeight:'500', textDecoration:'underline'}}>Correo electrónico:</p><input type="email" placeholder="Correo Electrónico" className="formInput" id="correo"></input>
                <p style={{fontWeight:'500', textDecoration:'underline'}}>Teléfono:</p><input type="text" placeholder="Numero de Teléfono" className="formInput" id="telefono"></input>
            </div>
            <button className="BotonTerminarCompra" onClick={() => CreateOrder({nombre: document.getElementById("nombre"), correo: document.getElementById("correo"), telefono: document.getElementById("telefono")})}>Finalizar la compra</button>
        </div>
    <button onClick={() => setMostrarCart(false)} className="VolverAlCarrito">Volver al carrito / Seguir comprando</button>
    </div>
    )

};

export default Cart
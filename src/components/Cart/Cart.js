import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import './Cart.css';

const Cart = () => {
    
    const {cart, DeleteAll, eliminarProducto, total} = useContext(CartContext);
    if (cart.length === 0) {
        return(
            <h1 style={{textAlign:'center', marginTop:'100px'}}>No hay productos en el carrito. Volver al <Link to='/' style={{color:'blue'}}>Home</Link></h1>
        )
    }
    
    return (<div>
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
        <button className="TerminarMiCompra">Terminar mi compra</button>
    </div>)

};

export default Cart
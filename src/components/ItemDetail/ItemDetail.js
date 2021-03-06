import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from "react";
import { Link } from 'react-router-dom';

// Componente que muestra el detalle del item con la información recibida como prop de cada producto.

// La prop "item" proviene del "ItemDetailContainer.js"

const ItemDetail = ({item}) => {
    
    const [numproducto,setNumproducto] = useState(0);
    
    const onAdd = (numProductos) => {
        const mensaje = alert(`Añadiste ${numProductos} unidades a tu carrito`)
        setNumproducto(numProductos)
    };

    const [numero,setNumero] = useState(1);

    return <> <div style={{display:'flex'}}>
        <div className='DivisorGeneral'>
            <h4 className='ID'>ID: {item.id}</h4>
            <div className='DivisorInt'>
                <h3 className='Nombre'>{item.name}</h3>
                <h3 className='PrecioProducto'>Precio: {item.price} $</h3>
                <h3 className='StockProducto'>Stock disponible: {item.stock}</h3>
            </div>
            <img src={item.img} className='ImagenProducto'/>
            <h5 className='DescripcionTitulo'>Breve descripción del producto:</h5>
            <p className='Descripcion'>{item.description}</p>
        </div>
        {numproducto === 0 ? (
            <ItemCount initial={1} stock={item.stock} NombreProducto={item.name} onAdd={onAdd} numero={numero} setNumero={setNumero}/>
            ) : (
                <Link to="/cart" style={{textDecoration:'none', color:'black'}}><button className='BotonIrAlCarrito'>Ir al carrito</button></Link>
            )}
    </div>
    </>
};

export default ItemDetail
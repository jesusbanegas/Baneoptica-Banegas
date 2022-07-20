import './ItemDetail.css';

// Componente que muestra el detalle del item con la información recibida como prop de cada producto.

// La prop "item" proviene del "ItemDetailContainer.js"

const ItemDetail = ({item}) => {
    return <div className='DivisorGeneral'>
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
};

export default ItemDetail
import './ItemDetail.css';

const ItemDetail = ({item}) => {
    return <div className='DivisorGeneral'>
        <h4 className='ID'>ID: {item.id}</h4>
        <div className='DivisorInt'>
            <h3 className='Nombre'>{item.name}</h3>
            <h3 className='PrecioProducto'>Precio: {item.price} $</h3>
            <h3 className='StockProducto'>stock disponible: {item.stock}</h3>
        </div>
        <img src={item.img} className='ImagenProducto'/>
        <h5 className='DescripcionTitulo'>Breve descripción del producto:</h5>
    <p className='Descripcion'>{item.description}</p>
    </div>
};

export default ItemDetail
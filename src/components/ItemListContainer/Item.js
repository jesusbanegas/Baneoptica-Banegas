import "./Item.css";

const Item = ({item}) => {
    console.log(item)
    return <div className="ItemStyle">
        <h4 className="Id">ID: {item.id}</h4>
        <img src={item.img} className="Imagenes"/>
        <h3 className="Precio">{item.price} $</h3>
        <h3 className="NombreItem">{item.name}</h3>
        <div className='DetalleProducto'>
            <h3 className="TextoDetalle">
                <a className="linkDetalle" href='#'>Ver detalle del producto</a>
            </h3>
        </div>
        <h3 className="Stock">Stock disponible: {item.stock}</h3>
    </div>
};


export default Item
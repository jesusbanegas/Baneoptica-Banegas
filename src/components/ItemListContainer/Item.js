import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({item}) => {

    return <><div className="ItemStyle">
        <h4 className="Id">ID: {item.id}</h4>
        <img src={item.img} className="Imagenes" alt={item.name}/>
        <h3 className="Precio">{item.price} $</h3>
        <h3 className="NombreItem">{item.name}</h3>
        <div className='DetalleProducto'>
            <h3 className="TextoDetalle">
                <Link className="linkDetalle" to={`/item/${item.id}`}>Ver detalle del producto</Link>
            </h3>
        </div>
        <h3 className="Stock">Stock disponible: {item.stock}</h3>
    </div>
</>
};


export default Item
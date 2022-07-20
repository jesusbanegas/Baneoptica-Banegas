import {useParams, Link } from "react-router-dom";
import { useState } from "react";
import products from "../../mock/products";
import ItemDetail from "./ItemDetail";
import ItemCount from "../ItemCount/ItemCount";

// Este componente recopila la información de "products.js" simulando un retraso al recibir los productos de "2s".
// Lo que devuelve es todo lo relacionado al detalle del producto, es decir, el componente "ItemDetail.js" y el "ItemCount.js"

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [item,setItem] = useState(null)
    const getItem = new Promise((res,rej) => {
        setTimeout(() =>{
            res(products[id-1])
        },2000);
    });
    getItem
    .then((data) =>{
        setItem(data)
    })
    .catch((error) => {
        console.log(error);
    });

    const onAdd = (numProductos) => {
        const mensaje = alert(`Añadiste ${numProductos} unidades a tu carrito`)
    }

    return item && (<> <div style={{display:'flex'}}><ItemDetail item={item}/>
    <ItemCount initial={1} stock={item.stock} NombreProducto={item.name} onAdd={onAdd}/>
    </div>
    <Link to='/' style={{fontSize:'20px', padding:'5px', textDecoration:'none', marginTop:'10px', float:'right',marginRight:'20px',color:'black', marginBottom:'15px'}}>Volver a inicio</Link>
    </>
)};

export default ItemDetailContainer
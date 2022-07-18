import { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "./ItemList";
import products from "../../mock/products";

// El "greeting" con el texto provisional "saludos" se lo manda desde "App.js"

const ItemListContainer = ({greeting}) => {

    // Llamamos a los productos simulando un retardo en la red, a "products.js"
    
    const [items, setItems] = useState([]);
    useEffect(()=> {
        const llamarProductos = new Promise((res,rej) => {
            setTimeout(() => {
                res(products);
            }, 2000);
        });
        llamarProductos
        .then((data) => {
            setItems(data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    const onAdd = (numProductos) => {
        const mensaje = alert(`Añadiste ${numProductos} unidades a tu carrito`)
    }

    return <><h1 style={{display:'flex',justifyContent:'center'}}>{greeting}</h1> 
    <ItemList items = {items}/>
    <ItemCount initial={1} stock={5} NombreProducto={'Gafas Graduadas'} onAdd={onAdd}/>
    </>
};

export default ItemListContainer
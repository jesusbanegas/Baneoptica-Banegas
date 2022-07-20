import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import products from "../../mock/products";
import { useParams, Link } from "react-router-dom";

// El "greeting" con el texto provisional "saludos" se lo manda desde "App.js"

const ItemListContainer = ({greeting}) => {

    //Cogemos con el useParams "category" del link del sitio
    
    const {category} = useParams()

    // Llamamos a los productos simulando un retardo en la red, a "products.js"
    
    const [items, setItems] = useState([]);
    useEffect(()=> {
        const llamarProductos = new Promise((res,rej) => {
            setTimeout(() => {
                res(category ? products.filter(obj => obj.category === category) : products);
            }, 2000);
        });
        llamarProductos
        .then((data) => {
            setItems(data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [category]);

    return <>
        <h1 style={{display:'flex',justifyContent:'center'}}>{greeting}</h1> 
        <ItemList items = {items}/>
        <Link to='/' style={{fontSize:'20px', padding:'5px', textDecoration:'none', marginTop:'10px', float:'right',marginRight:'20px',color:'black', marginBottom:'15px'}}>Volver a inicio</Link>
    </>
};

export default ItemListContainer
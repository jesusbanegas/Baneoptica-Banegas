import {useParams } from "react-router-dom";
import { useState } from "react";
import products from "../../mock/products";
import ItemDetail from "./ItemDetail";

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

    return item && <ItemDetail item={item}/>
};

export default ItemDetailContainer
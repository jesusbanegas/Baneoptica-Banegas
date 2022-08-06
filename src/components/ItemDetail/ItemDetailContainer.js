import {useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import {doc, getDoc, getFirestore} from "firebase/firestore";

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [item,setItem] = useState(null)
    const [loading,setLoading] = useState(true)
    
    const getProduct = async () => {
        setLoading(true);
        const db = getFirestore();
        const productConfig = doc(db, 'items', id)
        getDoc(productConfig).then((snapshot) => {
            setItem({...snapshot.data(), id})
            setLoading(false);
        });
    };

    useEffect(()=> {
        getProduct();
    }, []);

    console.log(item)

    return loading ? <h1 style={{textAlign:'center', marginTop:'100px', marginBottom:'250px'}}>Cargando Producto...</h1>
    : (item && (<> <ItemDetail item={item}/>
    </>));
};

export default ItemDetailContainer
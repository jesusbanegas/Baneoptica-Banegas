import {useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import {doc, getDoc, getFirestore} from "firebase/firestore";

// Lo que devuelve es todo lo relacionado al detalle del producto, es decir, el componente "ItemDetail.js" y el "ItemCount.js"

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

    return loading ? <h1 style={{textAlign:'center', marginTop:'100px'}}>Cargando Producto...</h1>
    : (item && (<> <ItemDetail item={item}/>
    <Link to='/' style={{fontSize:'20px', padding:'5px', textDecoration:'none', marginTop:'10px', float:'right',marginRight:'20px',color:'black', marginBottom:'15px'}}>Volver a inicio</Link>
    </>));
};

export default ItemDetailContainer
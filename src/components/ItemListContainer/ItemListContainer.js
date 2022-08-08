import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";

const ItemListContainer = () => {

    const {category} = useParams()

    const [items, setItems] = useState([]);
    const [loading,setLoading] = useState(false)
    
    const getProducts = async () => {
        setLoading(true);
        const db = getFirestore();
        await getDocs(category ? (query(collection(db, 'items'), where("category", "==", category))) : (collection(db, 'items'))).then((snapshot) => {
            setLoading(false);
            const dataExtraida = snapshot.docs.map((datos) =>{
                return {...datos.data(), id: datos.id}
            });
            setItems(dataExtraida)
        })
        .catch((error) => {
            console.log(error);
        });
    };
    
    useEffect(()=> {
        getProducts();
    }, [category]);

    return loading 
    ? <h1 style={{textAlign:'center', marginTop:'100px', marginBottom:'250px'}}>Cargando Productos...</h1>
    : (<> <ItemList items = {items}/>
    </>);
};

export default ItemListContainer
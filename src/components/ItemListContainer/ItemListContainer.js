import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams, Link } from "react-router-dom";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";

const ItemListContainer = () => {

    //Cogemos con el useParams "category" del link del sitio
    
    const {category} = useParams()

    // Llamamos a los productos a la firebase de Google, y también filtramos por categoria si la obtenemos del enlace con "useParams()"
    
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
        });
    };
    
    
    useEffect(()=> {
        getProducts();
    }, [category]);

    return loading 
    ? <h1 style={{textAlign:'center', marginTop:'100px'}}>Cargando Productos...</h1>
    : (<> <ItemList items = {items}/>
    <Link to='/' style={{fontSize:'20px', padding:'5px', textDecoration:'none', marginTop:'10px', float:'right',marginRight:'20px',color:'black', marginBottom:'15px'}}>Volver a inicio</Link>
    </>);
};

export default ItemListContainer
import ItemCount from "../ItemCount/ItemCount";

// El "greeting" con el texto provisional "saludos" se lo manda desde "App.js"

const ItemListContainer = ({greeting}) => {

    const onAdd = (numProductos) => {
        const mensaje = alert(`Has comprado ${numProductos} unidades`)
    }

    return <><h1 style={{display:'flex',justifyContent:'center'}}>{greeting}</h1> 
    <ItemCount initial={1} stock={7} NombreProducto={'Gafas Graduadas'} onAdd={onAdd}/>
    </>
};

export default ItemListContainer
import Item from "./Item";

const ItemList = ({items}) => {
    console.log(items)
    
    // El llamado asincrónico de 2 seg viene del "ItemListContainer", donde se llama a los productos
    // del "./mock/products.js"

    return(
        <>
            {items.map((item) => (
                <Item item={item} key={item.id}/>
            ))};
        </>
    );
};

export default ItemList
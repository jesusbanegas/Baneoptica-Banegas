import { createContext, useState } from "react";

export const CartContext = createContext();

const Provider = (props) => {

    const [cart,setCart] = useState([])

    const AddToCart = (item, numProductos) => {
        
        if (IsInCart(item.id) === true) {
            // Suma de numProductos antiguo con numProductos nuevo
            alert(`Se agregaron ${numProductos} unidad/es más al carrito`)
            const Filtro = (((cart.filter((iter) => iter.id === item.id))[0]).numProductos)
            const NuevoNumero = Filtro + numProductos
            const newCart = cart.filter((iter) => iter.id !== item.id)
            setCart([...newCart,{...item,numProductos: NuevoNumero}])
        }
        else{
            alert(`Añadiste ${numProductos} unidad/es a tu carrito`)
            setCart([...cart,{...item,numProductos}]);
        };
    };

    const IsInCart = (id) => {
        return cart.some(prod => prod.id === id)
    };

    console.log(cart)

    return <CartContext.Provider value={{cart, AddToCart}}>
        {props.children}
        </CartContext.Provider>
};

export default Provider
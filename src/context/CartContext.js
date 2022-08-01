import { useEffect } from "react";
import { createContext, useState } from "react";

export const CartContext = createContext();

const Provider = (props) => {

    const [cart,setCart] = useState([])
    const [total,settotal] = useState(0);

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

    //Si el item está en el carrito, devuelve "True".
    
    const IsInCart = (id) => {
        return cart.some(prod => prod.id === id)
        
    };

    //Expresión para sumar la cantidad de un único producto:

    useEffect(() => {
        for(var i=0 ; i<cart.length; i++) {
            const SumaProducto = cart[i].price * cart[i].numProductos;
            cart[i].suma = SumaProducto
        };
        
    },[cart]);

    //Expresión para calcular la suma total:

    useEffect(() => {
        let sumatoria = 0;
        for(var i=0 ; i<cart.length; i++) {
            sumatoria = sumatoria + cart[i].suma
            settotal(sumatoria)
        }
    },[cart]);

    //Funcion que elimine un único elemento del carrito:

    const eliminarProducto = (id) => {
        setCart(cart.filter((iter) => iter.id !== id))
    };

    //Funcion que borre todos los productos del carrito:

    const DeleteAll = () => {
        setCart([])
    };

    return <CartContext.Provider value={{cart, AddToCart, DeleteAll, eliminarProducto, total}}>
        {props.children}
        </CartContext.Provider>
};

export default Provider
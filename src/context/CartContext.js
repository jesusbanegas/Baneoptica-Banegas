import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useEffect } from "react";
import { createContext, useState } from "react";
import swal from 'sweetalert';

export const CartContext = createContext();

const Provider = (props) => {

    const [cart,setCart] = useState([])
    const [total,settotal] = useState(0);

    const AddToCart = (item, numProductos) => {
        
        if (IsInCart(item.id) === true) {
            swal(`Se agregaron ${numProductos} unidad/es más al carrito`, "Consulta el carrito para ver tus productos", "success");
            const Filtro = (((cart.filter((iter) => iter.id === item.id))[0]).numProductos)
            const NuevoNumero = Filtro + numProductos
            const newCart = cart.filter((iter) => iter.id !== item.id)
            setCart([...newCart,{...item,numProductos: NuevoNumero}])
        }
        else{
            swal(`Añadiste ${numProductos} unidad/es a tu carrito`, "Consulta el carrito para ver tus productos", "success");
            setCart([...cart,{...item,numProductos}]);
        };
    };

    const IsInCart = (id) => {
        return cart.some(prod => prod.id === id)
        
    };

    useEffect(() => {
        for(let i=0 ; i<cart.length; i++) {
            const SumaProducto = cart[i].price * cart[i].numProductos;
            cart[i].suma = SumaProducto
        };
        
    },[cart]);

    useEffect(() => {
        let sumatoria = 0;
        for(let i=0 ; i<cart.length; i++) {
            sumatoria = sumatoria + cart[i].suma
            settotal(sumatoria)
        }
    },[cart]);

    const eliminarProducto = (id) => {
        setCart(cart.filter((iter) => iter.id !== id))
    };

    const DeleteAll = () => {
        setCart([])
    };

    const CreateOrder = (prop) => {
        let today = new Date();
        const Order = {
            buyer: {name: prop.nombre.value, email: prop.correo.value, phone: prop.telefono.value},
            items: cart.map((producto) => ({
                id: producto.id,
                title: producto.name,
                price: producto.price,
                cantidad: producto.numProductos 
            })),
            date: today.toLocaleDateString('es-ES'),
            total: total
        };
        console.log(prop.nombre.value)

        if (prop.nombre.value !== '' && prop.correo.value !== '' && prop.telefono.value !== ''){
            
            swal({
                title: "Finalizar tu compra?",
                text: "Al finalizar tu compra se te proporcionará tu ID de referencia, guardalo!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                    const db = getFirestore();
                    const OrderCollectionQuery = collection(db, 'orders');
                    addDoc(OrderCollectionQuery, Order)
                    .then((snapshot) => {
                        swal(`Tu ID de referencia es: ${snapshot.id}`, {
                            icon: "success",
                          });
                    })
                    .catch((error) => {
                        console.log(error)
                        swal("Algo fue mal", {
                            icon: "error",
                          });
                    });
                } else {
                  swal("Ya puedes seguir navegando");
                }
              });
        }
        else{
            swal("Debes rellenar todos los campos", {
                icon: "warning",
              });
        };
    };

    return <CartContext.Provider value={{cart, AddToCart, DeleteAll, eliminarProducto, total, CreateOrder}}>
        {props.children}
        </CartContext.Provider>
};

export default Provider
import { useState, useEffect } from "react";
import "./ItemCount.css";

const ItemCount = ({stock,initial,NombreProducto, onAdd}) => {

    // Las props provienen del "ItemListContainer.js"
    
    const [numero,setNumero] = useState(parseInt({initial}));
    
    const sumar = () => {
        numero > stock ? (numero = numero) : (setNumero (numero + 1))
    };

    const restar = () => {
        setNumero (numero - 1);
    };
    
    // Con el useEffect guardamos el valor inicial recibido como prop "initial"
    
    useEffect(() => {
        setNumero(parseInt(initial))
    },[initial]);

    useEffect(() => {
        stock = parseInt(stock)
    },[stock]);

    if (numero < parseInt(initial)){
        setNumero(parseInt(initial))
    }

    return <div className="ContenedorGeneral">
        <h2 className="NombreProducto">{NombreProducto}</h2>
        <div className="ContenedorInterior">
            <button onClick={restar} className="Boton1">-</button>
            <h3>{
            numero <= stock ? (<h1 className="Numero">{numero}</h1>) : (<h5 className="NoHayStock">No hay stock</h5>)
            }
            </h3>
            <button onClick={sumar} className="Boton2">+</button>
        </div>
        <div>
            <button onClick={()=> (numero <= stock ? onAdd(numero) : alert('No hay stock!'))} className="AñadirCarrito">Añadir al carrito</button>
        </div>
    </div>
};

export default ItemCount
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
    
    const {cart} = useContext(CartContext);
    return <div>
        {
            cart.map((prod) => (
                <div key={prod.id} style={{border:'1px solid black', margin:'10px', display:'flex'}}>
                    <img src={prod.img} style={{width:'150px'}}/>
                    <div>
                        <h2>{prod.name}</h2>
                        <h2 display={{float:'right'}}>Numero de productos: {prod.numProductos}</h2>
                    </div>
                </div>
            ))
        };
    </div>

};

export default Cart
import { Link } from 'react-router-dom';
import FotoCarrito from './FotoCarrito.jpg';

const Styles ={
    CartWidgetStyles: {
        backgroundColor: 'white',
        height: '60px',
        borderRadius:'100px',
},
    CartWidgetContainer: {
        display: 'flex',
        marginRight:'40px',
        marginLeft:'30px',
        marginTop:'20px',
    },
    CartWidgetNumber:{
        marginLeft:'2px',
        textDecoration:'none',
    },
    CartWidgetLink:{
        textDecoration:'none',
        color:'black',
    },
};

const CartWidget = ({CartWidgetProps}) => {
    return <Link to='/cart' className='CartWidgetLink' style={Styles.CartWidgetLink}>
    <div style = {Styles.CartWidgetContainer}>
        <img src={FotoCarrito} style = {Styles.CartWidgetStyles} alt="Carrito"/>
        {CartWidgetProps === 0 ? null :<h3 style = {Styles.CartWidgetNumber}>{CartWidgetProps}</h3>}
    </div>
    </Link>
};

export default CartWidget
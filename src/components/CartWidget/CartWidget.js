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

// La "prop" se la manda el "NavBar.js, para poder cambiar el número en función de los items"

const CartWidget = ({CartWidgetProps}) => {
    return <a className='CartWidgetLink' href='#' style={Styles.CartWidgetLink}>
    <div style = {Styles.CartWidgetContainer}>
        <img src={FotoCarrito} style = {Styles.CartWidgetStyles} alt="Carrito"/>
        <h3 style = {Styles.CartWidgetNumber}>{CartWidgetProps}</h3>
    </div>
    </a>
};

export default CartWidget
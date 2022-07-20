import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import {Link} from 'react-router-dom';

const Styles ={
    NavBarStyles: {
        backgroundColor: 'white',
        height: '100px',
        borderRadius:'100px',
        marginLeft:'50px',
        width:'1170px',
        marginTop:'15px',
}
};

// Componente que muestra la barra de navegación del e-commerce, se mostrará todo el tiempo.

const NavBar = () => {

    return <div style = {Styles.NavBarStyles}>
        <div className='generalContainer'>
            <Link className='Logo' to='/'>BaneÓptica</Link>
            <nav className="NavBarlist">
                <ul className='NavBarul'>
                    <li className='NavBaritem'>
                        <Link className='listlink' to="/categoria/graduadas">Gafas Graduadas</Link>
                    </li>
                    <li className='NavBaritem'>
                        <Link className='listlink' to="/categoria/sol">Gafas de sol</Link>
                    </li>
                    <li className='NavBaritem'>
                        <Link className='listlink' to="/categoria/lentillas">Lentillas</Link>
                    </li>
                </ul>
            </nav>
            <button className='login'>LOGIN</button>
            <CartWidget CartWidgetProps={1}/>
        </div>
    </div>
}

export default NavBar
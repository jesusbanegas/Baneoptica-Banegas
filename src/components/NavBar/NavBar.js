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

const NavBar = () => {
    return <div style = {Styles.NavBarStyles}>
        <div className='generalContainer'>
            <a className='Logo' href='#'>BaneÓptica</a>
            <nav className="NavBarlist">
                <ul className='NavBarul'>
                    <li className='NavBaritem'>
                        <Link className='listlink' to='graduadas'>Gafas Graduadas</Link>
                    </li>
                    <li className='NavBaritem'>
                        <a className='listlink' href='#'>Gafas de sol</a>
                    </li>
                    <li className='NavBaritem'>
                        <a className='listlink' href='#'>Lentillas</a>
                    </li>
                </ul>
            </nav>
            <button className='login'>LOGIN</button>
            <CartWidget CartWidgetProps={1}/>
        </div>
    </div>
}

export default NavBar
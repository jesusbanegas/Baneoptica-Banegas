import './NavBar.css';

const Styles ={
    NavBarStyles: {
        backgroundColor: 'white',
        height: '100px',
        borderRadius:'100px',
        marginLeft:'50px',
        marginRight:'50px',
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
                        <a className='listlink' href='#'>Gafas Graduadas</a>
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
        </div>
    </div>
}

export default NavBar
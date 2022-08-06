import { Link } from "react-router-dom";

const FooterNav = () => {
    return <div style={{backgroundColor:'white', height:'100px', marginTop:'75px'}}>
        <Link to='/' style={{fontSize:'20px', padding:'5px', textDecoration:'none', marginTop:'35px', float:'right',marginRight:'35px',color:'black', marginBottom:'15px'}}>Volver a inicio</Link>
    </div>
};

export default FooterNav
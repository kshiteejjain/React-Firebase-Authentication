import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
import { useCookies, CookiesProvider } from 'react-cookie';

function Nav() {
    const [cookies, setCookie] = useCookies();
    return (
        <nav className="navbar">
            <div className="container">
                <h1 className="logo"><Link to="/Home"> <img src={Logo} width="60" alt="Logo" /> </Link></h1>
                <CookiesProvider>
                <div className="menu">
                    <Link to="/Home"> Home </Link>
                    <Link to="/About"> About </Link>
                    <Link to="/Contact"> Contact </Link>
                    {cookies.access_token != '' ? <Link to="/Login"> Login </Link> : ''}
                </div>
                </CookiesProvider>
            </div>
        </nav>
    );
}

export default Nav;

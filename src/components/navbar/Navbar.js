import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Button} from "../buttons/Button";
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(!false);

    const [button , setButton] = useState(true);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    window.addEventListener('resize' , showButton);

    return (<>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-log">
                    TEST <i className="fab fa-typo3"></i>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link className="nav-links" to="/" onClick={closeMobileMenu}>
                            home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-links" to="/services" onClick={closeMobileMenu}>
                            service
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-links-mobile" to="/sign-up" onClick={closeMobileMenu}>
                            Sign up
                        </Link>
                    </li>
                </ul>
                {button &&  <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
        </nav>
    </>)
}


export default Navbar

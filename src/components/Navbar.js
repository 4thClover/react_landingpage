import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from "./Button"


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    //Handlers
    const clickHandler = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

// Fires off when < 960 pixels
const showButton = () => {
    if(window.innerWidth<= 960) {
        setButton(false);
    }else {
        setButton(true);
    }
};

// To avoid a refresh in mobile mode
useEffect(() => {
    showButton();
},[]);

// Toggle button when resizing to mobile
window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        Home <i className="fab fa-typo3" />
                    </Link>
                    <div className="menu-icon" onClick={clickHandler}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/foundation" className="nav-links" onClick={closeMobileMenu}>
                                Foundation
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle="btn--outline">Sign Up</Button>}
                    </div>
            </nav>
        </>
    );
}

export default Navbar;

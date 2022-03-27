import React from 'react';
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <>
            <div className='logo'>
                {/*<img src="./img/logo.png" alt="logo Charle Cantin"/>*/}
            </div>
            <div className="navigation">
                <ul>
                    <NavLink to="/" exact='true' className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>accueil</li>
                    </NavLink>
                    <NavLink to="/galerie" exact='true' className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>galerie</li>
                    </NavLink>
                    <NavLink to="/tarifs&prestations" exact='true'
                             className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>prestations</li>
                    </NavLink>
                    <NavLink to="/contact" exact='true' className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>contact</li>
                    </NavLink>
                </ul>
            </div>
        </>
    )
        ;
}

export default Header;
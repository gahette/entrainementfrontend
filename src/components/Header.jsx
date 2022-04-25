import React from 'react';
import {NavLink} from "react-router-dom";
import logo from '../assets/img/logo.png'

function Header() {

    return (
        <div className='header'>
            <div className='logo'>
                <img src={logo} alt="logo"/>
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
                        <li id='prestation'>prestations</li>
                    </NavLink>
                    <NavLink to="/contact" exact='true' className={(nav) => (nav.isActive ? "nav-active" : "")}>
                        <li>contact</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    )
        ;
}

export default Header;
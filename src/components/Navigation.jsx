import React from 'react';
import {NavLink} from "react-router-dom";


function Navigation() {
    return (
        <div className='nagigation'>
            <ul>
                <NavLink to="/" exact='true'>
                    <li>accueil</li>
                </NavLink>
                <NavLink to="/galerie" exact='true'>
                    <li>galerie</li>
                </NavLink>
                <NavLink to="/tarifs&prestations" exact='true'>
                    <li>prestations</li>
                </NavLink>
                <NavLink to="/contact" exact='true'>
                    <li>contact</li>
                </NavLink>
            </ul>
        </div>

    );
}

export default Navigation;
import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";
import {NavLink} from "react-router-dom";
import Legacy from "../pages/Legacy";

function Footer() {
    return (
        <div className='footer'>
            <div className="icon">
                <FontAwesomeIcon icon={faFacebook} className="fb"/>
                <FontAwesomeIcon icon={faInstagram} className="ig"/>
            </div>
            <span>@2022 charles cantin.</span>

            <NavLink to="/mentionslegales" exact="true" element={<Legacy/>} className='legacy'>
                mentions légales
            </NavLink>
        </div>
    )
        ;
}

export default Footer;
import React, {useEffect, useState} from 'react';
import {BACKEND_URL} from "../helpers";
import axios from "axios";

function Pictures() {
    const [isloading, setIsloading] = useState(true)
    const [pictures, setPictures] = useState(null)
    const [cats, setCats] = useState([])
    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleNavbarOpen = () => {
        setNavbarOpen(!navbarOpen)
    }

    useEffect(() => {
        axios.get(`${BACKEND_URL}/items/galery`)
            .then(res => {
                setPictures(res.data.data)
                setIsloading(false)
            })
    }, [])
    useEffect(() => {
        axios.get(`${BACKEND_URL}/items/categories`)
            .then(res => {
                setCats(res.data.data)
                setIsloading(false)
            })
    }, [])


    return (
        <div className='galery'>
            <div className={`navbar ${navbarOpen ? 'show-nav' : 'hide-nav'}`}>

                <ul className="navbar__links">
                    {isloading ? 'Loading..' : cats.map((cat, index) =>
                        <li className="navbar__link" key={index}><span>{cat.name}</span></li>)}
                </ul>
                <button className='burger' onClick={handleNavbarOpen}>
                    <span className="bar">

                    </span>
                </button>
            </div>
            <div className='pictures'>
                {isloading ? 'Loading..' : pictures.map((picture, index) =>
                    <img src={`${BACKEND_URL}/assets/` + picture.picture} key={index}
                         alt="photo de la page d'accueil"/>)}
            </div>
        </div>

    );
}

export default Pictures;
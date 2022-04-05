import React, {useEffect, useState} from 'react';
import axios from "axios";
import {BACKEND_URL} from "../helpers";

function Pictures() {
    const [isloading, setIsloading] = useState(true)
    const [pictures, setPictures] = useState(null);
    const galeries = ["Baptême", "Bébé", "Couple", "Famille", "Grossesse", "Mariage", "Portrait"]

    useEffect(() => {
        axios.get(`${BACKEND_URL}/items/galery`)
            .then(res => {
                setPictures(res.data.data)
                setIsloading(false)
            })
    }, [])


    return (
        <div className='galery'>
            <div className='navbar show__nav'>
                <ul className="navbar__links">
                    {galeries.map((categories) => (
                        <li className='navbar__link'>{categories}</li>
                    ))}
                </ul>
                <button className='burger'>
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
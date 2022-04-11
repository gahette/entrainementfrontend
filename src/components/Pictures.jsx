import React, {useEffect, useState} from 'react';
import {BACKEND_URL} from "../helpers";
import axios from "axios";

function Pictures() {
    const [pictures, setPictures] = useState([])
    const [isloading, setIsloading] = useState(true)
    const [cats, setCats] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("");
    const [navbarOpen, setNavbarOpen] = useState(false)

    //remove duplicates in array cats
    const newCats = [...new Map(cats.map((item) => [item["name"], item])).values()]

    const handleClick = (event) => {
        setSelectedCategory(event.target.id)

    }

    const handleNavbarOpen = () => {
        setNavbarOpen(!navbarOpen)
    }

    useEffect(() => {

        const abortController = new AbortController();
        const signal = abortController.signal;


        axios.get(`${BACKEND_URL}/items/galery`, {signal: signal})
            .then(res => {
                setCats(res.data.data)
                setPictures(res.data.data)
                setIsloading(false)

            })
        return function cleanup() {
            abortController.abort()
        }


    }, [])

    return <div className='galery'>

        <div className={`navbar ${navbarOpen ? 'show-nav' : 'hide-nav'}`}>
            <ul className="navbar__links" onClick={handleNavbarOpen}>
                {isloading ? 'Loading..' :
                    newCats
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((newCat, index) =>
                            <li className="navbar__link" key={index}>
                                <span id={newCat.name} onClick={handleClick}>{newCat.name}</span>
                            </li>)}
            </ul>
            <button className='burger' onClick={handleNavbarOpen}>
                <span className="bar">
                </span>
            </button>
        </div>

        <div className="cancel">
            {selectedCategory &&
                <h5 className='button-cancel' onClick={() => setSelectedCategory("")}>Annuler recherche</h5>}
        </div>

        <section className='images'>
            {isloading ? 'Loading..' : pictures
                .filter((picture) => picture.name.includes(selectedCategory))
                .map((picture, index) =>
                    <img src={`${BACKEND_URL}/assets/` + picture.picture} key={index}
                         alt="photos galerie"/>)}
        </section>

    </div>;
}

export default Pictures;
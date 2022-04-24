import React, {useEffect, useState} from 'react';
import sanityClient from "../client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';

function Pictures() {
    const [pictures, setPictures] = useState([])
    const [isloading, setIsloading] = useState(true)
    const [cats, setCats] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("");
    const [navbarOpen, setNavbarOpen] = useState(false)
    const [selectedRadio, setSelectedRadio] = useState("");


    //remove duplicates in array cats
    const newCats = [...new Map(cats.map((item) => [item["categories"], item])).values()]

    const handleClick = (event) => {
        setSelectedCategory(event.target.id)
    }

    const handleNavbarOpen = () => {
        setNavbarOpen(!navbarOpen)
    }

    useEffect(() => {

        sanityClient.fetch(`*[_type =="galery"]{
        categories,
        mainImage{
        asset->{
        _id,      
        url
        },
        alt
        }
        
        }`)
            .then(res => {
                setCats(res)
                setPictures(res)
                setIsloading(false)
            })
            .catch(console.error)
    }, [])

    return (
        <div className='galery'>

            <div className={`navbar ${navbarOpen ? 'show-nav' : 'hide-nav'}`}>
                <ul className="navbar__links" onClick={handleNavbarOpen}>
                    {isloading ? 'Loading..' :
                        newCats
                            .sort((a, b) => a.categories.localeCompare(b.categories))
                            .map((newCat, index) =>
                                <li className="navbar__link" key={index}>
                                     <span id={newCat.categories.toLocaleString()}
                                           onClick={handleClick}>{newCat.categories}</span>
                                </li>)}
                </ul>
                <button className='burger' onClick={handleNavbarOpen}>
                 <span className="bar">
                 </span>
                </button>


            </div>
            <div className='radios-galery'>

                <ul className='radio-galery'>
                    {isloading ? 'Loading..' :
                        newCats
                            .map((newCat, index) => (
                                <li key={index}>
                                    <input
                                        type="radio"
                                        id={newCat.categories.toLocaleString()}
                                        value={newCat.categories}
                                        name="reCat"
                                        checked={newCat.categories === selectedRadio}
                                        onChange={(e) => setSelectedRadio(e.target.id)}
                                    />
                                    <label htmlFor={newCat}>{newCat.categories}</label>
                                </li>
                            ))}
                </ul>


            </div>

            <div className="cancel">
                {selectedCategory &&
                    <h5 className='button-cancel' onClick={() => setSelectedCategory("")}>Annuler recherche</h5>}
                {selectedRadio && (
                    <h5 className='button-cancel' onClick={() => setSelectedRadio("")}>Annuler la recherche</h5>
                )}
            </div>

            <section className='images'>
                {isloading ? 'Loading..' : pictures
                    .filter((picture) => picture.categories.includes(selectedCategory))
                    .filter((picture) => picture.categories.includes(selectedRadio))
                    .map((picture, index) =>
                        <img src={picture.mainImage.asset.url} key={index}
                             alt="photos galerie"/>)}
            </section>

            <Carousel
                autoPlay
                interval={6000}
                infiniteLoop
                showIndicators={false}
                showStatus={false}
                showArrows={false}
            >
                {
                    pictures
                        .filter((slide) => slide.categories.includes(selectedCategory))
                        .filter((slide) => slide.categories.includes(selectedRadio))
                        .map((slide, index) =>
                            <img src={slide.mainImage.asset.url} key={index}
                                 alt="photos galerie"/>)}
            </Carousel>


        </div>
    )
}

export default Pictures;
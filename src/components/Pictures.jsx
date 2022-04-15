import React, {useEffect, useState} from 'react';
import sanityClient from "../client";

function Pictures() {
    const [pictures, setPictures] = useState([])
    const [isloading, setIsloading] = useState(true)
    const [cats, setCats] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("");
    const [navbarOpen, setNavbarOpen] = useState(false)

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
                                    <span id={newCat.categories.toLocaleString()} onClick={handleClick}>{newCat.categories}</span>
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
                    .filter((picture) => picture.categories.includes(selectedCategory))
                    .map((picture, index) =>
                        <img src={picture.mainImage.asset.url} key={index}
                             alt="photos galerie"/>)}
            </section>

        </div>
    )
}

export default Pictures;
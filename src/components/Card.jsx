import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import sanityClient from "../client";


function Card() {
    const [pricings, setPricings] = useState([]);
    const [isloading, setIsloading] = useState(true);

    let navigate = useNavigate()

    useEffect(() => {
        sanityClient
            .fetch(`*[_type== "pricing"]{
        edition,
        title,
        image{
        asset->{
        _id,      
        url
        },
        alt
        
        },
        price,
        description
        }`)
            .then(res => {
                setPricings(res)
                setIsloading(false)
            })
            .catch(console.error)
    }, []);


    return (
        <div className='prestation'>
            <ul className='cards'>
                {isloading ? 'Loading..' :
                    pricings
                        .sort((a, b) => a.edition - b.edition)
                        .map((pricing, index) =>
                            <li className="card" key={index} onClick={() => {
                                navigate("/contact")
                            }}
                            >
                                <img src={pricing.image.asset.url} alt="image d'illustration"/>
                                <section>
                                    <span className='title'>{pricing.title}</span>
                                    <article>
                                        <p className='description'>{pricing.description}</p>
                                        <span className='price'>{pricing.price}€</span>
                                    </article>
                                </section>
                            </li>)}
            </ul>

        </div>
    )
}


export default Card;


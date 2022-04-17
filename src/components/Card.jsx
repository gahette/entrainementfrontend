import React, {useEffect, useState} from 'react';
import sanityClient from "../client";


function Card() {
    const [pricings, setPricings] = useState([]);
    const [isloading, setIsloading] = useState(true);

    useEffect(() => {

        sanityClient
            .fetch(`*[_type== "pricing"]{
        edition,
        title,
        mainImage{
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
                        .sort((a, b) => a.edition-b.edition)
                        .map((pricing, index) =>
                            <li className="card" key={index}>
                                <img src={pricing.mainImage.asset.url} alt="image d'illustration"/>
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
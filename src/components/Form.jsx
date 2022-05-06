import React, {useState, useEffect} from 'react';
import sanityClient from "../client";


function Form() {
    const [locations, setLocations] = useState('');
    const [isloading, setIsloading] = useState(true);


    useEffect(() => {
        sanityClient
            .fetch(`*[_type=="address"]{
        adressePostale,
        email,
        telephone,
        image{
        asset->{
        _id,      
        url
        },
        alt
        }
        }`)
            .then(res => {
                setLocations(res)
                setIsloading(false)
            })
            .catch(console.error)
    }, []);


    return (
        <div className="container">
            <article>
                <div className='photo'>
                    {isloading ? 'Loading..' : locations.map((location, index) =>
                        <img src={location.image.asset.url} key={index}
                             alt={location.image.alt}/>)}
                </div>

                <div className="wrapper">
                    <h2>Contactez-moi</h2>
                    <aside>
                        <form
                            name="contact"
                            method="post"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                            onSubmit="submit"
                        >
                            <input type="hidden" name="form-name" value="contact"/>

                            <div className="form">
                                <div className="field">
                                    <label htmlFor='name'>Nom*</label>
                                    <input
                                        type="text"
                                        id='name'
                                        name="nom"
                                        required
                                    />
                                </div>

                                <div className="field">
                                    <label htmlFor='societe'>Société</label>
                                    <input
                                        type="text"
                                        id='societe'
                                        name="societe"
                                    />
                                </div>

                                <div className="field">
                                    <label htmlFor='phone'>Téléphone</label>
                                    <input
                                        type="tel"
                                        id='phone'
                                        pattern="[0-9]{10}"
                                        name="phone"
                                    />
                                </div>

                                <div className="field">
                                    <label htmlFor='email'>Email*</label>
                                    <input
                                        type="text"
                                        id='email'
                                        name="email"
                                        required
                                    />
                                </div>

                                <div className="field">
                                    <label htmlFor='message'>Message*</label>
                                    <textarea
                                        id='message'
                                        name="message"
                                        rows='3'
                                        required
                                    />
                                </div>
                                <button type="submit" className='send'>Envoyer</button>
                            </div>
                        </form>


                    </aside>
                </div>
            </article>

            <ul className='local'>
                {isloading ? 'Loading..' :
                    locations
                        .map((location, index) =>
                            <li className='contact' key={index}>
                                <section className='local-sub'>
                                    <div className='sub-section'>
                                        <div className='postale' id='postale'
                                        >{location.adressePostale}</div>
                                        <div className='telephone' id='telephone'
                                        >{location.telephone}</div>
                                    </div>
                                    <div className='courriel' id='courriel'>{location.email}</div>
                                </section>
                            </li>
                        )}
            </ul>

        </div>
    )
}

export default Form;
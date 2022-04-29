import React, {useState, useEffect} from 'react';
import sanityClient from "../client";


function Form() {
    const initialValues = {nom: "", societe: "", phone: "", email: "", message: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [locations, setLocations] = useState('');
    const [isloading, setIsloading] = useState(true);


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

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


    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.nom) {
            errors.nom = "Un nom est requis!";
        }
        if (!values.email) {
            errors.email = " un email est requis!";
        } else if (!regex.test(values.email)) {
            errors.email = "Ce n'est pas un format valide!";
        }
        if (!values.message) {
            errors.message = "Un message est requis!";
        }
        return errors;
    };
    return (
        <div className="container">
            <article>
                {Object.keys(formErrors).length === 0 && isSubmit ? (
                    <div className="send-success">Message envoyé</div>) : (''
                )}


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
                            method="POST"
                            data-netlify="true"
                            onSubmit={handleSubmit}
                        >
                            <input type"hidden" name="form-name" value="contact"/>

                            <div className="form">
                                <div className="field">
                                    <label htmlFor='name'>Nom*</label>
                                    <input
                                        type="text"
                                        id='name'
                                        name="nom"
                                        value={formValues.nom}
                                        onChange={handleChange}
                                    />
                                </div>

                                <p>{formErrors.nom}</p>


                                <div className="field">
                                    <label htmlFor='societe'>Société</label>
                                    <input
                                        type="text"
                                        id='societe'
                                        name="societe"
                                        value={formValues.societe}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="field">
                                    <label htmlFor='phone'>Téléphone</label>
                                    <input
                                        type="tel"
                                        id='phone'
                                        pattern="[0-9]{10}"
                                        name="phone"
                                        value={formValues.phone}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="field">
                                    <label htmlFor='email'>Email*</label>
                                    <input
                                        type="text"
                                        id='email'
                                        name="email"
                                        value={formValues.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <p>{formErrors.email}</p>

                                <div className="field">
                                    <label htmlFor='message'>Message*</label>
                                    <textarea
                                        id='message'
                                        name="message"
                                        rows='3'
                                        value={formValues.message}
                                        onChange={handleChange}
                                    />
                                </div>

                                <p>{formErrors.message}</p>
                                <button className='send'>Envoyer</button>
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
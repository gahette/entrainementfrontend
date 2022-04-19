import {useState, useEffect} from 'react';
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
        telephone
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
            errors.nom = "Le nom est requis!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "Ce n'est pas un format valide!";
        }
        if (!values.message) {
            errors.message = "Le message est requis";
        }
        return errors;


    };


    return (
        <div className="container">
            {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className="send-success">Message envoyé</div>) : ''}

            <form onSubmit={handleSubmit}>
                <h2>Contactez-moi</h2>

                <div className="form">
                    <div className="field">
                        <label htmlFor='name'>Nom*</label>
                        <input
                            type="text"
                            id='name'
                            name="nom"
                            // placeholder="nom"
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
                            // placeholder="Société"
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
                            // placeholder="1234567890"
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
                            // placeholder="Email"
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
                            // placeholder="Votre message"
                            value={formValues.message}
                            onChange={handleChange}
                        />
                    </div>
                    <p>{formErrors.message}</p>
                    <button className="send">Envoyer</button>
                </div>
            </form>
            <div className='where'>
                <ul className='local'>
                    {isloading ? 'Loading..' :
                        locations
                            .map((location, index) =>
                                <li className='contact' key={index}>
                                    <section className='phoneadd'>
                                        <div className='postale' id='postale'
                                             >{location.adressePostale}</div>
                                        <div className='telephone' id='telephone'
                                             >{location.telephone}</div>
                                    </section>

                                    <div className='couriel' id='couriel'>{location.email}</div>
                                </li>
                            )}
                </ul>
            </div>
        </div>
    )
}

export default Form;
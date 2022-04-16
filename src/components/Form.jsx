import {useState, useEffect} from 'react';

function Form() {
    const initialValues = {nom: "", societe: "", phone: "", email: "", message: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

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
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);
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
                <div className="ui message success">Message envoyé</div>
            ) : (
                <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
            )}

            <form onSubmit={handleSubmit}>
                <h1>Login Form</h1>

                <div className="ui form">
                    <div className="field">
                        <label>Nom</label>
                        <input
                            type="text"
                            name="nom"
                            placeholder="nom"
                            value={formValues.nom}
                            onChange={handleChange}
                        />
                    </div>
                    <p>{formErrors.nom}</p>
                    <div className="field">
                        <label>Société</label>
                        <input
                            type="text"
                            name="societe"
                            placeholder="Société"
                            value={formValues.societe}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="field">
                        <label
                            htmlFor='phone'>
                            Téléphone
                        </label>
                        <input
                            type="tel"
                            id='phone'
                            pattern="[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}"
                            name="phone"
                            placeholder="12 34 56 78 90"
                            value={formValues.phone}
                            onChange={handleChange}
                        />

                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={formValues.email}
                            onChange={handleChange}
                        />
                    </div>
                    <p>{formErrors.email}</p>
                    <div className="field">
                        <label>Message</label>
                        <textarea
                            name="message"
                            placeholder="Votre message"
                            value={formValues.message}
                            onChange={handleChange}
                        />
                    </div>
                    <p>{formErrors.message}</p>
                    <button className="fluid ui button blue">Envoyer</button>
                </div>
            </form>
        </div>
    )
}

export default Form;
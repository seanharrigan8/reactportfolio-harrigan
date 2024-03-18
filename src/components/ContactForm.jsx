import React, {useState} from "react";
import './ContactForm.css';
// import './ContactForm.css';


const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form submitted", formData);
        setFormData({ name: '', email: '', message: ''});
    };

    return (
        <form onSubmit = {handleSubmit}>
            <div className="contact-form">

                <label htmlFor="contact-form">Name:</label>
                <input type="text" id="contact-form input" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="contact-form email">Email:</label>
                <input type="email" id="contact-form email" name="email" value={formData.email} onChange={handleChange} />

            </div>
            <div>
                <label htmlFor="contact-form">Message:</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
    );
    };

    export default ContactForm;
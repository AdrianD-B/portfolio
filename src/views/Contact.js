import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [sent, setSent] = useState(false)

    const handleSend = (e) => {
        setSent(true);
        e.preventDefault();

        emailjs.sendForm('service_z428ec4', 'template_4n5i26z', e.target, 'user_E81PrdLCXvSnLdKNcgvIU')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <>
            <div className="Contact">
                {!sent ? (
                    <div className="Contact__container">
                        <h1 className="Contact__container__title" >Get In Touch</h1>
                        <form className="Contact__container__form" onSubmit={handleSend}>
                            <input type="hidden" name="contact_number" />
                            <label>Name</label>
                            <input type="text" name="user_name" />
                            <label>Email</label>
                            <input type="email" name="user_email" />
                            <label>Message</label>
                            <textarea name="message" />
                            <input type="submit" value="Send" />
                        </form>
                    </div>
                ) :
                    <div className="Contact__container">
                        <h1 className="Contact__container__title" >Email Sent!</h1>
                    </div>
                }

            </div>
        </>
    )
}

export default Contact;
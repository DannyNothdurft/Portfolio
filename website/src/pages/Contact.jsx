import React, { useState } from 'react';
import { send } from 'emailjs-com';

function Contact() {

    const [data, setData] = useState({
        firma: "",
        email: "",
        jobtitel: "",
        nachricht: "",
    })

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data);
        send(
            'service_4lw4uc9',
            'template_0mwqzvx',
            data,
            'SKT10FihoXG7TQydd'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
        e.target.reset();
    };

    return (
        <div className='Contact-Pages'>
            <div className='Text-Container'>
                <h1>Lass uns schreiben.</h1>
                <h2>Erzähle mir von <br />
                    deinem Jobangebot!
                </h2>
            </div>

            <div>
                <form action="" className='Contact-Formular' onSubmit={handleSubmit}>
                    <h2>Sende mir dein Angebot!</h2>
                    <label>
                        Firma<span className='Stern'>*</span>
                        <input
                            required
                            type="text"
                            placeholder='Firma'
                            name="firma"
                            onChange={handleChange}
                            value={data.firma}
                        />
                    </label>
                    <label>
                        E-Mail<span className='Stern'>*</span>
                        <input required
                            type="text"
                            placeholder='E_Mail'
                            name="email"
                            onChange={handleChange}
                            value={data.email}
                        />
                    </label>
                    <label>
                        Jobtitel<span className='Stern'>*</span>
                        <input
                            required
                            type="text"
                            placeholder='Jobtitel'
                            name="jobtitel"
                            onChange={handleChange}
                            value={data.jobtitel}
                        />
                    </label>
                    <label>
                        Ihre Nachricht an mich<span className='Stern'>*</span>
                        <textarea
                            required
                            type="text"
                            placeholder='Nachricht'
                            name="nachricht"
                            onChange={handleChange}
                            value={data.nachricht}
                        />
                    </label>
                    <input type="submit" value="Nachricht Senden" className='Form-Button' />
                </form>
            </div>
        </div>
    )
}

export default Contact
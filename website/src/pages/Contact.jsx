import React from 'react'

function Contact() {
    return (
        <div className='Contact-Pages'>
            <div className='Text-Container'>
                <h1>Lass uns schreiben. <br />
                    Erzählen Sie mir von <br />
                    Ihrem Jobangebot</h1>
            </div>
            <div>
                <form action="" className='Contact-Formular'>
                    <h2>Sende mir eine Nachricht</h2>
                    <label>
                        Firma<span className='Stern'>*</span>
                        <input type="text" name="firma" />
                    </label>
                    <label>
                        E-Mail<span className='Stern'>*</span>
                        <input type="text" name="email" />
                    </label>
                    <label>
                        Jobtitel<span className='Stern'>*</span>
                        <input type="text" name="jobtitel" />
                    </label>
                    <label>
                        Ihre Nachricht an mich<span className='Stern'>*</span>
                        <textarea type="text" name="nachricht" />
                    </label>
                    <input type="submit" value="Nachricht Senden" className='Form-Button' />
                </form>
            </div>
        </div>
    )
}

export default Contact
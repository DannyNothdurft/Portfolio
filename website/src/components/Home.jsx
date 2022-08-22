import React from 'react';
import { ExternalLink } from 'react-external-link';

import Dots from '../images/Dots_Purple.svg';
import CirBack from '../images/Circle_Background.svg';
import Avatar from '../images/Profil_Pic.png';

function Home() {
    return (
        <div className='Home-Componente'>
            <div className='Circle-Background'><img src={CirBack} alt="Circle Background" /></div>
            <div className='Text-Container'>
                <h1>Hi, ich bin ein <br /> <span className='Highlight'>Web-Entwickler</span></h1>
                <p>Hi, ich bin Danny und habe gerade die Umschulung bei der <ExternalLink href="https://digitalcareerinstitute.org/">Digital Career Institute gGmbH</ExternalLink> für die Web-Entwicklung abgeschlossen.</p>

                <span className='Abstand'></span>

                <p>Bist du gerade auf der Suche nach einem motivierten Mitarbeiter? </p>

                <span className='Abstand'></span>

                <p>Dann kontaktiere mich doch.</p>

                <a href="https://api.whatsapp.com/send?phone=4917656612113" title="Schreibe mir für ein Job Angebot" target="_blank" rel="noreferrer noopener"><img src="https://business-view.photo/wp-content/uploads/2020/01/whatsapp-business.png" alt="WhatsApp" className='WhatsApp-Button' /></a>
            </div>
            <div className='Image-Container'>
                <img src={Dots} alt="35 Punkte" className='Dots-Image' />
                <img src={Avatar} alt="Das bin ich" className='Avatar-Image' />
            </div>
        </div>
    )
}

export default Home
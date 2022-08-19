import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';

import Dots from '../images/Dots_Purple.svg';
import Avatar from '../images/Profil_Pic.jpeg';

function Home() {
    return (
        <div className='Home-Componente'>
            <div className='Circle-Background'></div>
            <div className='Text-Container'>
                <h1>Hi, ich bin ein <br /> <span className='Highlight'>Web-Entwickler</span></h1>
                <p>Hi, ich bin Danny und habe gerade die Umschulung bei der <ExternalLink href="https://digitalcareerinstitute.org/">Digital Career Institute gGmbH</ExternalLink> für die Web-Entwicklung abgeschlossen.</p>
            </div>
            <div className='Image-Container'>
                <img src={Dots} alt="35 Punkte" className='Dots-Image' />
                <img src={Avatar} alt="Das bin ich" className='Avatar-Image' />
            </div>

        </div>
    )
}

export default Home
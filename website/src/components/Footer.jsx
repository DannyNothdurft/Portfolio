import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <div className='Footer-Componente'>
            <p>© 2022 Danny Nothdurft. Powered by Danny Nothdurft</p>
            <ul>
                <li> <NavLink to="/impressum">Impressum</NavLink> </li>
                <li> <NavLink to="/dsgvo">Datenschutz</NavLink> </li>
            </ul>
        </div>
    )
}

export default Footer
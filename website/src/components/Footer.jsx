import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <div className='Footer-Componente'>
            <ul>
                <li> <NavLink to="/impressum">Impressum</NavLink> </li>
                <li> <NavLink to="/dsgvo">Datenschutz</NavLink> </li>
            </ul>
        </div>
    )
}

export default Footer
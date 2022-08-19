import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../images/Logo.png';

function Navigation() {
    return (
        <div className='Navigation-Componente'>
            <NavLink to="/">
                <img src={Logo} alt="Danny Nothdurft Logo" className='DN-Logo' />
            </NavLink>
            <ul>
                <li> <NavLink to="/">Home</NavLink> </li>
                <li> <NavLink to="/aboutme">Über mich</NavLink> </li>
                <li> <NavLink to="/projects">Projekte</NavLink> </li>
                <li> <NavLink to="/contact">Kontakt</NavLink> </li>
            </ul>
        </div>
    )
}

export default Navigation
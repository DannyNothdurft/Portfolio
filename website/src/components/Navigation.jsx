import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <div className='Navigation-Componente'>
            Logo
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
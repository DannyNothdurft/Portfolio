import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiMenuLine } from "@react-icons/all-files/ri/RiMenuLine";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";

import Logo from '../images/Logo.png';

function Navigation() {

    const [aktiv, setAktiv] = useState(false)

    const toggle = () => {
        setAktiv(!aktiv);
        console.log(aktiv)
    }

    return (
        <div className='Navigation-Componente'>
            <NavLink to="/">
                <img src={Logo} alt="Danny Nothdurft Logo" className='DN-Logo' />
            </NavLink>
            <ul onClick={toggle} className={aktiv ? "aktive" : ""}>
                <li> <NavLink to="/">Home</NavLink> </li>
                <li> <NavLink to="/projects">Projekte</NavLink> </li>
                <li> <NavLink to="/contact">Kontakt</NavLink> </li>
            </ul>

            <button onClick={toggle} className="toggle">
                {aktiv ? <AiOutlineClose /> : <RiMenuLine />}
            </button>
        </div>
    )
}

export default Navigation
import React from 'react'
import { Link } from 'react-router-dom'

import '../Menu_Principal/Menu_Principal.css'

export default function FatecHeader() {
    return (
        <div className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to="/"> Inicio </Link> </li>
                    <li> <Link > Matituno </Link></li>
                    <li> <Link > Vespertino </Link></li>
                    <li> <Link to="/noturno"> Noturno </Link></li>
                    <li> <Link > Novotec </Link></li>
                    <li> <Link > Especialização </Link></li>
                </ul>
            </nav>
        </div>
    )
}


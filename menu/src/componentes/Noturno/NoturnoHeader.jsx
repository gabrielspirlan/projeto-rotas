import React from 'react'
import { Link } from 'react-router-dom'

import '../Menu_Principal/Menu_Principal.css'

export default function NoturnoHeader() {
    return (
        <div className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to="/"> Início </Link> </li>
                    <li> <Link to="/fatec"> Voltar </Link> </li>
                    <li> <Link > GE </Link></li>
                    <li> <Link > GPI </Link></li>
                    <li> <Link > RH </Link></li>
                    <li> <Link to="/ADS"> ADS </Link></li>
                </ul>
            </nav>
        </div>
    )
}


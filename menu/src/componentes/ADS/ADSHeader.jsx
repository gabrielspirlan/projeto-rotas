import React from 'react'
import { Link } from 'react-router-dom'

import '../Menu_Principal/Menu_Principal.css'

export default function ADSHeader() {
    return (
        <div className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to="/"> Início </Link> </li>
                    <li> <Link to="/noturno"> Voltar </Link> </li>
                    <li>  <Link>Lógica</Link></li>
                    <li> <Link> Cálculo </Link></li>
                    <li> <Link> Sistema Operacional </Link></li>
                    <li> <Link to="/ADS"> Programação WEB </Link></li>
                </ul>
            </nav>
        </div>
    )
}


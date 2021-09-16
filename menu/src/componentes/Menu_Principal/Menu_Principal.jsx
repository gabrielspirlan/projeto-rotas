import React from 'react'

// importar pacote Link que é parte do react-router-dom
import { Link } from 'react-router-dom'

import './Menu_Principal.css'

export default function Menu_Principal() {
    return (
        <div className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to="/"> Início </Link></li>
                    <li> <Link to="/fafibe"> FAFIBE </Link> </li>
                    <li> <Link to="/fatec"> FATEC </Link></li>
                    <li> <Link to="/ufscar"> UFSCAR </Link></li>
                    <li> <Link to="/unifran"> UNIFRAN </Link></li>
                    <li> <Link to="/usp"> USP </Link></li>
                </ul>
            </nav>
        </div>
    )
}


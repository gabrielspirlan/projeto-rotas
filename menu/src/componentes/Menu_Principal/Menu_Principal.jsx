import React from 'react'

// importar pacote Link que é parte do react-router-dom
import { Link } from 'react-router-dom'

import './Menu_Principal.css'

export default function Menu_Principal() {
    return (
        <div className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to="/FAFIBE"> FAFIBE </Link> </li>
                    <li> <Link to="/FATEC"> FATEC </Link></li>
                    <li> <Link to="/UFSCAR"> UFSCAR </Link></li>
                    <li> <Link to="/UNIFRAN"> UNIFRAN </Link></li>
                    <li> <Link to="/USP"> USP </Link></li>
                </ul>
            </nav>
        </div>
    )
}


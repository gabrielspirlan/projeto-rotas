import React from 'react'

import './Inicio.css'
import Titulo from '../Titulo/Titulo.jsx'
import Menu_Principal from '../Menu_Principal/Menu_Principal'
//import Logo from '../../imagens/LogoFatec.jpeg'

export default function Inicio() {
    return (
        <div>
            <Menu_Principal/> 
            <Titulo texto = "Início - Ensino Superior" />

            <div className="inicio">
            </div>

        </div>

    )
}


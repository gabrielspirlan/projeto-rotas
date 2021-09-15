import React from 'react'

import './Fatec.css'
import Titulo from '../Titulo/Titulo.jsx'
import FatecHeader from './FatecHeader'
import Noturno from '../Noturno/Noturno'
import { Route, Switch } from 'react-router'

export default function Fatec() {
    return (
        <div>
            <FatecHeader />
            <Titulo texto="FATEC" />
             <div className="fatec"></div>
        </div>

    )
}


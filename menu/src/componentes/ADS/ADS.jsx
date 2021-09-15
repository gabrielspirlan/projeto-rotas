import React from 'react'

import './ADS.css'
import Titulo from '../Titulo/Titulo.jsx'
import ADSHeader from './ADSHeader'
import { Route, Switch } from 'react-router'

export default function ADS() {
    return (
        <div>
            <ADSHeader />
            <Titulo texto="Análise e Desenvolvimento de Sistemas" />

            <div className="ads">
         
            </div>
        </div>

    )
}


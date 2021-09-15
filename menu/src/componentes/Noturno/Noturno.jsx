import React from 'react'

import './Noturno.css'
import Titulo from '../Titulo/Titulo.jsx'
import NoturnoHeader from './NoturnoHeader'

import { Route, Switch } from 'react-router'
import Fatec from '../FATEC/Fatec'

export default function Noturno() {
    return (
        <div>
            <NoturnoHeader />
            <Titulo texto="Noturno" />

            <div className="cursos">
            </div>
        </div>

    )
}


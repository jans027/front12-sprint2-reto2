import React, { Component } from 'react'
import { DivCard, DivPadre, Enlace1 } from '../styles/Styles1'
import { Link } from "react-router-dom";





export default class Index extends Component {


    render() {
        return (
            <DivPadre>
                <DivCard>
                <img src="https://i.ibb.co/qxmzWcT/Logo.png" alt="Logo" border="0" />
            </DivCard>
            <Enlace1><Link to={`/Pagina2`}>Enter</Link></Enlace1>
            </DivPadre>
            
        )
    }
}

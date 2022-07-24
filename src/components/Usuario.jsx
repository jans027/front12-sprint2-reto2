import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { HomeStyled } from '../styles/HomePage'
import FanciNavBar from './FanciNavBar'
import FooterNav from './FooterNav'


export default class Usuario extends Component {
    render() {
        return (
            <HomeStyled>
                <FanciNavBar/>
                <NavLink to={"/Profile"}>Profile</NavLink>
                <FooterNav/>
            </HomeStyled>
        )
    }
}

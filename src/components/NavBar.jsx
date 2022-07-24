import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWifi, faSignal, faBatteryFull } from '@fortawesome/free-solid-svg-icons'
import { Navigation } from '../styles/Navigation'


export default class NavBar extends Component {




render() {



    return (
        <Navigation>
            <p>9:41</p>
            <div>
            <FontAwesomeIcon icon={faWifi} />
            <FontAwesomeIcon icon={faSignal} />
            <FontAwesomeIcon icon={faBatteryFull} />
            </div>
        </Navigation>

    )
}
}

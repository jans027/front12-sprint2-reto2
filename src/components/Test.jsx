import React, { Component } from 'react';
import { HomeStyled } from '../styles/HomePage';
import FanciNavBar from './FanciNavBar';
import FooterNav from './FooterNav';


import axios from 'axios'
import { ApiUrl } from '../services/apirest'
import { BootstrapButton, BotonesUl } from '../styles/TestId';


export default class Test extends Component {


    state = {
        cursos: []
    }

    componentDidMount() {
        axios.get(ApiUrl + "quiz")
            .then(res => {
                const cursos = res.data;
                this.setState({ cursos });
                // console.log(this.state.cursos)
            })
    }

    handleClick = (id,e) =>{
        console.log('boton  '+e)
        window.location = `/Test/${id}`;
    }


    render() {
        return (
            <HomeStyled >
                <FanciNavBar />
                <BotonesUl>
                    {
                        this.state.cursos.map(item => (
                            <li>
                                <BootstrapButton 
                                size="large"
                                variant="outlined"
                                type='submit' 
                                key={item.id} 
                                onClick={(e) => this.handleClick(item.id, e)}>
                                {item.titulo} - {item.duracion}
                                </BootstrapButton>
                            </li>
                        ))
                    }
                </BotonesUl>
                <FooterNav />
            </HomeStyled >
        );
    }
}

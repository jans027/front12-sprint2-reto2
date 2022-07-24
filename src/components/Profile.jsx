import axios from 'axios'
import React, { Component } from 'react'
import { NavLink} from 'react-router-dom'
// sweat alert
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
import { ApiUrl } from '../services/apirest'
// const MySwal = withReactContent(Swal)



// const  id   = sessionStorage.getItem("id");
const name  = sessionStorage.getItem("name");
const email = sessionStorage.getItem("email");
const phone = sessionStorage.getItem("phone");



export default class Profile extends Component {


    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form)
    }
    handleSubmit = async (e) => {
        e.preventDefault();

        await axios.get(
            ApiUrl + `user`, 
            {
                params: {
                    name:  name,
                    email: email,
                    phone: phone,
                }
            }
        )
        .then(response=>{
            return response.data
            // console.log(response.data)
            // console.log('Exito')
            
        })
        .then(response => {
            if(response.length === 1){
                let usuario = response[0];
                    console.log(usuario)
                    console.log('Aqui toy!!!!')
            }
            
        })
        .catch(e=>{
            console.log('Eoooo')
            console.log(e);
        })
    }


    render() {
        return (
            <div> <br /><br /><br />
                <NavLink to="/Usuario">back</NavLink>
                <h5>Account Settings</h5> <br /><br />
                <section>
                    <form>
                        <form>
                            <input
                                name="name"
                                type="text"
                                placeholder={name}
                                onChange={this.handleChange}
                            />
                            <input
                                name="email"
                                type="email"
                                placeholder={email}
                                onChange={this.handleChange}
                            />
                            <input
                                name="phone"
                                type="tel"
                                placeholder={phone}
                                onChange={this.handleChange}
                            />
                            {/* <input
                                name="password"
                                type="password"
                                placeholder="password"
                                onChange={this.handleChange}
                                /> */}
                            <button
                                type="submit"
                                
                            >Submit
                            </button>
                        </form>
                    </form>
                </section>
            </div>
        )
    }
}

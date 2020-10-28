import { Link } from 'react-router-dom'
import React, { Component } from "react";
import DatePicker from 'react-datepicker'


export default class Login extends Component {

    

    constructor(props) {
        super(props);
        this.state = {name: '', lastName: '', nickname: '', email: '', password: '', date: new Date()};
        this.firstDate= new Date()
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleSubmit(event) {

        event.preventDefault();
        const data = new FormData(event.target);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: data
        };
        fetch('https://app-tic3.herokuapp.com/register/alumno', requestOptions)
            .then(async response => {
                const data = await response.json();
    
                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
    
                this.setState({ postId: data.id })
            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
      }
    
      handleChange(event) {
        const name = event.target.name;

        this.setState({
        [name]: event.target.value
        });
      }


      


    render() {
        return (
            <div className="auth-wrapper">
            <div className="auth-inner">
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" name= 'name' className="form-control" value ={this.state.name} onChange={this.handleChange} placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" name= 'lastName'className="form-control" value ={this.state.lastName} onChange={this.handleChange} placeholder="Last name" />
                </div>


                {/* <DatePicker 
                    className="form-group"
                    selected={this.firstDate}
                    value={this.state.date} 
                    name= 'date'
                    dateFormat="yyyy/MM/dd"
                    onChange={this.handleChange}
                 /> */}
            

                <div className="form-group">
                    <label>Nickname</label>
                    <input type="text" name= 'nickname' className="form-control" value ={this.state.nickname} onChange={this.handleChange} placeholder="Nickname" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name= 'email' className="form-control" value ={this.state.email} onChange={this.handleChange} placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name= 'password' className="form-control" value ={this.state.password} onChange={this.handleChange} placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <Link to={"/sign-in"}> sign in? </Link>
                </p>
            </form>
            </div>
            </div>
        );
    }
}
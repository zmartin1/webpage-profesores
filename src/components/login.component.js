import React, { Component } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
          username: "",
          password: ""
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        const name = event.target.name;

        this.setState({
        [name]: event.target.value
        });
      }

    handleSubmit(event) {
        const data1 = this.state;
        console.log(data1)
        console.log("handleSubmit")
        
        fetch("https://noviembre.herokuapp.com/login/alumno", {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7",
                "cache-control": "max-age=0",
                "content-type": "application/x-www-form-urlencoded",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "same-origin",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1"
            },
            "referrer": "https://noviembre.herokuapp.com/login/alumno",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "username=joacokpo&password=123",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
            });





    //     axios.post(`https://noviembre.herokuapp.com/login/alumno`,  data1, { withCredentials: false })
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //   }).catch(error => {
    //     console.error('There was an error!', error);
    //          });
        event.preventDefault();
      }
    render() {
        return (
        <div className="auth-wrapper">
        <div className="auth-inner">
            <form onSubmit={this.handleSubmit}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="username" name='username' className="form-control" value ={this.state.username} onChange={this.handleChange} placeholder="Enter username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name= 'password' className="form-control" value ={this.state.password} onChange={this.handleChange} placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                <p className="forgot-password text-right">
                    Forgot <Link to="/forgot-password"> password? </Link>
                </p>
                <button>
                    <Link className="nav-link" to={"/sign-up"}>Sign up instead?</Link>
                </button>
            </form>
        </div>
        </div>
        );
    }
}

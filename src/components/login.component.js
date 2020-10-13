import React, { Component } from "react";
import { Link } from 'react-router-dom'

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
          value: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }

    handleSubmit(event) {
        alert('Hola ' + this.state.value);
        event.preventDefault();
      }
    render() {
        return (
        <div className="auth-wrapper">
        <div className="auth-inner">
            <form onSubmit={this.handleSubmit}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
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

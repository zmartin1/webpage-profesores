import { Link } from 'react-router-dom'
import React, { Component } from "react";
import DatePicker from 'react-datepicker'
import axios from 'axios';



export default class Login extends Component {

    

    constructor(props) {
        super(props);
        this.state = {name: '', username: '', email: '', password: '', fecha_nacimiento: new Date()};
        this.firstDate= new Date()
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleSubmit(event) {

        
        const data1 = this.state;
        console.log(data1)
        console.log("handleSubmit")
        axios.post(`https://noviembre.herokuapp.com/register/alumno`,  data1 , {headers: {
            'Content-Type': 'application/json'}
        })
      .then(res => {
        console.log(res);
        console.log(res.data);
      }).catch(error => {
        console.error('There was an error!', error);
             });
        event.preventDefault();

      
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify.data,
        //     mode: 'cors'
        // };
        // fetch('https://noviembre.herokuapp.com/register/alumno', requestOptions)
        //     .then(async response => {
        //         const data = await response.json();
    
        //         // check for error response
        //         if (!response.ok) {
        //             // get error message from body or default to response status
        //             const error = (data && data.message) || response.status;
        //             console.log("f"+ data)
        //             return Promise.reject(error);
        //         }
    
        //         this.setState({ postId: data.id })
        //     })
        //     .catch(error => {
        //         this.setState({ errorMessage: error.toString() });
        //         console.error('There was an error!', error);
        //     });
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
            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group" >
                    <label>Name</label>
                    <input type="text" name= 'name' className="form-control" value ={this.state.name} onChange={this.handleChange} placeholder="Name" />
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
                    <label>Username</label>
                    <input type="text" name= 'username' className="form-control" value ={this.state.username} onChange={this.handleChange} placeholder="Username" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name= 'email' className="form-control" value ={this.state.email} onChange={this.handleChange} placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name= 'password' className="form-control" value ={this.state.password} onChange={this.handleChange} placeholder="Enter password" />
                </div>

                <button type="submit">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <Link to={"/sign-in"}> sign in? </Link>
                </p>
            </form>
            </div>
            </div>
        );
    }
}
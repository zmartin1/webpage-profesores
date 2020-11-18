import React, { Component} from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Redirect } from "react-router-dom";

function mapStateToProps(state) {
    return {
      user: state.user
    };
  }





class Login extends Component {
    
    

    constructor(props) {
        super(props);
        this.state = {
          username: "",
          password: "",
          redirect: null
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      routingFunction = (target, param) => {
        this.props.history.push({
            pathname: {target},
            state: param
        });
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
        
        

        // axios.post(`https://noviembre.herokuapp.com/login/alumno`,  data1, { crossdomain: true, withCredentials: true, contentType: "application/x-www-form-urlencoded" })
        // .then(res => {
        //   console.log(res);
        //   console.log(res.data);
        // }).catch(error => {
        //   console.error('There was an error!', error);
        //        });
        //   event.preventDefault();

        
        fetch("https://noviembre.herokuapp.com/alumnos/"+data1.username, {
                    "headers": {
                    "content-type": "application/json",
                    },
                    "referrerPolicy": "strict-origin-when-cross-origin",
                    "method": "GET",
                    "mode": "cors",
                })
                // .then(
                //     function(response) {
                //         if(!response.ok){
                //             throw Error(response.statusText)
                            
                //         }
                //         return response;
                // }
                //     )
                .then(response => response.json())
                .then(response => this.props.dispatch({ type: "SIGN_IN", user: response} ))
                .then(this.setState({ redirect: "/" }))
            
        ;
            
                
          

        event.preventDefault()
        }

  
    //   }
    render() {
        if(this.state.redirect){
            return <Redirect to={this.state.redirect} />
        }
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
                {/* <User.Consumer> */}
                    <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                {/* </User.Consumer> */}
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
export default withRouter(connect(mapStateToProps)(Login));
import React from "react";
import logo from '../logo.svg';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";
import { connect } from 'react-redux';


function mapStateToProps(state) {
  return {
    user: state.user
  };
}

class sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }
  // componentDidMount() {
      // headers: {'Content-Type': 'application/json'}
    
    // const link = `https://noviembre.herokuapp.com/alumnos/`
    // console.log("hola Primero")
    // axios.get(link, { crossdomain: true, withCredentials: true, contentType: "application/x-www-form-urlencoded" }).then(res => {
    //   const username1 = res.username
    //   this.setState({username: username1, loading: false })
    //   console.log("holi")
    // }).catch(error => { // your error handling goes here}
    //   console.log('Hubo F '+ error.message + error.name)
    
    
    


    // fetch(link)
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       const username1 = result.username
    //       this.setState({username: username1, loading: false })
    //       console.log("Username")
    //     },
    //     // Note: it's important to handle errors here
    //     // instead of a catch() block so that we don't swallow
    //     // exceptions from actual bugs in components.
    //     (error) => {
    //       this.setState({
    //         isLoaded: true,
    //         error
    //       });
    //     }
    //   )
    // }
    
  


  


  render(){



    return (
      <div>
        <Navbar bg="light" expand="lg" collapseOnSelect>
          
          <Navbar.Brand>
              <LinkContainer to="/">
                  <Nav.Link> 
                    <img
                    src={logo}
                    width="50wc"
                    height="50wc"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"/> 
                  </Nav.Link>
                </LinkContainer>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={this.toggleNavbar}/>
          
          <Navbar.Collapse id="basic-navbar-nav" >
            
            <Nav className="mr-auto">
            {
                this.props.user.nombre && 
                <NavDropdown title={this.props.user.nombre}  id="basic-nav-dropdown">
                  <LinkContainer to="/settings">
                    <Nav.Link> Settings </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/profile">
                    <Nav.Link> My Profile </Nav.Link>
                  </LinkContainer>
                  {/* <Link onClick={this.closeNavbar} className="nav-link" to="/settings"> Settings </Link>
                  <Link onClick={this.closeNavbar} className="nav-link"  to="/profile"> My Profile </Link> */}
                  <NavDropdown.Divider />
                  <Button variant="light" block >
                    <LinkContainer to="/sign-in">
                      <Nav.Link> Log Out </Nav.Link>
                    </LinkContainer>
                  </Button>
              </NavDropdown>
              }
              
                {!this.props.user.username &&
                <LinkContainer to="/sign-in">
                    {!this.props.user.username &&<Nav.Link> Sign In </Nav.Link>}
                </LinkContainer>


              }
              <LinkContainer to="/">
                <Nav.Link> Home </Nav.Link>
              </LinkContainer>
              {/* <LinkContainer to="/map">
                <Nav.Link> Map </Nav.Link>
              </LinkContainer> */}
            
              <NavDropdown title="Profesores" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <LinkContainer to="/teacher/Joaquito">
                    <Nav.Link> Profe ejemplo  </Nav.Link>
                  </LinkContainer>
                </NavDropdown.Item>
                <NavDropdown.Item  href="#action/3.2">Another action</NavDropdown.Item>
                
                <NavDropdown.Divider />
                <Form inline>
                  <FormControl onClick={this.closeNavbar} type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-success" >Search</Button>
                </Form>
              </NavDropdown>
              <LinkContainer to="/about">
                <Nav.Link> About </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
            
      </Navbar>
    </div>
    );
  }
};




// export default props => {
//   return (
//     <Menu {...props}>
//         <Link to="/"> Home </Link>
//         <Link className="nav-link" to={"/sign-in"}>Login</Link>
//         <Link to="/about"> About </Link>
//     </Menu>
//   );
// };

export default connect(mapStateToProps)(sidebar);
import React from "react";
import logo from '../logo.svg';
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

const user = "Martin Brian"

export default class sidebar extends React.Component {

  
  render(){
    
    return (
      <div>
        <Navbar bg="light" expand="lg" >
          <Navbar.Brand>
            <Link to="/">
              <img
              src={logo}
              width="50wc"
              height="50wc"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              />
            </Link>
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav" >
          
            <Nav className="mr-auto">
              <Link className="nav-link" to="/"> Home </Link>
              <Link className="nav-link" to="/map"> Map </Link>
              {/* <Link className="nav-link" to={"/sign-in"}>Login</Link> */}
              <NavDropdown title="Profesores" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-success" >Search</Button>
                </Form>
              </NavDropdown>
              <Link className="nav-link" to="/about"> About </Link>
            </Nav>
          </Navbar.Collapse>
          <NavDropdown title={ user }  id="basic-nav-dropdown"> 
            <Link className="nav-link" to="/settings"> Settings </Link>
            <Link className="nav-link"  to="/profile"> My Profile </Link>
            <NavDropdown.Divider />
            <Button variant="light" block >
              <Link to="/sign-in"> Log Out </Link>
            </Button>
      </NavDropdown>
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
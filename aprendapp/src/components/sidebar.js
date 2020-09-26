import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from 'react-router-dom'



export default props => {
  return (
    <Menu {...props}>
        <Link to="/"> Home </Link>
        <Link className="nav-link" to={"/sign-in"}>Login</Link>
        <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
        <Link to="/about"> About </Link>
    </Menu>
  );
};
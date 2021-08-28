import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {  logout } from '../js/action/authAction'

const NavBar = () => {
    const {isAuth}= useSelector(state => state.authReducer)
    const dispatch = useDispatch()
    return (
        <div>
             <Navbar bg="dark" variant="dark">
  
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/profile">Profile</Link>
    {
        isAuth ?   <Link className="nav-link" to="/login" onClick={() => dispatch(logout())}>Logout</Link>:
        <Link className="nav-link" to="/login">Login</Link>
    }
    </Nav>
 
  </Navbar>
        </div>
    )
}

export default NavBar

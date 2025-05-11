import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <>
        {/* Header Section */}
        <header>
            <div className='container py-3'>
                <Navbar expand="lg">
                    {/* <Navbar.Brand href="#home" className='logo'>
                        <span>SweetHome</span> Constructions
                    </Navbar.Brand> */}
                    <NavLink to={'/'} className='logo'>
                        <span>SweetHome</span> Constructions
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink to="/" className='nav-link'>Home</NavLink>
                        <NavLink to="/about" className='nav-link'>About Us</NavLink>
                        <NavLink to="/services" className='nav-link'>Services</NavLink>
                        <NavLink to="/projects" className='nav-link'>Projects</NavLink>
                        <NavLink to="/blogs" className='nav-link'>Blogs</NavLink>
                        <NavLink to="/contact" className='nav-link'>Contact Us</NavLink>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </header>
    </>
  )
}

export default Header
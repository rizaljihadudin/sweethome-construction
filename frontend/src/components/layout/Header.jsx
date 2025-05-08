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
                        <Nav.Link href="#link" className='nav-link'>Services</Nav.Link>
                        <Nav.Link href="#link" className='nav-link'>Projects</Nav.Link>
                        <Nav.Link href="#link" className='nav-link'>Blogs</Nav.Link>
                        <Nav.Link href="#link" className='nav-link'>Contact Us</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </header>
    </>
  )
}

export default Header
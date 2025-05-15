import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import UseAuth from '../../backend/hook/UseAuth';
const Header = () => {
    const { user } = UseAuth();

    return (
        <>
            {/* Header Section */}
            <header>
                <div className='container py-3'>
                    <Navbar expand="lg">
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
                        <div className="d-flex">
                            {
                                user ? (
                                    <>
                                        <div className='ms-4'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                                                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                                            </svg>
                                            {user.name}
                                        </div>
                                    
                                    </>
                                ) : (
                                    <NavLink to="/admin/login" className='nav-link'>
                                        <Button className='btn btn-primary'>Login</Button>
                                    </NavLink>
                                )
                            }
                        </div>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </header>
        </>
    )
}

export default Header
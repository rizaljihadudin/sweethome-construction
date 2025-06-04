import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const { logout } = useContext(AuthContext);

    function handleClick() {
        if(confirm('Are you sure you want to logout?')){
            logout();
        }
    }

    return (
        <>
            <div className="card shadow border-0">
                <div className="card-body p-4 sidebar">
                    <h4>Sidebar</h4>
                    <ul>
                        <li>
                            <NavLink to={'/admin/dashboard'}>
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/admin/services'} className={
                                ({ isActive }) => isActive ? 'active' : ''
                            }>
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/admin/projects'} className={
                                ({ isActive }) => isActive ? 'active' : ''
                            }>
                                Projects
                            </NavLink>
                        </li>
                        <li>
                             <NavLink to={'/admin/articles'} className={
                                ({ isActive }) => isActive ? 'active' : ''
                            }>
                                Articles
                            </NavLink>
                        </li>
                        <li>
                             <NavLink to={'/admin/testimonials'} className={
                                ({ isActive }) => isActive ? 'active' : ''
                            }>
                                Testimonials
                            </NavLink>
                        </li>
                        <li>
                            <button onClick={handleClick} className='btn btn-primary mt-4'>Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar
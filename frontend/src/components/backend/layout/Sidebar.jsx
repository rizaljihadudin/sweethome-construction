import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

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
                        <li><a href="#">Dashboard</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Articles</a></li>
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
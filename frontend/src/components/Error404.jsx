import React from 'react'
import '../assets/css/error.scss'
import { Link, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const Error404 = () => {
    const params = useParams();
    return (
        <>
            <div className='main'>
                <div className='fof'>
                    <h1>Error 404</h1>
                    <p>Page not found. url: /{params['*']}</p>
                    <div className='home'>
                        <Button variant="primary">
                            <Link to={'/'}>
                                <span>Home</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </>     
    )
}

export default Error404
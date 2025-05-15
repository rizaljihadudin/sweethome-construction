import React from 'react'
import Header from '../../frontend/layout/Header'
import Footer from '../../frontend/layout/Footer'
import Sidebar from '../layout/Sidebar'
import { Link } from 'react-router-dom'

const Edit = () => {
    return (
        <>
            <Header/>
            <main>
                <div className="container my-5">
                    <div className="row">
                        <div className='col-md-3'>
                            {/* Sidebar */}
                            <Sidebar/>
                        </div>

                        <div className='col-md-9'>
                            {/* Main Content */}
                            <div className="card shadow border-0">
                                <div className="card-body p-4">
                                    <div className="d-flex justify-content-between">
                                        <h4 className='h5'>Edit Services</h4>
                                        <Link to={"/admin/services"} className="btn btn-primary">
                                            Back
                                        </Link>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Edit
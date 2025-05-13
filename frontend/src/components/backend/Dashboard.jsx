import React from 'react'
import Header from '../frontend/layout/Header'
import Footer from '../frontend/layout/Footer'
import Sidebar from './layout/Sidebar'

const Dashboard = () => {
  return (
    <>
        <Header />
            <main>
                <div className="container my-5">
                    <div className="row">
                        <div className='col-md-3'>
                            {/* Sidebar */}
                            <Sidebar/>
                        </div>

                        <div className='col-md-9 dashboard'>
                            {/* Main Content */}
                            <div className="card shadow border-0">
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <h4>Welcome to Dashboard</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        <Footer />
    </>
  )
}

export default Dashboard
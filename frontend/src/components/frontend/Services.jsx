import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Hero from '../layout/Hero'
import ServiceImg from '../../assets/images/construction1.jpg'

const contents = {
    preHeading: 'Quality. Intregity. Value.',
    heading: 'Services',
    text:'We offer a diverse array of construction services, <br/> spanning residential, commercial, and industrial projects.'
}

const Services = () => {
  return (
    <>
        <Header/>
            <main>
                {/* Hero Section */}
                <Hero contents={contents}/>
                <section className='section-3 bg-light py-5'>
                    <div className="container py-5">
                        <div className="section-header">
                            <span>Our Services</span>
                            <h2>Our construction services</h2>
                            <p>We offer a diverse range of construction services to meet your needs</p>
                        </div>
                        <div className="row pt-4">
                            <div className="col-md-4 col-lg-4">
                                <div className="item">
                                    <div className="service-image">
                                        <img src={ServiceImg} className='w-100' />
                                    </div>
                                    <div className="service-body">
                                        <div className="service-title">
                                            <h3>Speciality Construction</h3>
                                        </div>
                                        <div className="service-content">
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            </p>
                                        </div>
                                        <a href="" className='btn btn-primary'>Read More</a>
                                    </div>
    
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4">
                                <div className="item">
                                    <div className="service-image">
                                        <img src={ServiceImg} className='w-100' />
                                    </div>
                                    <div className="service-body">
                                        <div className="service-title">
                                            <h3>Speciality Construction</h3>
                                        </div>
                                        <div className="service-content">
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            </p>
                                        </div>
                                        <a href="" className='btn btn-primary small'>Read More</a>
                                    </div>
    
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4">
                                <div className="item">
                                    <div className="service-image">
                                        <img src={ServiceImg} className='w-100' />
                                    </div>
                                    <div className="service-body">
                                        <div className="service-title">
                                            <h3>Speciality Construction</h3>
                                        </div>
                                        <div className="service-content">
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            </p>
                                        </div>
                                        <a href="" className='btn btn-primary small'>Read More</a>
                                    </div>
    
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4">
                                <div className="item">
                                    <div className="service-image">
                                        <img src={ServiceImg} className='w-100' />
                                    </div>
                                    <div className="service-body">
                                        <div className="service-title">
                                            <h3>Speciality Construction</h3>
                                        </div>
                                        <div className="service-content">
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            </p>
                                        </div>
                                        <a href="" className='btn btn-primary small'>Read More</a>
                                    </div>
    
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4">
                                <div className="item">
                                    <div className="service-image">
                                        <img src={ServiceImg} className='w-100' />
                                    </div>
                                    <div className="service-body">
                                        <div className="service-title">
                                            <h3>Speciality Construction</h3>
                                        </div>
                                        <div className="service-content">
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            </p>
                                        </div>
                                        <a href="" className='btn btn-primary small'>Read More</a>
                                    </div>
    
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4">
                                <div className="item">
                                    <div className="service-image">
                                        <img src={ServiceImg} className='w-100' />
                                    </div>
                                    <div className="service-body">
                                        <div className="service-title">
                                            <h3>Speciality Construction</h3>
                                        </div>
                                        <div className="service-content">
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            </p>
                                        </div>
                                        <a href="" className='btn btn-primary small'>Read More</a>
                                    </div>
    
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4">
                                <div className="item">
                                    <div className="service-image">
                                        <img src={ServiceImg} className='w-100' />
                                    </div>
                                    <div className="service-body">
                                        <div className="service-title">
                                            <h3>Speciality Construction</h3>
                                        </div>
                                        <div className="service-content">
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            </p>
                                        </div>
                                        <a href="" className='btn btn-primary small'>Read More</a>
                                    </div>
    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        <Footer/>
    </>
  )
}

export default Services
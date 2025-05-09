import React from 'react'
import AboutImg from '../../assets/images/about-us.jpg'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import ServiceImg from '../../assets/images/construction1.jpg'
import ProjectImg from '../../assets/images/construction2.jpg'
import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg';
import Icon3 from '../../assets/images/icon-3.svg';

const Home = () => {
  return (
    <>
        <Header />

        <main>
            {/* Hero Section */}
            <section className='section-1'>
                <div className='hero d-flex align-items-center'>
                    <div className='container-fluid'>
                        <div className='text-center'>
                            <span>Welcome Amazing Constructions</span>
                            <h1>Crafting dreams with <br /> precision and excellence.</h1>
                            <p>
                                We excel at transforming visions into reality through outstanding craftsmanship and precise <br/> attention to detail. With years of experience and a dedication to quality.
                                </p>
                            <div className='mt-3'>
                                <a className='btn btn-primary'>Contact Now</a>
                                <a className='btn btn-secondary ms-2'>View Projects</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 

            {/* About Section   */}
            <section className='section-2 py-5'>
                <div className='container py-5'>
                    <div className='row'>
                        <div className="col-md-6">
                            <img src={AboutImg} className='w-100' />
                        </div>
                        <div className="col-md-6">
                            <span>About Us</span>
                            <h2>Crafting structures that last a lifetime</h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Our Services Section  */}
            <section className='section-3 bg-light py-5'>
                <div className="container-fluid py-5">
                    <div className="section-header">
                        <span>Our Services</span>
                        <h2>Our construction services</h2>
                        <p>We offer a diverse range of construction services to meet your needs</p>
                    </div>
                    <div className="row pt-4">
                        <div className="col-md-3 col-lg-3">
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
                        <div className="col-md-3 col-lg-3">
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
                        <div className="col-md-3 col-lg-3">
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
                        <div className="col-md-3 col-lg-3">
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
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className='section-4 py-5'>
                <div className="container py-5">
                    <div className="section-header">
                        <span>Why Choose Us</span>
                        <h2>Discover our wide variety of projects</h2>
                        <p>
                            Created in close partnership with our clients and collaborators, this approach merges industry expertise, <br/>
                            decades of experience, innovations and flexibility to consistently deliver excellence.
                        </p>
                    </div>
                    <div className="row pt-4">
                        <div className="col-md-4">
                            <div className="card shadow border-0 p-4">
                                <div className="card-icon">
                                    <img src={Icon1} alt="" />
                                </div>
                                <div className="card-title mt-3">
                                    <h3>SweetHome Solutions</h3>
                                </div>
                                <p>
                                    Small actions create big impacts. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow border-0 p-4">
                                <div className="card-icon">
                                    <img src={Icon2} alt="" />
                                </div>
                                <div className="card-title mt-3">
                                    <h3>Superior Craftmanship</h3>
                                </div>
                                <p>
                                    Small actions create big impacts. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow border-0 p-4">
                                <div className="card-icon">
                                    <img src={Icon3} alt="" />
                                </div>
                                <div className="card-title mt-3">
                                    <h3>Knowledge and Expertise</h3>
                                </div>
                                <p>
                                    Small actions create big impacts. It all begins and ends with each employee committing to safer work practices daily, ensuring they return home safely.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Our Projects Section  */}
            <section className='section-3 bg-light py-5'>
                <div className="container-fluid py-5">
                    <div className="section-header">
                        <span>Our Projects</span>
                        <h2>Discover our diverse range of projects</h2>
                        <p>We offer a diverse range of construction services to meet your needs</p>
                    </div>
                    <div className="row pt-4">
                        <div className="col-md-3 col-lg-3">
                            <div className="item">
                                <div className="service-image">
                                    <img src={ProjectImg} className='w-100' />
                                </div>
                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>Jakarta Projects</h3>
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
                        <div className="col-md-3 col-lg-3">
                            <div className="item">
                                <div className="service-image">
                                    <img src={ProjectImg} className='w-100' />
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
                        <div className="col-md-3 col-lg-3">
                            <div className="item">
                                <div className="service-image">
                                    <img src={ProjectImg} className='w-100' />
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
                        <div className="col-md-3 col-lg-3">
                            <div className="item">
                                <div className="service-image">
                                    <img src={ProjectImg} className='w-100' />
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
                    </div>
                </div>
            </section>
            
        </main>

        <Footer />

    </>
  )
}

export default Home
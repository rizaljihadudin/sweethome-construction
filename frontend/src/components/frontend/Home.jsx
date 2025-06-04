import React from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import About from './layout/About'
import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg';
import Icon3 from '../../assets/images/icon-3.svg';
import AvatarImg from '../../assets/images/author-2.jpg'
// Import Swiper React components
import { Pagination  } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import LatestServices from './layout/LatestServices'
import LatestProjects from './layout/LatestProjects'
import LatestArticles from './layout/LatestArticles';
import ShowTestimonial from './layout/ShowTestimonial';


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
                                    <a className='btn btn-primary large'>Contact Now</a>
                                    <a className='btn btn-secondary ms-2 large'>View Projects</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 

                {/* About Section   */}
                <About/>


                {/* Our Services Section  */}
                <LatestServices/>

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
                <LatestProjects/>

                {/* Testimonials Section */}
                <ShowTestimonial/>

                {/* Blog and articles */}
                <LatestArticles/>
                
            </main>

            <Footer />

        </>
  )
}

export default Home
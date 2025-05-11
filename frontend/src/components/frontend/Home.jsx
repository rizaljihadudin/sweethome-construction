import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import About from '../layout/About'
import ServiceImg from '../../assets/images/construction1.jpg'
import ProjectImg from '../../assets/images/construction2.jpg'
import BlogImg from '../../assets/images/construction3.jpg'
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
                                    <a href="" className='btn btn-primary small'>Read More</a>
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
                                    <a href="" className='btn btn-primary small'>Read More</a>
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
                                    <a href="" className='btn btn-primary small'>Read More</a>
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
                                    <a href="" className='btn btn-primary small'>Read More</a>
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
                                    <a href="" className='btn btn-primary small'>Read More</a>
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
                                    <a href="" className='btn btn-primary small'>Read More</a>
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
                                    <a href="" className='btn btn-primary small'>Read More</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className='section-5 py-5'>
                <div className="container py-5">
                    <div className="section-header text-center">
                        <span>Testimonials</span>
                        <h2>What people are saying about us</h2>
                        <p>We offer a diverse range of construction services to meet your needs</p>
                    </div>
                    <Swiper
                        modules={[ Pagination ]}
                        spaceBetween={50}
                        slidesPerView={3}
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide>
                            <div className="card shadow border-0">
                                <div className="card-body p-5">
                                    <div className="rating">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                    </div>
                                    <div className="content pt-4 pb-2">
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, voluptates libero sapiente quisquam ad aliquam ipsum placeat debitis eum ratione natus inventore est cumque. Ullam tempore repudiandae est nam debitis.
                                        </p>
                                        <hr />
                                        <div className="d-flex meta">
                                            <div>
                                                <img src={AvatarImg} alt="" width={50} />
                                            </div>
                                            <div className='ps-3'>
                                                <div className='name'>John Doe</div>
                                                <div>CEO</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card shadow border-0">
                                <div className="card-body p-5">
                                    <div className="rating">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                    </div>
                                    <div className="content pt-4 pb-2">
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, voluptates libero sapiente quisquam ad aliquam ipsum placeat debitis eum ratione natus inventore est cumque. Ullam tempore repudiandae est nam debitis.
                                        </p>
                                        <hr />
                                        <div className="d-flex meta">
                                            <div>
                                                <img src={AvatarImg} alt="" width={50} />
                                            </div>
                                            <div className='ps-3'>
                                                <div className='name'>John Doe</div>
                                                <div>CEO</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card shadow border-0">
                                <div className="card-body p-5">
                                    <div className="rating">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                    </div>
                                    <div className="content pt-4 pb-2">
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, voluptates libero sapiente quisquam ad aliquam ipsum placeat debitis eum ratione natus inventore est cumque. Ullam tempore repudiandae est nam debitis.
                                        </p>
                                        <hr />
                                        <div className="d-flex meta">
                                            <div>
                                                <img src={AvatarImg} alt="" width={50} />
                                            </div>
                                            <div className='ps-3'>
                                                <div className='name'>John Doe</div>
                                                <div>CEO</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card shadow border-0">
                                <div className="card-body p-5">
                                    <div className="rating">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                    </div>
                                    <div className="content pt-4 pb-2">
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, voluptates libero sapiente quisquam ad aliquam ipsum placeat debitis eum ratione natus inventore est cumque. Ullam tempore repudiandae est nam debitis.
                                        </p>
                                        <hr />
                                        <div className="d-flex meta">
                                            <div>
                                                <img src={AvatarImg} alt="" width={50} />
                                            </div>
                                            <div className='ps-3'>
                                                <div className='name'>John Doe</div>
                                                <div>CEO</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card shadow border-0">
                                <div className="card-body p-5">
                                    <div className="rating">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                        </svg>
                                    </div>
                                    <div className="content pt-4 pb-2">
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, voluptates libero sapiente quisquam ad aliquam ipsum placeat debitis eum ratione natus inventore est cumque. Ullam tempore repudiandae est nam debitis.
                                        </p>
                                        <hr />
                                        <div className="d-flex meta">
                                            <div>
                                                <img src={AvatarImg} alt="" width={50} />
                                            </div>
                                            <div className='ps-3'>
                                                <div className='name'>John Doe</div>
                                                <div>CEO</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

            {/* Blog and articles */}
            <section className='section-6 bg-light py-5'>
                <div className='container py-5'>
                    <div className="section-header">
                        <span>BLOG & NEWS</span>
                        <h2>Articles & blog post</h2>
                        <p>
                            We specialize in a wide range of construction services, including residential, commercial, and industial projects.
                        </p>
                    </div>
                    <div className="row pt-3">
                        <div className="col-md-4">
                            <div className="card shadow border-0">
                                <div className="card-img-top">
                                    <img src={BlogImg} alt="" className='w-100'/>
                                </div>
                                <div className="card-body p-4">
                                    <div className='mb-3'>
                                        <a href="" className='title'>Blog Title</a>
                                    </div>
                                    <a href="" className='btn btn-primary'>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow border-0">
                                <div className="card-img-top">
                                    <img src={BlogImg} alt="" className='w-100'/>
                                </div>
                                <div className="card-body p-4">
                                    <div className='mb-3'>
                                        <a href="" className='title'>Blog Title</a>
                                    </div>
                                    <a href="" className='btn btn-primary'>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow border-0">
                                <div className="card-img-top">
                                    <img src={BlogImg} alt="" className='w-100'/>
                                </div>
                                <div className="card-body p-4">
                                    <div className='mb-3'>
                                        <a href="" className='title'>Blog Title</a>
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
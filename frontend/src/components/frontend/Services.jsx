import React, { useEffect, useState } from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Hero from './layout/Hero'
import ServiceImg from '../../assets/images/construction1.jpg'
import { baseUrl, fileUrl } from '../../config'
import { Link } from 'react-router-dom'

const contents = {
    preHeading: 'Quality. Intregity. Value.',
    heading: 'Services',
    text:'We offer a diverse array of construction services, <br/> spanning residential, commercial, and industrial projects.'
}

const Services = () => {

     const [services, setServices] = useState([]);
    
        const fetchLastServices = async () => {
             const res = await fetch(`${baseUrl}/get-services`,{
                method : 'GET'
            }); 
            
            const result = await res.json();
            setServices(result.data);
        }

        console.log(services);
    
        useEffect(() => {
            fetchLastServices();
        }, [])

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
                                {
                                    services && services.map((service, index) => {
                                        return (
                                            <div className="col-md-4 col-lg-4" key={index}>
                                                <div className="item">
                                                    <div className="service-image">
                                                        <img src={`${fileUrl}/uploads/services/small/${service.image}`} className='w-100' />
                                                    </div>
                                                    <div className="service-body">
                                                        <div className="service-title">
                                                            <h3>{service.title}</h3>
                                                        </div>
                                                        <div className="service-content">
                                                            <p>
                                                                {service.short_desc}
                                                            </p>
                                                        </div>
                                                        <Link to={`/services/${service.slugs}`} className='btn btn-primary'>Read More</Link>
                                                    </div>
                    
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </section>
                </main>
            <Footer/>
        </>
    )
}

export default Services
import React, { useEffect, useState } from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Hero from './layout/Hero'
import { Link, NavLink, useParams } from 'react-router-dom'
import { baseUrl, fileUrl } from '../../config'
import ShowTestimonial from './layout/ShowTestimonial';
const ServiceDetail = () => {

    const [service, setService] = useState('');
    const [services, setServices] = useState([]);
    const params                = useParams();

    // Get All services
    const fetchServices = async () => {
        const res = await fetch(`${baseUrl}/get-services`, {
            'method' : 'GET',
            headers: {
                'Accept' : 'application/json',
                'Content-type' : 'application/json'
            }
        });

        const result = await res.json();
        setServices(result.data);
    }

    // Get single service
    const fetchSingleService = async () => {
        const res = await fetch(`${baseUrl}/get-service/${params.slug}`, {
            'method' : 'GET',
            headers: {
                'Accept' : 'application/json',
                'Content-type' : 'application/json'
            }
        });

        const result = await res.json();
        setService(result.data);
    }

    useEffect(() => {
        fetchServices();
        fetchSingleService();
    });

    return (
        <div>
            <Header/>
                <main>   
                    <Hero contents={{
                        preHeading: 'Quality. Intregity. Value.',
                        heading: service.title,
                        text: ''
                    }}/>
                    <section className='section-10'>
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className='card shadow border-0 sidebar'>
                                        <div className="card-body px-4 py-4">
                                            <h3 className="mt-3 mb-4">
                                                Our Services
                                            </h3>
                                            <ul>
                                                {
                                                    services && services.map((service, index) => (
                                                        <li key={`service-${index}`}>
                                                            <NavLink to={`/services/${service.slug}`} className={service.slug === params.slug ? 'active' : ''}>
                                                                {service.title}
                                                            </NavLink>
                                                        </li>
                                                    ))
                                                }
                                                <li></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div>
                                        <img className='w-100' src={`${fileUrl}/uploads/services/large/${service.image}`} alt="" />
                                    </div>
                                    <h3 className='py-3'>
                                        {service.title}
                                    </h3>
                                    <div dangerouslySetInnerHTML={{__html: service.content}}>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <ShowTestimonial/>
                                </div>
                            </div>
                        </div>
                    </section> 
                </main>
            <Footer/>
        </div>
    )
}

export default ServiceDetail
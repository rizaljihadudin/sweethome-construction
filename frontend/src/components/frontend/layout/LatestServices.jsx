import React, { useEffect, useState } from 'react'
import { baseUrl, fileUrl } from '../../../config';

const LatestServices = () => {

    const [services, setServices] = useState([]);

    const fetchLastServices = async () => {
         const res = await fetch(`${baseUrl}/get-latest-services?limit=4`,{
            method : 'GET'
        }); 
        
        const result = await res.json();
        setServices(result.data);
    }

    useEffect(() => {
        fetchLastServices();
    }, [])

    return (
        <>
            <section className='section-3 bg-light py-5'>
                <div className="container-fluid py-5">
                    <div className="section-header">
                        <span>Our Services</span>
                        <h2>Our construction services</h2>
                        <p>We offer a diverse range of construction services to meet your needs</p>
                    </div>
                    <div className="row pt-4">
                        {
                            services &&services.map((service, index) => {
                                return (
                                    <div className="col-md-3 col-lg-3" key={`service-${index}`}>
                                        <div className="item">
                                            <div className="service-image">
                                                <img src={`${fileUrl}/uploads/services/small/${service.image}`} className='w-100' />
                                            </div>
                                            <div className="service-body">
                                                <div className="service-title">
                                                    <h3>{service.title.toUpperCase()}</h3>
                                                </div>
                                                <div className="service-content">
                                                    <p>
                                                        {service.short_desc}
                                                    </p>
                                                </div>
                                                <a href="" className='btn btn-primary'>Read More</a>
                                            </div>

                                        </div>
                                    </div> 
                                )
                            })
                        }
                        
                    </div>
                </div>
            </section>   
        </>
    )
}

export default LatestServices
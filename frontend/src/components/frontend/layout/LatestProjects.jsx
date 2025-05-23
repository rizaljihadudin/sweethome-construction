import React, { useEffect, useState } from 'react'
import { baseUrl, fileUrl } from '../../../config';

const LatestProjects = () => {

    const [projects, setProjects] = useState([]);
    
    const fetchLastProjects = async () => {
            const res = await fetch(`${baseUrl}/get-latest-projects?limit=4`,{
            method : 'GET'
        }); 
        
        const result = await res.json();
        setProjects(result.data);
    }

    useEffect(() => {
        fetchLastProjects();
    }, [])

    return (
        <>
            <section className='section-3 bg-light py-5'>
                <div className="container-fluid py-5">
                    <div className="section-header">
                        <span>Our Projects</span>
                        <h2>Discover our diverse range of projects</h2>
                        <p>We offer a diverse range of construction services to meet your needs</p>
                    </div>
                    <div className="row pt-4">
                        {
                            projects && projects.map((project, index) => (
                                <div className="col-md-3 col-lg-3" key={`projects-${index}`}>
                                    <div className="item">
                                        <div className="service-image">
                                            <img src={`${fileUrl}/uploads/projects/small/${project.image}`} className='w-100' />
                                        </div>
                                        <div className="service-body">
                                            <div className="service-title">
                                                <h3>{project.title}</h3>
                                            </div>
                                            <div className="service-content">
                                                <p>
                                                    {project.short_desc}
                                                </p>
                                            </div>
                                            <a href="" className='btn btn-primary small'>Read More</a>
                                        </div>

                                    </div>
                                </div>
                            ))
                        }
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default LatestProjects
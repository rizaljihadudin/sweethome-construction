import React, { useEffect, useState } from 'react'
import Header from './layout/Header'
import Hero from './layout/Hero'
import Footer from './layout/Footer'
import { useParams } from 'react-router-dom'
import { baseUrl, fileUrl } from '../../config'
import ShowTestimonial from './layout/ShowTestimonial'

const ProjectDetail = () => {

    const [project, setProject] = useState('');
    const params                = useParams();

    const fetchSingleData = async () => {
        const res = await fetch(`${baseUrl}/get-project/${params.slug}`,{
            'method' : 'GET',
        });

        const result = await res.json();
        setProject(result.data);
    }

    useEffect(() => {
        fetchSingleData();
    });

    return (
        <div>
            <Header/>
                <main>   
                    <Hero contents={{
                        preHeading: 'Quality. Intregity. Value.',
                        heading: project.title,
                        text: ''
                    }}/>
                    <section className='section-10'>
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className='card shadow border-0 sidebar'>
                                        <div className="card-body px-4 py-4">
                                            <h3 className="mt-3 mb-4">
                                                Insights
                                            </h3>
                                            <ul>
                                                {
                                                    project.location && 
                                                    <li className='mb-2'>
                                                        <span className='text-body-secondary'>Location</span>
                                                        <p>{project.location}</p>
                                                    </li>
                                                }

                                                {
                                                    project.construction_type && 
                                                    <li className='mb-2'>
                                                        <span className='text-body-secondary'>Construction Type</span>
                                                        <p>{project.construction_type}</p>
                                                    </li>
                                                }

                                                {
                                                    project.sector && 
                                                    <li className='mb-2'>
                                                        <span className='text-body-secondary'>Sector</span>
                                                        <p>{project.sector}</p>
                                                    </li>
                                                }
                                                
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div>
                                        <img className='w-100' src={`${fileUrl}/uploads/projects/large/${project.image}`} alt="" />
                                    </div>
                                    <h3 className='py-3'>
                                        {project.title}
                                    </h3>
                                    <div dangerouslySetInnerHTML={{__html: project.content}}>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> 
                    <section className='section-11 bg-light py-5'>
                        <ShowTestimonial/>                       
                    </section>
                </main>
            <Footer/>
        </div>
    )
}

export default ProjectDetail
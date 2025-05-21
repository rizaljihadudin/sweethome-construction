import React, { useEffect, useState } from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Hero from './layout/Hero'
import ProjectImg from '../../assets/images/construction2.jpg'
import { baseUrl, fileUrl } from '../../config'

const contents = {
    preHeading: 'Quality. Intregity. Value.',
    heading: 'Our Projects',
    text:'We offer a diverse array of construction services, <br/> spanning residential, commercial, and industrial projects.'
}

const Projects = () => {
    const [projects, setProjects] = useState([]);
        
    const fetchLastProjects = async () => {
            const res = await fetch(`${baseUrl}/get-projects`,{
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
            <Header/>
                <main>
                    {/* Hero Section */}
                    <Hero contents={contents}/>
                </main>

                {/* Our Projects Section  */}
                <section className='section-3 bg-light py-5'>
                    <div className="container py-5">
                        <div className="section-header">
                            <span>Our Projects</span>
                            <h2>Explore our diverse range of projects</h2>
                            <p>We offer a diverse range of construction services to meet your needs</p>
                        </div>
                        <div className="row pt-4">
                            {
                                projects && projects.map((project, index) => (
                                    <div className="col-md-4 col-lg-4" key={index}>
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
            <Footer/>
        </>
    )
}

export default Projects
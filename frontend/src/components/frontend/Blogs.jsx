import React, { useEffect, useState } from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Hero from './layout/Hero'
import BlogImg from '../../assets/images/construction3.jpg'
import { baseUrl, fileUrl } from '../../config'
import { toast } from 'react-toastify'

const contents = {
    preHeading: 'Quality. Intregity. Value.',
    heading: 'Blogs',
    text:'We offer a diverse array of construction services, <br/> spanning residential, commercial, and industrial projects.'
}

const Blogs = () => {
    const [articles, setArticles] = useState([]);

    const fetchDataArticles = async () => {
        const res = await fetch(`${baseUrl}/get-articles`, {
            method : 'GET'
        });

        const result = await res.json();

        if(result.status == true){
            setArticles(result.data);
        }else{
            toast.error(result.message);
        }
    }

    useEffect(() => {
        fetchDataArticles();
    }, []);

    return (
        <>
            <Header/>
                <main>
                    {/* Hero Section */}
                    <Hero contents={contents}/>

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
                                {
                                    articles && articles.map((article, index) => (
                                        <div className="col-md-4 mb-3" key={`articles-${index}`}>
                                            <div className="card shadow border-0">
                                                <div className="card-img-top">
                                                    <img src={`${fileUrl}/uploads/articles/large/${article.image}`} alt="" className='w-100'/>
                                                </div>
                                                <div className="card-body p-4">
                                                    <div className='mb-3'>
                                                        <a href="" className='title'>{article.title}</a>
                                                    </div>
                                                    <a href="" className='btn btn-primary'>Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </section>
                </main>
                
                
            <Footer/>
        </>
    )
}

export default Blogs
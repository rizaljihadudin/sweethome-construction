import React, { useEffect, useState } from 'react'
import Header from '../../frontend/layout/Header'
import Footer from '../../frontend/layout/Footer'
import Sidebar from '../layout/Sidebar'
import { Link } from 'react-router-dom'
import { baseUrl, token } from '../../../config'
import { toast } from 'react-toastify'

const Show = () => {

    const [articles, setArticles] = useState([]);
    const fetchArticles = async () => {
        const res = await fetch(`${baseUrl}/articles`, {
            method: "GET",
            headers : {
                'Content-type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `Bearer ${token()}`
            }
        })

        const result = await res.json();
        if(result.success == true){
            setArticles(result.data);
        }else{
            toast.error(result.message);
        }
    }

    const handleDelete = (id) => {
        const confirm = window.confirm('Are you sure you want to delete this article?');
        if(confirm){
            fetch(`${baseUrl}/articles/${id}`, {
                method: "DELETE",
                headers : {
                    'Content-type' : 'application/json',
                    'Accept' : 'application/json',
                    'Authorization' : `Bearer ${token()}`
                }
            }).then(res => res.json())
            .then(result => {
                if(result.success == true){
                    const newData = articles.filter(service => service.id !== id);
                    setArticles(newData);
                    toast.success(result.message);
                }else{
                    toast.error(result.message);
                }
            })
        }
    }

    useEffect(() => {
        fetchArticles();
    }, [])

    return (
        <>
            <Header/>
                <main>
                    <div className="container my-5">
                        <div className="row">
                            <div className='col-md-3'>
                                {/* Sidebar */}
                                <Sidebar/>
                            </div>

                            <div className='col-md-9'>
                                {/* Main Content */}
                                <div className="card shadow border-0">
                                    <div className="card-body p-4">
                                        <div className="d-flex justify-content-between">
                                            <h4 className='h5'>Articles</h4>
                                            <Link to={"/admin/projects/create"} className='btn btn-primary'>Create</Link>
                                        </div>
                                        <hr />

                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>Name</th>
                                                    <th>Slug</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    articles && articles.map((article, index) => (
                                                        <tr key={index}>
                                                            <td>{index + 1}</td>
                                                            <td>{article.title}</td>
                                                            <td>{article.slug}</td>
                                                            <td>{article.status == 1 ? 'Active' : 'Inactive'}</td>
                                                            <td>
                                                                <Link to={`/admin/articles/edit/${article.id}`} className='btn btn-primary'>
                                                                    Edit
                                                                </Link>
                                                                <Link onClick={() => handleDelete(article.id)} className={'btn btn-danger btn-sm ms-2'}>
                                                                    Delete
                                                                </Link>                                                               
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            <Footer/>
        </>
    )
}

export default Show
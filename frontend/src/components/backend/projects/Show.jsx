import React, { useEffect, useState } from 'react'
import Header from '../../frontend/layout/Header'
import Sidebar from '../layout/Sidebar'
import Footer from '../../frontend/layout/Footer'
import { baseUrl, token } from '../../../config'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Show = () => {

    const [projects, setProjects] = useState([]);

    const fetchProjects = async () => {
        const res = await fetch(`${baseUrl}/projects`, {
            method : 'GET',
            headers : {
                'Content-type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `Bearer ${token()}`
            }
        });

        const result = await res.json();

        if(result.status == true){
            setProjects(result.data);
        }
    }

    const handleDelete = async (id) => {
        const confirm = window.confirm('Are you sure you want to delete this project?');
        if(confirm){
            const res = await fetch(`${baseUrl}/projects/${id}`, {
                method : 'DELETE',
                headers : {
                    'Content-type' : 'application/json',
                    'Accept' : 'application/json',
                    'Authorization' : `Bearer ${token()}`
                }
            });

            const result = await res.json();
            
            if(result.status == true){
                const newProjects = projects.filter(service => service.id !== id);
                setProjects(newProjects);
                toast.success(result.message);
            }else{
                toast.error(result.message);
            }
        }
    } 

    useEffect(() => {
        fetchProjects();
    }, []);

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
                                            <h4 className='h5'>Services</h4>
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
                                                    projects && projects.map((project, index) => (
                                                        <tr key={index}>
                                                            <td>{index + 1}</td>
                                                            <td>{project.title}</td>
                                                            <td>{project.slug}</td>
                                                            <td>{project.status == 1 ? 'Active' : 'Inactive'}</td>
                                                            <td>
                                                                <Link to={`/admin/projects/edit/${project.id}`} className='btn btn-primary'>
                                                                    Edit
                                                                </Link>
                                                                <Link onClick={() => handleDelete(project.id)} className={'btn btn-danger btn-sm ms-2'}>
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
import React, { useEffect, useState } from 'react'
import Sidebar from '../layout/Sidebar'
import { Link } from 'react-router-dom'
import { baseUrl, token } from '../../../config';
import { toast } from 'react-toastify';
import Header from '../../frontend/layout/Header';
import Footer from '../../frontend/layout/Footer';

const Show = () => {

    const [testimonials, setTestimonials] = useState([]);
    
    async function fetchServices  (){
        const res = await fetch(`${baseUrl}/testimonials`, {
            method : 'GET',
            headers : {
                'Content-type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `Bearer ${token()}`
            }
        });

        const result = await res.json();
        if(result.status == true){
            setTestimonials(result.data);
        }
    }

    const handleDelete = async (id) => {
        const confirm = window.confirm('Are you sure you want to delete this testimonial?');

        if(confirm){
            const res = await fetch(`${baseUrl}/testimonials/${id}`,{
                method : 'DELETE',
                headers : {
                    'Content-type' : 'application/json',
                    'Accept' : 'application/json',
                    'Authorization' : `Bearer ${token()}`
                }
            });

            const result = await res.json();

            if(result.status == true){
                const newData = testimonials.filter(testimonial => testimonial.id !== id);
                setTestimonials(newData);
                toast.success(result.message);
            }else{
                toast.error(result.message);
            }
        }
        
    }

    useEffect(() => {
        fetchServices();
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
                                            <h4 className='h5'>Testimonials</h4>
                                            <Link to={"/admin/testimonials/create"} className='btn btn-primary'>Create</Link>
                                        </div>
                                        <hr />

                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th style={
                                                        {
                                                            width: '400px',
                                                        }
                                                    }>Testimonials</th>
                                                    <th>Name</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    testimonials && testimonials.map((testimonial, index) => (
                                                        <tr key={index}>
                                                            <td>{index + 1}</td>
                                                            <td style={
                                                                {
                                                                    textAlign: 'justify',
                                                                }
                                                            }>{testimonial.testimonial}</td>
                                                            <td>{testimonial.message}</td>
                                                            <td>
                                                                {
                                                                    testimonial.status == 1 ? 'Active' : 'Inactive'
                                                                }
                                                            </td>
                                                            <td>
                                                                <Link to={`/admin/testimonials/edit/${testimonial.id}`} className={'btn btn-primary btn-sm'}>
                                                                    Edit
                                                                </Link>
                                                               <Link onClick={() => handleDelete(testimonial.id)} className={'btn btn-danger btn-sm ms-2'}>
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
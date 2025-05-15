import React, { useEffect, useState } from 'react'
import Header from '../../frontend/layout/Header'
import Footer from '../../frontend/layout/Footer'
import Sidebar from '../layout/Sidebar'
import { baseUrl } from '../../../config'
import { token } from '../../../config'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Show = () => {

    const [services, setServices] = useState([]);

    async function fetchServices  (){
        const res = await fetch(`${baseUrl}/services`, {
            method : 'GET',
            headers : {
                'Content-type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `Bearer ${token()}`
            }
        });

        const result = await res.json();

        console.log(result);

        if(result.status == true){
            setServices(result.data);
        }
    }

    const handleDelete = async (id) => {
        const confirm = window.confirm('Are you sure you want to delete this service?');

        if(confirm){
            const res = await fetch(`${baseUrl}/services/${id}`,{
                method : 'DELETE',
                headers : {
                    'Content-type' : 'application/json',
                    'Accept' : 'application/json',
                    'Authorization' : `Bearer ${token()}`
                }
            });

            const result = await res.json();

            if(result.status == true){
                const newServices = services.filter(service => service.id !== id);
                setServices(newServices);
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
                                            <h4 className='h5'>Services</h4>
                                            <Link to={"/admin/services/create"} className='btn btn-primary'>Create</Link>
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
                                                    services && services.map((service, index) => (
                                                        <tr key={index}>
                                                            <td>{index + 1}</td>
                                                            <td>{service.title}</td>
                                                            <td>{service.slug}</td>
                                                            <td>
                                                                {
                                                                    service.status == 1 ? 'Active' : 'Inactive'
                                                                }
                                                            </td>
                                                            <td>
                                                                <Link to={`/admin/services/edit/${service.id}`} className={'btn btn-primary btn-sm'}>
                                                                    Edit
                                                                </Link>
                                                               <Link onClick={() => handleDelete(service.id)} className={'btn btn-danger btn-sm ms-2'}>
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
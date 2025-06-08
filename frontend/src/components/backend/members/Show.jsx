import React, { useEffect, useState } from 'react'
import Header from '../../frontend/layout/Header'
import Footer from '../../frontend/layout/Footer'
import Sidebar from '../layout/Sidebar'
import { Link } from 'react-router-dom'
import { baseUrl, token } from '../../../config'
import { toast } from 'react-toastify'

const Show = () => {

    const [members, setMembers] = useState([]);

    const fetchData = async () => {
        const res = await fetch(`${baseUrl}/members`, {
            'method' : 'GET',
            headers : {
                'Content-type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `Bearer ${token()}`
            }
        })

        const result = await res.json();
        
        if(result.success == true){
            setMembers(result.data);
        }else{
            toast.error(result.message);
        }
    }


    const handleDelete = async (id) => {
        const conf = confirm('Are you sure you want to delete this member?');

        if(conf){
            const res = await fetch(`${baseUrl}/members/${id}`, {
                'method' : 'DELETE',
                headers : {
                    'Content-type' : 'application/json',
                    'Accept' : 'application/json',
                    'Authorization' : `Bearer ${token()}`
                }
            });

            const result = await res.json();
            
            if(result.success == true){
                const newData = members.filter(member => member.id !== id);
                setMembers(newData);
                toast.success(result.message);
            }else{
                toast.error(result.message);
            }
        }
    }


    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Header/>
                <main>
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-md-3">
                                <Sidebar/>
                            </div>
                            <div className="col-md-9">
                                <div className="card shadow border-0">
                                    <div className="card-body p-4">
                                        <div className="d-flex justify-content-between">
                                            <h4 className='h5'>Members</h4>
                                            <Link to={"/admin/members/create"} className='btn btn-primary'>Create</Link>
                                        </div>
                                        <hr />

                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>Name</th>
                                                    <th>Job Title</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    members && members.map((member, index) => (
                                                        <tr key={`member-${index}`}>
                                                            <td>{index+1}.</td>
                                                            <td>{member.name}</td>
                                                            <td>{member.job_title}</td>
                                                            <td>
                                                                {
                                                                    member.status == 1 ? 'Active' : 'Inactive'
                                                                }
                                                            </td>
                                                            <td>
                                                                <Link to={`/admin/members/edit/${member.id}`} className={'btn btn-primary btn-sm'}>
                                                                    Edit
                                                                </Link>
                                                                <Link onClick={() => handleDelete(member.id)} className={'btn btn-danger btn-sm ms-2'}>
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
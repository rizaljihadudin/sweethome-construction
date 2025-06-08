import React, { useState } from 'react'
import Header from '../../frontend/layout/Header'
import Sidebar from '../layout/Sidebar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import Footer from '../../frontend/layout/Footer'
import { useForm } from 'react-hook-form'
import { baseUrl, fileUrl, token } from '../../../config'
import { toast } from 'react-toastify'

const Edit = () => {

    const [isDisable, setIsDisable] = useState(false);
    const [imageId, setImageId]     = useState(null);
    const [member, setMember]       = useState('');
    const params                    = useParams();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: async () => {
            const res = await fetch(`${baseUrl}/members/${params.id}`, {
                'method' : 'GET',
                headers : {
                    'Content-type' : 'application/json',
                    'Accept' : 'application/json',
                    'Authorization' : `Bearer ${token()}`
                }
            });

            const result = await res.json();
            setMember(result.data);
            return {
                name : result.data.name,
                job_title : result.data.job_title,
                linkedin_url : result.data.linkedin_url,
                status : result.data.status
            }


        }
    })

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const newData = {...data, "imageId":imageId};
        const res = await fetch(`${baseUrl}/members/${params.id}`,{
            method : 'PATCH',
            headers : {
                'Content-type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `Bearer ${token()}`
            },
            body: JSON.stringify(newData)
        }); 
        
        const result = await res.json();
        console.log(result);
                
        if (result.status == false){
            toast.error(result.message)
        } else {
            toast.success(result.message)
            navigate('/admin/members');
        }
    }

    const handleFile = async (e) => {
        setIsDisable(true);
        const formData = new FormData();
        const file = e.target.files[0];
        formData.append('image', file);

        await fetch(`${baseUrl}/temp-images`,{
            method : 'POST',
            headers : {
                'Accept' : 'application/json',
                'Authorization' : `Bearer ${token()}`
            },
            body: formData
        })
        .then(response => response.json())
        .then(result => {
            if(result.status == false){
                toast.error(result.errors.image[0]);
            }else{
                setImageId(result.data.id);
                setIsDisable(false);
            }
        }); 
    }

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
                                            <h4 className='h5'>
                                                <span>Members</span> / Edit
                                            </h4>
                                            <Link to={"/admin/members"} className="btn btn-primary">
                                                Back
                                            </Link>
                                        </div>
                                        <hr />
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="mb-3">
                                                <label htmlFor="" className='form-label'>
                                                    Name <font color="red">*</font>
                                                </label>
                                               <input 
                                                {
                                                    ...register("name", 
                                                        { 
                                                            required: 'Name is required' 
                                                        }
                                                    )
                                                } className={`form-control ${errors.name ? "is-invalid" : ""}`} placeholder="Name"  type='text' />
                                                {errors.name && <p className='invalid-feedback'>{errors.name?.message}</p>}
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="" className='form-label'>
                                                    Job Title <font color="red">*</font>
                                                </label>
                                                <input
                                                    {
                                                        ...register("job_title", 
                                                            { 
                                                                required: 'Job Title is required' 
                                                            }
                                                        )
                                                    } 
                                                
                                                type="text" placeholder='Job Title' className={`form-control ${errors.job_title ? "is-invalid" : ""}`} />
                                                {errors.job_title && <p className='invalid-feedback'>{errors.job_title?.message}</p>}
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="" className='form-label'>
                                                    LinkedIn URL
                                                </label>
                                                <input
                                                    {
                                                        ...register("linkedin_url")
                                                    } 
                                                
                                                type="text" placeholder='LinkedIn URL' className={`form-control`} />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="" className='form-label'>Image</label>
                                                <br />
                                                <input onChange={handleFile} type="file" />
                                                <div className='mt-2'>
                                                    {
                                                        member.image && 
                                                        <img src={`${fileUrl}/uploads/members/${member.image}`} />
                                                    }
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="" className='form-label'>Status</label>
                                                <select
                                                    {
                                                        ...register("status")
                                                    }
                                                className='form-control'>
                                                    <option value={""}>-- Select Status --</option>
                                                    <option value="1">Active</option>
                                                    <option value="0">Inactive</option>
                                                </select>
                                            </div>

                                            <button disabled={isDisable} className='btn btn-primary'>
                                                Submit {
                                                    isDisable &&
                                                    <Spinner 
                                                        as="span"
                                                        animation="border" 
                                                        role="status"
                                                        size="sm"
                                                    >
                                                        <span className="visually-hidden">Loading...</span>
                                                    </Spinner>
                                                }
                                            </button>
                                        </form>
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

export default Edit
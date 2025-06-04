import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { baseUrl, fileUrl, token } from '../../../config';
import { toast } from 'react-toastify';
import Header from '../../frontend/layout/Header';
import Sidebar from '../layout/Sidebar';
import Footer from '../../frontend/layout/Footer';

const Edit = () => {
    const [isDisable, setIsDisable] = useState(false);
    const [imageId, setImageId] = useState(null);
    const [testimonial, setTestimonial] = useState('');
    const params = useParams();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: async () => {
            const res = await fetch(`${baseUrl}/testimonials/${params.id}`, {
                method : 'GET',
                headers : {
                    'Content-type' : 'application/json',
                    'Accept' : 'application/json',
                    'Authorization' : `Bearer ${token()}`
                }
            });
            const result = await res.json();
            setTestimonial(result.data);
            return {
                testimonial: result.data.testimonial,
                message: result.data.message,
                designation: result.data.designation,
                status: result.data.status
            }
        }
    })

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const newData = {...data, "imageId":imageId};
        const res = await fetch(`${baseUrl}/testimonials/${params.id}`,{
            method : 'PUT',
            headers : {
                'Content-type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `Bearer ${token()}`
            },
            body: JSON.stringify(newData)
        }); 
        
        const result = await res.json();
        console.log('xxx',result);
                
        if (result.status == false){
            toast.error(result.message)
        } else {
            toast.success(result.message)
            navigate('/admin/testimonials');
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
                                                <span>Testimonials</span> / Create
                                            </h4>
                                            <Link to={"/admin/testimonials"} className="btn btn-primary">
                                                Back
                                            </Link>
                                        </div>
                                        <hr />
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="mb-3">
                                                <label htmlFor="" className='form-label'>
                                                    Testimonials <font color="red">*</font>
                                                </label>
                                               <textarea 
                                                {
                                                    ...register("testimonial", 
                                                        { 
                                                            required: 'Testimonials is required' 
                                                        }
                                                    )
                                                } className={`form-control ${errors.testimonial ? "is-invalid" : ""}`} placeholder="Testimonials" rows={4}></textarea>
                                                {errors.testimonial && <p className='invalid-feedback'>{errors.testimonial?.message}</p>}
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="" className='form-label'>
                                                    Citation <font color="red">*</font>
                                                </label>
                                                <input
                                                    {
                                                        ...register("message", 
                                                            { 
                                                                required: 'Citation is required' 
                                                            }
                                                        )
                                                    } 
                                                
                                                type="text" placeholder='Citation' className={`form-control ${errors.message ? "is-invalid" : ""}`} />
                                                {errors.message && <p className='invalid-feedback'>{errors.message?.message}</p>}
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="" className='form-label'>
                                                    Title
                                                </label>
                                                <input
                                                    {
                                                        ...register("designation")
                                                    } 
                                                
                                                type="text" placeholder='Designation' className={`form-control`} />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="" className='form-label'>Image</label>
                                                <br />
                                                <input onChange={handleFile} type="file" />
                                                <div className='pb-3 pt-3'>
                                                    {
                                                        testimonial.image && <img src={`${fileUrl}/uploads/testimonials/small/${testimonial.image}`} />
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

                                            <button disabled={isDisable} className='btn btn-primary'>Submit</button>
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
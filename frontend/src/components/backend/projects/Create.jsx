import React, { useMemo, useRef, useState } from 'react'
import Header from '../../frontend/layout/Header'
import Footer from '../../frontend/layout/Footer'
import { toast } from 'react-toastify';
import { baseUrl, token } from '../../../config';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Sidebar from '../layout/Sidebar';
import JoditEditor from 'jodit-react';
import Spinner from 'react-bootstrap/Spinner';

const Create = ({placeholder}) => {

    const editor = useRef(null);
	const [content, setContent] = useState('');
    const [isDisable, setIsDisable] = useState(false);
    const [imageId, setImageId] = useState(null);

    const config = useMemo(() => ({
			readonly: false, // all options from https://xdsoft.net/jodit/docs/,
			placeholder: placeholder || 'Content',
            height:500
		}),
		[placeholder]
	);

     const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const newData = {...data, 'content':content, "imageId":imageId};
        const res = await fetch(`${baseUrl}/projects`,{
            method : 'POST',
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
            navigate('/admin/projects');
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
                                                <span>Projects</span> / Create
                                            </h4>
                                            <Link to={"/admin/projects"} className="btn btn-primary">
                                                Back
                                            </Link>
                                        </div>
                                        <hr />
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="mb-3">
                                                <label htmlFor="" className='form-label'>
                                                    Title <font color="red">*</font>
                                                </label>
                                                <input 
                                                    {
                                                        ...register("title", 
                                                            { 
                                                                required: 'Title is required', 
                                                            }
                                                        )
                                                    } 
                                                type="text" placeholder='Enter Title' className={`form-control ${errors.title ? "is-invalid" : ""}`} />
                                                {errors.title && <p className='invalid-feedback'>{errors.title?.message}</p>}
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="" className='form-label'>
                                                    Slug <font color="red">*</font>
                                                </label>
                                                <input
                                                    {
                                                        ...register("slug", 
                                                            { 
                                                                required: 'Slug is required' 
                                                            }
                                                        )
                                                    } 
                                                
                                                type="text" placeholder='Enter Slug' className={`form-control ${errors.slug ? "is-invalid" : ""}`} />
                                                {errors.slug && <p className='invalid-feedback'>{errors.slug?.message}</p>}
                                            </div>
                                            <div className="mb-3">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label htmlFor="" className='form-label'>
                                                            Location
                                                        </label>
                                                        <input
                                                            {
                                                                ...register("location")
                                                            } 
                                                        type="text" placeholder='Enter Location' className={`form-control`} />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label htmlFor="" className='form-label'>
                                                            Construction Type
                                                        </label>
                                                        <select
                                                            {
                                                                ...register("construction_type")
                                                            }
                                                        className='form-control'>
                                                            <option value={""}>-- Select Construction Type --</option>
                                                            <option value="Residential Construction">Residential Construction</option>
                                                            <option value="Commercial Construction">Commercial Construction</option>
                                                            <option value="Industrial Construction">Industrial Construction</option>
                                                            <option value="Infrastructure Construction">Infrastructure Construction</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label htmlFor="" className='form-label'>
                                                            Sector
                                                        </label>
                                                        <select
                                                            {
                                                                ...register("sector")
                                                            }
                                                        className='form-control'>
                                                            <option value={""}>-- Select Sector --</option>
                                                            <option value="Health">Health</option>
                                                            <option value="Education">Education</option>
                                                            <option value="Corporate">Corporate</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-6">
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
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="" className='form-label'>Short Description</label>
                                                <textarea
                                                    {
                                                        ...register("short_desc")
                                                    }  
                                                className='form-control' placeholder='Short Description' rows={4}></textarea>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="" className='form-label'>Content</label>
                                                <JoditEditor
                                                    ref={editor}
                                                    value={content}
                                                    config={config}
                                                    tabIndex={1} // tabIndex of textarea
                                                    onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                                    // onChange={newContent => {}}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="" className='form-label'>Image</label>
                                                <br />
                                                <input onChange={handleFile} type="file" />
                                                {
                                                    isDisable && 
                                                    <Spinner animation="border" role="status">
                                                        <span className="visually-hidden">Loading...</span>
                                                    </Spinner>
                                                }
                                            </div>
                                            <button disabled={isDisable} className='btn btn-primary col-md-12'>
                                                { 
                                                    isDisable ? 'Uploading File...' : 'Submit' }
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

export default Create
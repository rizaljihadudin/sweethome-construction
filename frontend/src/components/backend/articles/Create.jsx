import React, { useMemo, useRef, useState } from 'react'
import Header from '../../frontend/layout/Header'
import Footer from '../../frontend/layout/Footer'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { baseUrl, token } from '../../../config';
import { toast } from 'react-toastify';
import Sidebar from '../layout/Sidebar';
import JoditEditor from 'jodit-react';
import { Spinner } from 'react-bootstrap';

const Create = ({placeholder}) => {

    const editor = useRef(null);
	const [content, setContent] = useState('');
    const [isDisable, setIsDisable] = useState(false);
    const [imageId, setImageId] = useState(null);

    const config = useMemo(() => ({
			readonly: false, // all options from https://xdsoft.net/jodit/docs/,
			placeholder: placeholder || 'Content',
            height:350
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
        const res = await fetch(`${baseUrl}/articles`,{
            method : 'POST',
            headers : {
                'Content-type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `Bearer ${token()}`
            },
            body: JSON.stringify(newData)
        }); 
        
        const result = await res.json();
                
        if (result.status == false){
            toast.error(result.message)
        } else {
            toast.success(result.message)
            navigate('/admin/articles');
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
                                                <span>Article</span> / Create
                                            </h4>
                                            <Link to={"/admin/articles"} className="btn btn-primary">
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
                                                <label htmlFor="" className='form-label'>Author</label>
                                                 <input
                                                    {
                                                        ...register("author")
                                                    } 
                                                
                                                type="text" placeholder='Author' className={`form-control`} />
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
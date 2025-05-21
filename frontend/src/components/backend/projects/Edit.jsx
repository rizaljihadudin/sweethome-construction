import React, { useMemo, useRef, useState } from 'react'
import Header from '../../frontend/layout/Header'
import Sidebar from '../layout/Sidebar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Footer from '../../frontend/layout/Footer'
import JoditEditor from 'jodit-react'
import { toast } from 'react-toastify'
import { baseUrl, fileUrl, token } from '../../../config'
import { useForm } from 'react-hook-form'
import { Spinner } from 'react-bootstrap'

const Edit = ({placeholder}) => {
     const editor = useRef(null);
    const [content, setContent] = useState('');
    const [project, setProject] = useState('');
    const [isDisable, setIsDisable] = useState(false);
    const [imageId, setImageId] = useState(null);

    //get params
    const params = useParams();
    const config = useMemo(() => ({
            readonly: false,
            placeholder: placeholder || 'Content',
            height:500
        }),
        [placeholder]
    );

     const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: async () => {
            const res = await fetch(`${baseUrl}/projects/${params.id}`, {
                method : 'GET',
                headers : {
                    'Content-type' : 'application/json',
                    'Accept' : 'application/json',
                    'Authorization' : `Bearer ${token()}`
                }
            });
            const result = await res.json();
            setContent(result.data.content);
            setProject(result.data);
            return {
                title: result.data.title,
                slug: result.data.slug,
                short_desc : result.data.short_desc,
                status : result.data.status,
                construction_type : result.data.construction_type,
                sector : result.data.sector,
                location : result.data.location
            }
        }
    });

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const newData = {...data, 'content':content, "imageId":imageId};
        const res = await fetch(`${baseUrl}/projects/${params.id}`,{
            method : 'PUT',
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
            navigate('/admin/projects');
        }
    }

    const handleFile = async (e) => {
        const formData = new FormData();
        const file = e.target.files[0];
        formData.append('image', file);
        setIsDisable(true);

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
                setIsDisable(false);
                setImageId(result.data.id);
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
                                                <span>Projects</span> / Edit
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
                                                <div className='pb-3 pt-3'>
                                                    {
                                                        project.image && <img src={`${fileUrl}/uploads/projects/small/${project.image}`} />
                                                    }
                                                </div>
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

export default Edit
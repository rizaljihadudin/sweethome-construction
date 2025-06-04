import React from 'react'
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

const Table = ({ services, handleDelete, handleSearch }) => {

    const columns = [
            {
                name : 'No',
                selector : row => row.no,
                sortable: true,
            },
            {
                name : 'Title',
                selector: row => row.title,
            },
            {
                name : 'Slug',
                selector: row => row.slug
            },
            {
                name : 'Status',
                selector: row => row.status
            },
            {
                name : 'Action',
                selector: row => row.action
            },
        ];
    
        const data = services.map((service, index) => {
            return {
                no      : `${index+1}.`,
                title   : service.title,
                slug    : service.slug,
                status  : service.status == 1 ? 'Active' : 'Inactive',
                action  : 
                <div>
                    <Link to={`/admin/services/edit/${service.id}`} className={'btn btn-primary btn-sm'}>
                        Edit
                    </Link>
                    <Link onClick={() => handleDelete(service.id)} className={'btn btn-danger btn-sm ms-2'}>
                        Delete
                    </Link>
                </div>
            }
        });
    
        const customStyles = {
            headCells: {
                style : {
                    fontSize : '16px',
                    fontWeight : 'bold',
                    backgroundColor : 'black',
                    color: 'white'
                }
            },
            cells: {
                style : {
                    fontSize : '16px'
                }
            }
        }

    return (
        <>
             <div className='col-md-9'>
                {/* Main Content */}
                <div className="card shadow border-0">
                    <div className="card-body p-4">
                        <div className="d-flex justify-content-between">
                            <h4 className='h5'>Services</h4>
                            <Link to={"/admin/services/create"} className='btn btn-primary'>Create</Link>
                        </div>
                        <hr />

                        {/* <table className="table table-striped">
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
                        </table> */}
                        <div className='d-flex justify-content-end'>
                            <div className='search mb-2 col-md-3'>
                                <input type="text" placeholder='Search by Title...' onInput={handleSearch} className='form-control'/>
                            </div>
                        </div>
                        <DataTable
                            columns={columns}
                            data={data}
                            customStyles={customStyles}
                            pagination
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Table
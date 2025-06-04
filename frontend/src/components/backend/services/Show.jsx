import React, { useEffect, useState } from 'react'
import Header from '../../frontend/layout/Header'
import Footer from '../../frontend/layout/Footer'
import Sidebar from '../layout/Sidebar'
import { baseUrl } from '../../../config'
import { token } from '../../../config'
import { toast } from 'react-toastify'
import Table  from './Table'


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


    const handleSearch = async (e) => {
        const query = e.target.value;

        const res = await fetch(`${baseUrl}/services?search=${query}`, {
            method : 'GET',
            headers : {
                'Content-type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization' : `Bearer ${token()}`
            }
        });

        const result = await res.json();

        if (result.status === true) {
            setServices(result.data);
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

                           <Table 
                                services={services} 
                                handleDelete={handleDelete} 
                                handleSearch={handleSearch}
                            />
                        </div>
                    </div>
                </main>
            <Footer/>
        </>
     )
}

export default Show
import React from 'react'
import Home from '../components/frontend/Home';
import About from '../components/frontend/About';
import Services from '../components/frontend/Services';
import Projects from '../components/frontend/Projects';
import Blogs from '../components/frontend/Blogs';
import Contact from '../components/frontend/Contact';
import Login from '../components/backend/Login';
import ServiceDetail from '../components/frontend/ServiceDetail';
import ProjectDetail from '../components/frontend/ProjectDetail';
import { Route } from 'react-router-dom';

const FrontendRoutes = () => (
    <>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services/:slug' element={<ServiceDetail />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:slug' element={<ProjectDetail />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/admin/login' element={<Login />} />
    </>
)

export default FrontendRoutes
import React from 'react'
import { Route } from 'react-router-dom'
import RequireAuth from '../components/frontend/layout/RequireAuth'
import Dashboard from '../components/backend/Dashboard'
import ServicesRoutes from './ServicesRoutes'
import ProjectRoutes from './ProjectRoutes'
import ArticlesRoutes from './ArticlesRoutes'
import TestimonialsRoutes from './TestimonialsRoutes'
import MemberRoutes from './MemberRoutes'

const AdminRoutes = () => (
    <Route element={<RequireAuth/>}>
        <Route path='/admin'>
            {/* ..Child dari admin */}
            {/* Dashboard */}
            <Route path='dashboard' element={<Dashboard />} />
            {/* Route yang awalannya services */}

            {/** Service */}
            {ServicesRoutes()}
            
            {/* Route yang awalannya projects */}
            {ProjectRoutes()}

            {/* Route yang awalannya artilces */}
            {ArticlesRoutes()}

            {/* Route yang awalannya testimonials */}
            {TestimonialsRoutes()}

            {/* Route yang awalannya members */}
            {MemberRoutes()}
        </Route>
    </Route>
)

export default AdminRoutes
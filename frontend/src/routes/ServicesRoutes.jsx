import React from 'react'
import { Route } from 'react-router-dom'

// Services
import { default as ShowServices } from '../components/backend/services/Show';
import { default as EditServices } from '../components/backend/services/Edit';
import { default as CreateService } from '../components/backend/services/Create';

const ServicesRoutes = () => (
    <Route path='services'>
        {/* ..Child dari services */}
        {/* Default index, show data services */}
        <Route index element={<ShowServices />} />
        {/* Menu Edit services */}
        <Route path='edit/:id' element={<EditServices />} />
        {/* Menu Create Service */}
        <Route path='create' element={<CreateService />} />
    </Route>
)


export default ServicesRoutes
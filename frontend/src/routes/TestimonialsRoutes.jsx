import React from 'react'
import { Route } from 'react-router-dom'

// Testimonials
import { default as ShowTestimonials } from '../components/backend/testimonials/Show';
import { default as EditTestimonials } from '../components/backend/testimonials/Edit';
import { default as CreateTestimonials } from '../components/backend/testimonials/Create';

const TestimonialsRoutes = () => (
    <Route path='testimonials'>
        {/* ..Child dari articles */}
        {/* Default index, show data articles */}
        <Route index element={<ShowTestimonials />} />
        {/* Menu Edit services */}
        <Route path='edit/:id' element={<EditTestimonials />} />
        {/* Menu Create Service */}
        <Route path='create' element={<CreateTestimonials />} />
    </Route>
)

export default TestimonialsRoutes
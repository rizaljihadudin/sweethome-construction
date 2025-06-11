import React from 'react'
import { Route } from 'react-router-dom';

// Projects
import { default as ShowProjects } from '../components/backend/projects/Show';
import { default as EditProjects } from '../components/backend/projects/Edit';
import { default as CreateProject } from '../components/backend/projects/Create';

const ProjectRoutes = () => (
    <Route path='projects'>
        {/* ..Child dari projects */}
        {/* Default index, show data projects */}
        <Route index element={<ShowProjects />} />
        {/* Menu Edit services */}
        <Route path='edit/:id' element={<EditProjects />} />
        {/* Menu Create Service */}
        <Route path='create' element={<CreateProject />} />
    </Route>
);

export default ProjectRoutes
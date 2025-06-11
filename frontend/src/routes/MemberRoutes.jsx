import React from 'react'
import { Route } from 'react-router-dom'

// Members
import { default as ShowMembers } from '../components/backend/members/Show';
import { default as EditMembers } from '../components/backend/members/Edit';
import { default as CreateMembers } from '../components/backend/members/Create';

const MemberRoutes = () => (
    <Route path='members'>
        {/* ..Child dari articles */}
        {/* Default index, show data articles */}
        <Route index element={<ShowMembers />} />
        {/* Menu Edit services */}
        <Route path='edit/:id' element={<EditMembers />} />
        {/* Menu Create Service */}
        <Route path='create' element={<CreateMembers />} />
    </Route>
)

export default MemberRoutes
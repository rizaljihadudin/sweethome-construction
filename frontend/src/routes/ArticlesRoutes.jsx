import React from 'react'
import { Route } from 'react-router-dom'

// Articles
import { default as ShowArticles } from '../components/backend/articles/Show';
import { default as EditArticle } from '../components/backend/articles/Edit';
import { default as CreateArticle } from '../components/backend/articles/Create';

const ArticlesRoutes = () => (
    <Route path='articles'>
        {/* ..Child dari articles */}
        {/* Default index, show data articles */}
        <Route index element={<ShowArticles />} />
        {/* Menu Edit services */}
        <Route path='edit/:id' element={<EditArticle />} />
        {/* Menu Create Service */}
        <Route path='create' element={<CreateArticle />} />
    </Route>
);

export default ArticlesRoutes
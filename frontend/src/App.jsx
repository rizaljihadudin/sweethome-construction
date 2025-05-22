import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/frontend/Home';
import About from './components/frontend/About';
import './assets/css/style.scss'
import Services from './components/frontend/Services';
import Projects from './components/frontend/Projects';
import Blogs from './components/frontend/Blogs';
import Contact from './components/frontend/Contact';
import Login from './components/backend/Login';
import { ToastContainer} from 'react-toastify';
import Dashboard from './components/backend/Dashboard';
import RequireAuth from './components/frontend/layout/RequireAuth';

// Services
import { default as ShowServices } from './components/backend/services/Show';
import { default as EditServices } from './components/backend/services/Edit';
import { default as CreateService } from './components/backend/services/Create';

// Projects
import { default as ShowProjects } from './components/backend/projects/Show';
import { default as EditProjects } from './components/backend/projects/Edit';
import { default as CreateProject } from './components/backend/projects/Create';

// Articles
import { default as ShowArticles } from './components/backend/articles/Show';
import { default as EditArticle } from './components/backend/articles/Edit';
import { default as CreateArticle } from './components/backend/articles/Create';

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/blogs' element={<Blogs />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/admin/login' element={<Login />} />


                {/* wrapped route using children */}
                {/* <Route path='/admin/dashboard' element={
                    <RequireAuth>
                        <Dashboard />
                    </RequireAuth>
                } /> */}

                {/* Nested Route */}
                <Route element={<RequireAuth />}>
                    {/* Route yang awalannya admin */}
                    <Route path='/admin'>
                        {/* ..Child dari admin */}
                        {/* Dashboard */}
                        <Route path='dashboard' element={<Dashboard />} />
                        {/* Route yang awalannya services */}
                        <Route path='services'>
                            {/* ..Child dari services */}
                            {/* Default index, show data services */}
                            <Route index element={<ShowServices />} />
                            {/* Menu Edit services */}
                            <Route path='edit/:id' element={<EditServices />} />
                            {/* Menu Create Service */}
                            <Route path='create' element={<CreateService />} />
                        </Route>

                        {/* Route yang awalannya projects */}
                        <Route path='projects'>
                            {/* ..Child dari projects */}
                            {/* Default index, show data projects */}
                            <Route index element={<ShowProjects />} />
                            {/* Menu Edit services */}
                            <Route path='edit/:id' element={<EditProjects />} />
                            {/* Menu Create Service */}
                            <Route path='create' element={<CreateProject />} />
                        </Route>

                        {/* Route yang awalannya artilces */}
                        <Route path='articles'>
                            {/* ..Child dari articles */}
                            {/* Default index, show data articles */}
                            <Route index element={<ShowArticles />} />
                            {/* Menu Edit services */}
                            <Route path='edit/:id' element={<EditArticle />} />
                            {/* Menu Create Service */}
                            <Route path='create' element={<CreateArticle />} />
                        </Route>
                    </Route>
                </Route>
            </Routes>
            
        </BrowserRouter>
        <ToastContainer 
          position="top-right"
        />
    </>
  )
}

export default App

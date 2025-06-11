import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/css/style.scss'
import { ToastContainer} from 'react-toastify';

// Error page
import Error404 from './components/Error404';

// Routes
import FrontendRoutes from './routes/FrontendRoutes';
import AdminRoutes from './routes/AdminRoutes';

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                {FrontendRoutes()}

                {/* wrapped route using children */}
                {/* <Route path='/admin/dashboard' element={
                    <RequireAuth>
                        <Dashboard />
                    </RequireAuth>
                } /> */}

                {/* Nested Route */}
                {AdminRoutes()}

                {/* Error 404 not found */}
                <Route path='/*' element={<Error404/>}/>
            </Routes>
        </BrowserRouter>
        <ToastContainer 
          position="top-right"
        />
    </>
  )
}

export default App

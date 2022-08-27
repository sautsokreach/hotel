import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blank from './pages/Blank'
import Room from './pages/Room'
import Addroom from './pages/Addroom'
import Booking from './pages/Booking'
import Transaction from './pages/Transaction'
import Dashboard from './pages/Dashboard'
import MainLayout from './layout/MainLayout'

function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="rooms" element={<Room />} />
                    <Route path="booking" element={<Booking />} />
                    <Route path="addroom" element={<Addroom />} />
                    <Route path="settings" element={<Blank />} />
                    <Route path="transaction" element={<Transaction />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App

import { Route, Routes } from 'react-router-dom'
import Login from './component/Login'
import Dashboard from './component/Dashboard'
import Register from './component/Register'
import SeatFinder from './component/SeatFinder'
import Booking from './component/Booking'
import './App.css'


function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/seatFinder' element={<SeatFinder />} />
        <Route path='/booking' element={<Booking />} />
      </Routes>

    </>
  )
}

export default App

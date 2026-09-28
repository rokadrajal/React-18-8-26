import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register';
import Home from './Home';
import Header from './Header';
import Logout from './Logout';


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  )
}

export default App;

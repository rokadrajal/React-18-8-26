import {Route,Routes} from 'react-router-dom'
import './App.css'
import Deshboard from './Deshboard'
import Login from './Login'
import { useNavigate } from "react-router-dom";

function ProtectedRoute({children}){
  const navigate = useNavigate();
  if(!localStorage.getItem("token")){
    navigate("/");
  }
  return children;

}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/deshboard" element={
          <ProtectedRoute>
            <Deshboard/>
          </ProtectedRoute>
          }/>
      </Routes>
    </>
  )
}

export default App

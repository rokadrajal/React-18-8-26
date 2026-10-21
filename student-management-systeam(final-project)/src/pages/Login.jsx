import user from '../assets/students.png'
import logo from '../assets/logo.png'
import { MdOutlineEmail, MdOutlineLock } from 'react-icons/md'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const API = "http://localhost:3000/students";
    

    const handlesubmit = (e) => {
        e.preventDefault();

        axios.get(API).then((response) => {

            setData(response.data)

        })

        data.map((element) => {
            if (element.email == email && element.password == password) {
                localStorage.setItem("token", element.id);
                navigate("/");
            }
        })


    }

    const handleDemo = (element) => {
        navigate("/");
        localStorage.setItem("token", element.id);
    }

    return (
        <>
            <div className="container-fluid login ">
                <div className="row d-flex min-vh-100">
                    <div className="left col-12 col-md-5 d-flex flex-column justify-content-around align-items-center py-4 py-md-5 gap-2" style={{ backgroundColor: " rgba(184, 213, 246, 0.306)" }}>
                        <div className='d-flex gap-3'>
                            <img src={logo} alt="" style={{ width: "80px", height: "75px", objectFit: "contain" }} />
                            <div className="d-flex flex-column align-items-start text-start">
                                <h1 className="fw-bold text-center m-0">StudentPro</h1>
                                <p className="text-secondary fs-5">Student Management System</p>
                            </div>
                        </div>
                        <div className="w-100 text-center">
                            <img className="img-fluid" src={user} alt="" style={{ width: "450px", height: "350px" }} />
                        </div>
                        <div>
                            <p className=" dark-primary" style={{ fontSize: '22px', color: "rgb(0, 62, 196)" }}>Manage your studies, track <br /> your attendance, check your results <br /> and stay updated with your  academic <br /> progress.</p>
                        </div>
                    </div>

                    <div className="right col-12 col-md-7  d-flex flex-column justify-content-around px-3 px-md-5 py-4">
                        <div className="d-flex flex-column gap-4">
                            <div>
                                <h1 className="fw-bold m-0" style={{ fontSize: "50px" }}>Welcome Back!</h1>
                                <p className="fs-5">Login to your account to continue</p>
                            </div>
                            <div>
                                <form className="d-flex flex-column gap-3" onSubmit={handlesubmit}>
                                    <div>
                                        <label style={{ fontSize: "18px" }}>Email Address</label><br />
                                        <div className="position-relative">
                                            <MdOutlineEmail size={"20px"} className="position-absolute  text-secondary " style={{ left: "12px", top: "17px" }} />
                                            <input type="email" value={email} placeholder="Enter your email" className=" p-2 mt-1 rounded-3 px-5" style={{ border: "2px solid rgba(184, 213, 246, 0.55)", width: "100%" }} onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                    </div>
                                    <div>
                                        <label style={{ fontSize: "18px" }}>Password</label><br />
                                        <div className="position-relative">
                                            <MdOutlineLock size={"20px"} className="position-absolute  text-secondary" style={{ left: "12px", top: "17px" }} />
                                            <input type={showPassword ? "text" : "password"} value={password} placeholder="Enter your password" className=" p-2 mt-1 rounded-3 px-5 " style={{ border: "2px solid rgba(184, 213, 246, 0.55)", width: "100%" }} onChange={(e) => setPassword(e.target.value)} />
                                            <span className="position-absolute" style={{ right: "20px", top: "14px", cursor: "pointer" }} onClick={() => { setShowPassword(!showPassword) }}>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <button type="submit" className="bg-primary border-0 rounded-3 py-2 mt-3 mb-2 text-light" style={{ width: "100%" }}>Login</button>
                                    </div>
                                </form>
                                <div>
                                    <p style={{ fontSize: "17px" }}>Don't have an account! <a href="" className="text-decoration-none">Contact your Principal</a></p>
                                </div>
                            </div>

                            <div className="d-flex flex-column gap-2">
                                <h3>Demo Accounts</h3>

                                <div>
                                    <div className="d-flex align-items-center border border-1 p-2 rounded-2 gap-2" onClick={handleDemo}>
                                        <div className="d-flex rounded-5 align-items-center justify-content-center" style={{ width: "50px", height: "50px", backgroundColor: "rgba(184, 213, 246, 0.306)", fontSize: "25px" }}>👨🏻</div>
                                        <div>
                                            <h6 className="m-0">Student Login</h6>
                                            <p className="m-0">student@school.com/123456</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
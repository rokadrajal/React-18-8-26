import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import user from "../assets/seat.png"
import seat from "../assets/cinema.png"

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();

    let islogin = false;

    const localdata = JSON.parse(localStorage.getItem("login"));

    const handleSubmit = (e) => {
        e.preventDefault();

        if(email == "" || password == ""){
            return alert("Please enter email and password");
        }

        if (email == localdata.email) {
            if (password == localdata.password) {
                islogin = true;
                navigate("/dashboard");
            } else {
                // navigate("/register");
                setPasswordError("Password is incorrect");
            }
        } else {
            // navigate("/register");
            setEmailError("Email is incorrect");
        }
    };

    useEffect(() => {
        if (islogin == true) {
            localStorage.setItem(
                "login",
                JSON.stringify({ islogin: true })
            );
        }
    }, [islogin]);

    return (
        <div className="container-fluid p-0 vh-100 overflow-hidden bg-light">

            <div className="row w-100 h-100 g-0">

                {/* ================= LEFT SIDE ================= */}

                <div
                    className="col-md-5 bg-primary bg-opacity-10 d-flex flex-column justify-content-center align-items-center text-center"
                    style={{
                        width: "35%",
                        height: "100vh",
                        padding: "40px 60px"
                    }}
                >

                    
                    <div className="d-flex align-items-center justify-content-center gap-4 mb-3">

                        <div className="text-center">

                            <img
                                src={seat}
                                alt="Seat Booking"
                                style={{
                                    width: "100px",
                                    height: "80px",
                                    objectFit: "cover"
                                }}
                            />

                            <small className="d-block text-primary fs-6 fw-semibold">
                                Campus
                            </small>

                        </div>


                        <div className="text-start mt-2">

                            <h1 className="fw-bold mb-1 text-primary">
                                SetBook
                            </h1>

                            <p className="text-secondary mb-0 fs-5">
                                Campus Seat Booking System
                            </p>

                        </div>

                    </div>


                
                    <div className="text-center mt-4">

                        <img
                            src={user}
                            alt="Seat Booking"
                            className="img-fluid"
                            style={{
                                width: "100%",
                                height: "390px",
                                objectFit: "cover"
                            }}
                        />

                    </div>


                    
                    <div className=" mt-3">

                        <h4 className="fw-semibold text-primary lh-base">
                            Find your perfect seat, check availability and book your seat easily.
                        </h4>

                    </div>

                </div>


                {/* ================= RIGHT SIDE ================= */}
                <div
                    className="bg-white d-flex align-items-center justify-content-center"
                    style={{ width: "65%" }}
                >

                    {/* RIGHT CONTENT */}
                    <div
                        style={{
                            width: "70%",
                            maxWidth: "650px"
                        }}
                    >

                        {/* Heading */}
                        <div className="mb-4">

                            <h1 className="fw-bold text-primary mb-1">
                                Welcome Back!
                            </h1>

                            <p className="text-secondary fs-5 mb-0">
                                Login to your account to continue.
                            </p>

                        </div>


                        {/* FORM */}
                        <form >

                            {/* Email */}
                            <div className="mb-3">

                                <label className="form-label fw-semibold">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    className="form-control form-control-lg"
                                    value={email}
                                    placeholder="Enter your email"
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                        steEmailError("")
                                    }
                                    }
                                    required
                                />

                                <p className="text-danger mb-0 mt-1">{emailError}</p>

                            </div>


                            {/* Password */}
                            <div className="mb-3">

                                <label className="form-label fw-semibold">
                                    Password
                                </label>

                                <input
                                    type="password"
                                    className="form-control form-control-lg"
                                    value={password}
                                    placeholder="Enter your password"
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                        stePasswordError("")
                                    }
                                    }
                                    required
                                />
                                <p className="text-danger mb-0 mt-1">{passwordError}</p>
                            </div>


                            {/* Login Button */}
                            <div className="d-grid mb-3">

                                <button
                                    type="submit"
                                    className="btn btn-primary btn-lg" onClick={handleSubmit}
                                >
                                    Login
                                </button>

                            </div>

                        </form>


                        {/* Register */}
                        <p className="mb-4">

                            Don't have an account?

                            <a
                                href="/register"
                                className="text-primary fw-semibold text-decoration-none ms-1"
                            >
                                Create one
                            </a>

                        </p>


                        {/* Demo Accounts */}
                        <div>

                            <h4 className="fw-bold mb-3">
                                Demo Accounts
                            </h4>


                            {/* Employee */}
                            <div className="d-flex align-items-center border rounded-3 p-2 mb-2 bg-light">

                                <div
                                    className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-3"
                                    style={{
                                        width: "45px",
                                        height: "45px",
                                        fontSize: "20px"
                                    }}
                                >
                                    👨🏻
                                </div>

                                <div>

                                    <h6 className="mb-0 fw-semibold">
                                        Employee Login
                                    </h6>

                                    <small className="text-secondary">
                                        employee@company.com | 123456
                                    </small>

                                </div>

                            </div>


                            {/* Manager */}
                            <div className="d-flex align-items-center border rounded-3 p-2 bg-light">

                                <div
                                    className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-3"
                                    style={{
                                        width: "45px",
                                        height: "45px",
                                        fontSize: "20px"
                                    }}
                                >
                                    👨🏻
                                </div>

                                <div>

                                    <h6 className="mb-0 fw-semibold">
                                        Manager Login
                                    </h6>

                                    <small className="text-secondary">
                                        manager@company.com | 123456
                                    </small>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Login;
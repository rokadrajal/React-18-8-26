import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import user from "../assets/user1.png"
import seat from "../assets/cinema.png"

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

         if(name == "" | email == "" | password == ""){
            return alert("Please fill in all the required fields.")
         }

        setData({
            email: email,
            password: password
        });

        navigate("/");
    };

    useEffect(() => {

        if (data == null) {
            return;
        }

        localStorage.setItem(
            "login",
            JSON.stringify(data)
        );

        localStorage.setItem(
            "islogin",
            JSON.stringify({ islogin: true })
        );

    }, [data]);

    return (
        <div className="container-fluid p-0 vh-100 overflow-hidden">

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

                    {/* Logo */}
                    <div className="d-flex align-items-center gap-3 mb-4">

                        <div>
                            <img
                                src={seat}
                                alt="Seat Booking"
                                style={{
                                    width: "100px",
                                    height: "80px",
                                    objectFit: "cover"
                                }}
                            />

                            <small className="d-block text-primary fw-semibold">
                               Campus
                            </small>
                        </div>

                        <div className="text-start mt-2">

                            <h1 className="fw-bold text-primary mb-1">
                               SetBook
                            </h1>

                            <p className="text-secondary fs-5 mb-0">
                                Campus Seat Booking System
                            </p>

                        </div>

                    </div>


                    {/* Image */}
                    <div className="text-center mt-4">

                        <img
                            src={user}
                            alt="Leave Management"
                            className="img-fluid"
                            style={{
                                width: "100%",
                                height: "390px",
                                objectFit: "contain"
                            }}
                        />

                    </div>


                    {/* Text */}
                    <div className="mt-3">

                        <h4 className="fw-semibold text-primary lh-base">
                           Find your perfect seat, check availability and book your seat easily.
                        </h4>

                    </div>

                </div>


                {/* ================= RIGHT SIDE ================= */}
                <div
                    className="col-md-7 bg-white d-flex align-items-center justify-content-center"
                   style={{ width: "65%" }}
                >

                    <div
                        style={{
                            width: "70%",
                            maxWidth: "600px"
                        }}
                    >

                        {/* Heading */}
                        <div className="mb-4">

                            <h1 className="fw-bold text-primary mb-2">
                                Create Account
                            </h1>

                            <p className="text-secondary fs-5">
                                Register your account to get started.
                            </p>

                        </div>


                        {/* Form */}
                        <form>

                            {/* Full Name */}
                            <div className="mb-3">

                                <label className="form-label fw-semibold">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    value={name}
                                    placeholder="Enter your name"
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                    required
                                />

                            </div>


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
                                        setEmail(e.target.value);
                                    }}
                                    required
                                />

                            </div>


                            {/* Password */}
                            <div className="mb-4">

                                <label className="form-label fw-semibold">
                                    Password
                                </label>

                                <input
                                    type="password"
                                    className="form-control form-control-lg"
                                    value={password}
                                    placeholder="Enter your password"
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                    required
                                />

                            </div>


                            {/* Register Button */}
                            <div className="d-grid">

                                <button
                                    type="submit"
                                    className="btn btn-primary btn-lg" onClick={handleSubmit}
                                >
                                    Register
                                </button>

                            </div>

                        </form>


                        {/* Login */}
                        <p className="text-secondary mt-4">

                            Already have an account?

                            <a
                                href="/"
                                className="text-primary fw-semibold text-decoration-none ms-1"
                            >
                                Login
                            </a>

                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Register;
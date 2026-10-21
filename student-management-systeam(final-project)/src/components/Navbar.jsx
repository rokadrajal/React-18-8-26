import { Logout } from "./PrivateRoute"
import profile from "../assets/profile.jpg"
import { useSelector } from "react-redux"


function Navbar() {
    const students = useSelector((state)=> Array.isArray(state.students)?state.students : []);
    const totalStudents = students.length;
    const totalClass = new Set(students.map((student)=> student.class )).size;

    return (
        <>
            <div className="navbar m-4 d-flex flex-column flex-md-row justify-content-between align-items-center ps-3 pe-3 ps-lg-5 pe-lg-5 rounded-3 gap-3 shadow">

                <div className="d-flex align-items-center me-0 me-lg-5 gap-3">
                    <img src={profile} alt="" style={{ width: "65px", height: "65px", objectFit: "cover", borderRadius: "100%" }} />

                    <div className="d-flex flex-column align-items-start text-start">
                        <h4 className="fw-bold text-center m-0 text-light fs-2">Saxi Patel</h4>
                        <p className="text-white m-0" style={{ fontSize: '13px' }}>The Sunshine International School , Rajkot</p>
                    </div>
                </div>

                <div className="d-flex flex-column flex-sm-row align-items-center gap-3 gap-lg-5">

                    <div className="d-flex gap-4 gap-lg-5">

                        <div>
                            <h5 className="text-white m-0">{totalStudents}</h5>
                            <p className="text-white m-0" style={{ fontSize: "13px" }}>Students</p>
                        </div>

                        <div>
                            <h5 className="text-white m-0">{totalClass}</h5>
                            <p className="text-white m-0" style={{ fontSize: "13px" }}>Class</p>
                        </div>

                    </div>

                    <div>
                        <button className="btn-danger border-0 px-3 py-2 rounded-3  text-white" onClick={Logout}>Logout</button>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Navbar
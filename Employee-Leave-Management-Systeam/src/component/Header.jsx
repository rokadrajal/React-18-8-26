import { Link } from "react-router-dom"
import { FaHome, FaCog, FaThLarge, FaCalendarCheck , FaSearchLocation } from 'react-icons/fa'
import logo from '../assets/logo.png'

function Header() {
    return (
        <>
            <div className="head d-flex">
                <div className="sidebar position-fixed text-light p-3" style={{ width: "20%", height: "100vh", backgroundColor: "rgb(2, 2, 81)" , zIndex : 1 }}>
                    <div className="d-flex">
                        <img src={logo} alt=""
                            style={{
                                width: "60x",
                                height: "60px",
                                objectFit: "cover"
                            }} />
                        <h4 className="pb-4">Campus Seat Finder</h4>
                    </div>
                    <div>
                        <ul className="list-unstyled  ">
                            <li className=""><Link className="text-decoration-none  text-light d-flex align-items-center gap-3" to="/dashboard"><FaHome size={"25px"} /><span>Dashboard</span></Link></li>
                            <li><Link className="text-decoration-none  text-light d-flex align-items-center gap-3" to="/seatFinder"><FaThLarge size={"25px"} /><span>Seat Layout</span></Link></li>
                            <li><Link className="text-decoration-none  text-light d-flex align-items-center gap-3" to="/booking"><FaCalendarCheck size={"25px"} /><span>My Booking</span></Link></li>
                            <li><Link className="text-decoration-none  text-light d-flex align-items-center gap-3" to="/leaveList"><FaCog size={"25px"} /><span>Settings </span></Link></li>
                        </ul>
                    </div>
                </div>

                <div className="navBar position-fixed  d-flex justify-content-end gap-3 flex-grow-1  p-2 align-items-center" style={{backgroundColor: "rgba(195, 225, 236, 0.326)",borderBottom: "2px solid rgba(181, 208, 219, 0.461)" ,zIndex : 0 , top :"0" , left : "20%", height : "70px" , width : "80%"}}>
                    <div>
                        <select className=" p-1 rounded-2 " style={{border:"2px solid rgba(181, 208, 219, 0.461"}}>
                            <option>Main Library</option>
                        </select>
                    </div>
                    <div>
                        <select className=" p-1 rounded-2 " style={{border:"2px solid rgba(181, 208, 219, 0.461"}}>
                            <option>09 Oct 2026</option>
                        </select>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                        {/* <select className=" p-2 rounded-2 border-0 bg-transparent">
                            <option>Rahul Shah Student</option>
                        </select> */}

                        <div>
                            <h6 className="m-0">Rahul Shah</h6>
                            <p className="m-0">Student</p>
                        </div>

                        <div>
                            <button type="dropdown"  className="btn btn-light dropdown-toggle bg-transparent border-0"></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
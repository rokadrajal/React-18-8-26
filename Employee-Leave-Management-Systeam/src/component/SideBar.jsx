import { Link } from "react-router-dom"

function SideBar() {
    return (
        <>
            <div>
                <div>
                    <h1>Campus Seat Finder</h1>
                </div>
                <div>
                    <ul>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/leaveHistory">Seat Layout</Link></li>
                        <li><Link to="/leaveBalance">My Booking</Link></li>
                        <li><Link to="/leaveList">Settings</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default SideBar
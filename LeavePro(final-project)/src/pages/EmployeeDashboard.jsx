import { Link } from "react-router-dom"
import { Logout } from "../utils/validation";

import {
    MdDashboard,
    MdAssignment,
    MdHistory,
    MdPerson,
    MdLogout,
    MdNotifications,
    MdMenu,
} from "react-icons/md";
import { useEffect, useState } from "react";

function EmployeeDashboard() {
      const [empname , setEmpName]= useState("");
      const [image, setImage] = useState("");
      const API = "http://localhost:3000/employees";

    useEffect(()=>{
        fetch(`${API}/${localStorage.getItem("token")}`,{
            method : "GET",
            headers : {"Content-Type" : "application/json"}
        }).then((response)=>{
             response.json().then((data)=>{
                setEmpName(data.name);
                setImage(data.image);
             })
        })
    },[])

    const leaves = [
        { name: "Casual Leave (CL)", used: 5, total: 7, color: "#2383ff" },
        { name: "Sick Leave (SL)", used: 2, total: 5, color: "#36c9b0" },
        { name: "Earned Leave (EL)", used: 7, total: 10, color: "#14c995" },
        { name: "Privilege Leave (PL)", used: 3, total: 5, color: "#a855f7" },
    ];

    const requests = [
        { type: "Casual Leave", start: "12 Sep 2025", end: "12 Sep 2025", status: "Pending" },
        { type: "Sick Leave", start: "05 Sep 2025", end: "05 Sep 2025", status: "Approved" },
        { type: "Earned Leave", start: "20 Aug 2025", end: "25 Aug 2025", status: "Rejected" },
        { type: "Casual Leave", start: "15 Aug 2025", end: "15 Aug 2025", status: "Approved" },
    ];

    return (
        <div className="app">
            <aside className="sidebar">
                <h2 className="logo">▣ LeavePro</h2>

                <nav>
                    <Link className="nav-link active" to="/dashboard">
                        <MdDashboard size={17} /> Dashboard
                    </Link>

                    <Link className="nav-link" to="/apply">
                        <MdAssignment size={17} /> Apply Leave
                    </Link>

                    <Link className="nav-link" to="/history">
                        <MdHistory size={17} /> My Leave History
                    </Link>

                    <Link className="nav-link" to="/balance">
                        <MdPerson size={17} /> Leave Balance
                    </Link>

                    <Link className="nav-link" to="/profile">
                        <MdPerson size={17} /> Profile
                    </Link>
                </nav>

                <button className="logout" onClick={Logout}>
                    <MdLogout size={17} /> Logout
                </button>
            </aside>

            <main className="main">
                <header className="topbar">
                    <button className="menu-button" aria-label="Menu">
                        <MdMenu size={20} />
                    </button>

                    <div className="user-area">
                        <MdNotifications size={19} />
                        <img width={"40px"} height={"40px"} src={image} alt={empname} />
                        <div>
                            <strong>{empname}</strong>
                            <small>Employee</small>
                        </div>
                    </div>
                </header>

                <div className="content" id="dashboard">
                    <div className="welcome">
                        <h1>Dashboard</h1>
                        <p>Welcome back, {empname}!</p>
                    </div>

                    <section className="stats">
                        <div className="stat blue">
                            <p>Total Leaves</p>
                            <h2>12</h2>
                        </div>
                        <div className="stat green">
                            <p>Used Leaves</p>
                            <h2>5</h2>
                        </div>
                        <div className="stat purple">
                            <p>Remaining Leaves</p>
                            <h2>7</h2>
                        </div>
                        <div className="stat orange">
                            <p>Pending Requests</p>
                            <h2>2</h2>
                        </div>
                    </section>

                    <section className="dashboard-grid">
                        <div className="card" id="balance">
                            <h3>Leave Balance <span>(Current Year)</span></h3>

                            {leaves.map((leave) => (
                                <div className="leave-item" key={leave.name}>
                                    <div className="leave-info">
                                        <span>{leave.name}</span>
                                        <span>{leave.used} / {leave.total}</span>
                                    </div>

                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            style={{
                                                width: `${(leave.used / leave.total) * 100}%`,
                                                background: leave.color,
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="card requests-card" id="history">
                            <h3>Recent Leave Requests</h3>

                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Type</th>
                                            <th>Start Date</th>
                                            <th>End Date</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {requests.map((request, index) => (
                                            <tr key={index}>
                                                <td>{request.type}</td>
                                                <td>{request.start}</td>
                                                <td>{request.end}</td>
                                                <td>
                                                    <span className={`badge ${request.status.toLowerCase()}`}>
                                                        {request.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <section className="quick-actions">
                        <h3>Quick Actions</h3>
                        <div className="buttons">
                            <button className="primary" onClick={() => alert("Apply Leave")}>
                                Apply Leave
                            </button>
                            <button className="secondary" onClick={() => alert("Leave History")}>
                                View Leave History
                            </button>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default EmployeeDashboard;



import { useEffect, useState } from "react";
import Header from "./Header";
import {
  FaChair,
  FaLock,
  FaDoorClosed,
  FaBookmark,
  FaCalendarCheck
} from "react-icons/fa";


function Dashboard() {
    const [booking, setBooking] = useState([]);
    const API = "http://localhost:3000/bookings";

    useEffect(() => {
        fetch(API, {
            method: "GET",
            headers: { "Content-Type": "application/json"}
        }).then((respons) => {
            respons.json().then((data) => {
                setBooking(data);
                console.log(data);
            })
        });
    },[]);


    return (
        <>
            <Header />
            <div className='dashboard d-flex flex-column gap-3 'style={{paddingTop : "80px"}}>
                <div>
                    <h2 className="fw-bold">Dashboard</h2>
                </div>

                <div>
                    <h2>Hello,Rahul Shah 👋</h2>
                    <p className="text-secondary">Find and book your favorit seat</p>
                </div>

                <div className="d-flex gap-3">
                    <div className="d-flex gap-3 border border-1 rounded-3 py-3 px-4 " style={{ width: "215px" }}>
                        <div className="rounded-5 d-flex align-items-center justify-content-center" style={{ width: "50px", height: "50px", backgroundColor: "rgba(195, 225, 236, 0.43)" }}><FaChair style={{color : "#2680EB" , fontSize : "22px"}}/></div>
                        <div>
                            <p className="m-0">Total Seats</p>
                            <h2>{booking.length}</h2>
                        </div>
                    </div>
                    <div className="d-flex gap-3 border border-1 rounded-3 py-3 px-4" style={{ width: "215px" }}>
                        <div className="rounded-5 d-flex align-items-center justify-content-center" style={{ width: "50px", height: "50px", backgroundColor: "rgba(195, 236, 204, 0.44)" }}><FaLock style={{color : "#22A653" , fontSize : "22px"}}/></div>
                        <div>
                            <p className="m-0">Available</p>
                            <h2>{booking.filter((element)=> element.status == "Available").length}</h2>
                        </div>
                    </div>
                    <div className="d-flex gap-3 border border-1 rounded-3 py-3 px-4 " style={{ width: "215px" }}>
                        <div className="rounded-5 d-flex align-items-center justify-content-center" style={{ width: "50px", height: "50px", backgroundColor: "rgba(236, 195, 195, 0.51)" }}><FaDoorClosed style={{color : "#E53935" , fontSize : "22px"}}/></div>
                        <div>
                            <p className="m-0">Occupied</p>
                            <h2>{booking.filter((element)=> element.status == "Occupied").length}</h2>
                        </div>
                    </div>
                    <div className="d-flex gap-3 border border-1 rounded-3 py-3 px-4" style={{ width: "215px" }}>
                        <div className="rounded-5 d-flex align-items-center justify-content-center" style={{ width: "50px", height: "50px", backgroundColor: "rgba(195, 225, 236, 0.43)" }}><FaBookmark style={{color : "#2680EB" , fontSize : "22px"}}/></div>
                        <div>
                            <p className="m-0">Reserved</p>
                            <h2>{booking.filter((element)=> element.status == "Reserved").length}</h2>
                        </div>
                    </div>
                    <div className="d-flex gap-3 border border-1 rounded-3 py-3 px-4" style={{ width: "250px" }}>
                        <div className="rounded-5 d-flex align-items-center justify-content-center" style={{ width: "50px", height: "50px", backgroundColor: "rgba(199, 195, 236, 0.43)" }}><FaCalendarCheck style={{color : "#9333EA" , fontSize : "22px"}}/></div>
                        <div>
                            <p className="m-0">Today's Bookings</p>
                            <h2>{booking.filter((element)=> element.date == new Date().toISOString().split("T")[0]).length}</h2>
                        </div>
                    </div>
                </div>

                <div className="d-flex gap-3">
                    <div className="border border-1  p-3  rounded-3 d-flex flex-column justify-content-around" style={{ width: "250px", height: "310px" }}>
                        <div>
                            <b className="">Priority Summary</b>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <div className="d-flex gap-2">
                                <div className="rounded-5 bg-success mt-1" style={{ width: "17px", height: "17px" }}></div>
                                <p>Low</p>
                            </div>
                            <p>{booking.filter((element)=> element.priority == "Low").length}</p>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <div className="d-flex gap-2">
                                <div className="rounded-5 bg-warning mt-1" style={{ width: "17px", height: "17px" }}></div>
                                <p>Medium</p>
                            </div>
                            <p>{booking.filter((element)=> element.priority == "Medium").length}</p>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <div className="d-flex gap-2">
                                <div className="rounded-5 bg-danger mt-1" style={{ width: "17px", height: "17px" }}></div>
                                <p>High</p>
                            </div>
                            <p>{booking.filter((element)=> element.priority == "High").length}</p>
                        </div>
                        <hr />
                    </div>
                    <div className="border border-1  p-3  rounded-3 d-flex flex-column justify-content-around" style={{ width: "250px", height: "310px" }}>
                        <div>
                            <b className="">Status Summary</b>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <div className="d-flex gap-2">
                                <div className="rounded-5 bg-success mt-1" style={{ width: "17px", height: "17px" }}></div>
                                <p>Available</p>
                            </div>
                            <p>{booking.filter((element)=> element.status == "Available").length}</p>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <div className="d-flex gap-2">
                                <div className="rounded-5 bg-danger mt-1" style={{ width: "17px", height: "17px" }}></div>
                                <p>Occupied</p>
                            </div>
                            <p>{booking.filter((element)=> element.status == "Occupied").length}</p>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <div className="d-flex gap-2">
                                <div className="rounded-5 bg-primary mt-1" style={{ width: "17px", height: "17px" }}></div>
                                <p>Reserved</p>
                            </div>
                            <p>{booking.filter((element)=> element.status == "Reserved").length}</p>
                        </div>
                        <hr />
                    </div>
                    <div className="border border-1  p-3  rounded-3 d-flex flex-column  gap-3" style={{ width: "700px", height: "auto" }}>
                        <div className="d-flex justify-content-between">
                            <b>Recent Bookings</b>
                            <button className="border-0 text-primary fw-semibold bg-transparent">View All</button>
                        </div>

                        <table className="table table-responsive">
                            <thead>
                                <tr>
                                    <th className="fw-semibold">Seat ID</th>
                                    <th className="fw-semibold">Name</th>
                                    <th className="fw-semibold">Roll No</th>
                                    <th className="fw-semibold">Time</th>
                                    <th className="fw-semibold">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    booking.map((element, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className="fw-bold"> {element.seatId}</td>
                                                <td>{element.name}</td>
                                                <td>{element.rollNo}</td>
                                                <td>{element.time}</td>
                                                <td><button className={`border-0 px-3 py-1 rounded-5 bg-primary bg-opacity-10 text-primary ${element.status == "Available" ? "bg-success bg-opacity-10 text-success" : element.status == "Occupied" ? "bg-danger bg-opacity-10 text-danger" : "bg-primary bg-opacity-10 text-primary"}`}  >{element.status}</button></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;
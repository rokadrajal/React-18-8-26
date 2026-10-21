import { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";

function Booking() {
    const [booking, setBooking] = useState([]);
    const API = "http://localhost:3000/bookings";
    const [showSuccess, setShowSuccess] = useState(false);
    const [cancelledSeatId, setCancelledSeatId] = useState("");

    useEffect(() => {
        fetch(API).then((response) => {
            response.json().then((data) => {
                setBooking( 
                    data.filter((element) => {
                        return element.status == "Reserved"
                    })
                )
            })
        })
    }, [])

    const handleDelete = (id) => {
        const seatId = booking.find((element) => element.id == id).seatId;
        fetch(`${API}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                status: "Available",
                name: "",
                rollNo: "",
                date: "",
            })
        }).then((response) => {
            response.json().then((data) => {
                setBooking((prev) => {
                    return prev.filter((element) => {
                        return element.id !== id
                    })
                });
                setCancelledSeatId(seatId);
                setShowSuccess(true);
            })
        })

        // axios.patch(`${API}/${id}`,{status: "Available",
        //         name: "",
        //         rollNo: "",
        //         date: "",})
    }


    return (
        <>
            <Header />
            <div className="booking " style={{ paddingTop: "80px" }}>
                <h1 className="fw-bold">My Bookings</h1>
                <div className="border border-1 shadow rounded-3 p-4 mt-4">
                    <div>
                        <h3 className="fw-semibold">My Bookings</h3>
                    </div>
                    <div>
                        <table className="table mt-3">
                            <thead >
                                <tr >
                                    <th>Booking ID</th>
                                    <th>Seat ID</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    booking.map((element, index) => {

                                        return (
                                            <tr key={index}>
                                                <td>{element.rollNo}</td>
                                                <td>{element.seatId}</td>
                                                <td>{element.date}</td>
                                                <td>{element.status}</td>
                                                <td><button className="btn btn-danger text-white" onClick={() => { handleDelete(element.id) }}>Cancel</button></td>
                                            </tr>
                                        )
                                    })

                                }
                            </tbody>
                        </table>
                        {
                            showSuccess && (
                                <div className="position-fixed bg-white rounded-4" style={{ top: "200px", right: "450px", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)" }} >
                                    <div className="text-center p-4 rounded-4 shadow border border-danger bg-danger bg-opacity-10">
                                        <div className="d-flex gap-4">
                                            <div className="danger-icon mb-3 rounded-5  bg-danger bg-opacity-25" style={{ width: "30px", height: "30px", fontSize: "20px" }}>
                                                X
                                            </div>

                                            <h4 className="text-danger">
                                                Booking Cancelled!!
                                            </h4>
                                        </div>

                                        <p className="text-secondary">
                                            Your booking for seat {cancelledSeatId} has been cancelled.
                                        </p>

                                        <button className="border-0  bg-none" type="button" onClick={() => { setShowSuccess(false); }}>X</button>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>

            </div>

        </>
    )
}

export default Booking;
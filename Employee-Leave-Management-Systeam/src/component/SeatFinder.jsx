import { useEffect, useState } from "react";
import Header from "./Header";

function SeatFinder() {
    const [booking, setBooking] = useState([]);
    const [selectedSeat, setSelectedSeat] = useState(null);
    const [filterStatus, setFilterStatus] = useState("All");
    const [showSuccess, setShowSuccess] = useState(false);
    const [name , setName] = useState("");
    const [rollNo , setRollNo] = useState("");
    const [bookingDate , setBookingDate] = useState("");
    const [bookedSeatId, setBookedSeatId] = useState("");
    const API = "http://localhost:3000/bookings";

    useEffect(() => {
        fetch(API).then((response) => {
            response.json().then((data) => {
                setBooking(data);
            })
        })
    }, []);


    const handlebook = async (id) => {
        if (selectedSeat.status == "Available") {
           const data={
                name: name,
                rollNo: rollNo,
                date : bookingDate,
                status: "Reserved"
            };
            await fetch(`${API}/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });



            fetch(API, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            }).then((response) => {
                response.json().then((data) => {
                    setBooking(data);
                    setSelectedSeat(null);
                    setBookedSeatId(selectedSeat?.seatId);
                    setShowSuccess(true);
                })
            })

        }

    }

    const selectedBooking = booking.find(
        (item) => item.seatId === selectedSeat?.seatId);
    return (
        <>
            <Header />
            <div className="SeatFinder " style={{ paddingTop: "80px", backgroundColor: "rgba(195, 225, 236, 0.326)", height: "100vh" }}>
                <h1 className="fw-bold">Seat Layout</h1>
                <div className="border border-1 p-4 rounded-3 bg-white shadow mt-3">
                    <div className="d-flex gap-3 align-items-center">
                        <p className="m-0">Filter by Status : </p>
                        <button className="btn btn-primary" onClick={() => { setFilterStatus("All") }}>All</button>
                        <button className="btn bg-success bg-opacity-10 text-success" onClick={() => { setFilterStatus("Available") }}>Available</button>
                        <button className="btn bg-danger bg-opacity-10 text-danger" onClick={() => { setFilterStatus("Occupied") }}>Occupied</button>
                        <button className="btn bg-primary bg-opacity-10 text-primary" onClick={() => { setFilterStatus("Reserved") }}>Reserved</button>
                    </div>
                    <div>
                        <table className="table mt-3">
                            <thead>
                                <tr>
                                    <th></th>
                                    {
                                        Array.from({ length: 10 }, (_, i) => {
                                            return <th key={i}>{i + 1}</th>
                                        })
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {["A", "B", "C", "D"].map((row) => (
                                    <tr key={row}>
                                        <th className="text-secondary">{row}</th>

                                        {Array.from({ length: 10 }, (_, i) => {
                                            const seatId = `${row}${i + 1}`;

                                            const bookings = booking.find(
                                                (item) => item.seatId === seatId
                                            );

                                            const status = bookings?.status || "Available";

                                            const showSeat =
                                                filterStatus === "All" || status === filterStatus;

                                            return (
                                                <td key={seatId}>
                                                    {
                                                        showSeat && (
                                                            <button
                                                                className={`btn btn-sm w-100 text-white rounded-2 ${status === "Available"
                                                                    ? "bg-success"
                                                                    : status === "Occupied"
                                                                        ? "bg-danger"
                                                                        : "bg-primary"
                                                                    }`}

                                                                style={{
                                                                    maxWidth: "60px",
                                                                    height: "42px",
                                                                    fontSize: "12px",
                                                                }}
                                                                onClick={(e) => {
                                                                    if (status == "Available") {
                                                                        e.preventDefault();
                                                                        setSelectedSeat({ seatId, status })
                                                                    }
                                                                }}>{seatId}
                                                            </button>
                                                        )
                                                    }

                                                </td>
                                            );
                                        })}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {
                            selectedSeat && (
                                <div className="box position-fixed d-flex justify-content-center align-items-center"
                                    style={{
                                        position: "fixed",
                                        top: "0",
                                        left: "0",
                                        width: "100%",
                                        height: "100vh",
                                        backgroundColor: "rgba(20, 35, 55, 0.25)",
                                        backdropFilter: "blur(2px)",
                                        WebkitBackdropFilter: "blur(5px)",
                                        zIndex: 1050
                                    }}>
                                    <div className="d-flex flex-column gap-3 bg-white rounded-3 shadow p-4" style={{
                                        width: "450px",
                                        maxWidth: "95%",
                                        maxHeight: "100%",
                                        overflowY: "auto"
                                    }}>
                                        <div className="d-flex justify-content-between">
                                            <h2 className="m-0">Seat Details</h2>
                                            <button className="border-0 bg-white" type="button" onClick={() => { setSelectedSeat(null) }}>X</button>
                                        </div>
                                        <hr />
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex gap-3">
                                                <div
                                                    className="bg-success text-white rounded-3 d-flex justify-content-center align-items-center fw-bold"
                                                    style={{
                                                        width: "80px",
                                                        height: "80px",
                                                        fontSize: "20px"
                                                    }}>{selectedBooking?.seatId}</div>
                                                <div>
                                                    <h6 className="fw-bold">Seat {selectedSeat?.seatId}</h6>
                                                    <p className="m-0">{selectedBooking?.location}</p>
                                                    <p className="m-0">{selectedBooking?.type}</p>
                                                </div>

                                            </div>

                                            <div>
                                                <button className="btn bg-success bg-opacity-10 text-success">Available</button>
                                            </div>
                                        </div>
                                        <hr />
                                        <div>
                                            <div className="d-flex gap-5"><p className="m-0">Seat ID</p><span className="" style={{ marginLeft: "20px" }}>{selectedBooking.seatId}</span></div>
                                            <div className="d-flex gap-5"><p className="m-0 ">Row</p><span className="" style={{ marginLeft: "40px" }}>{selectedBooking.seatId.charAt(0)}</span></div>
                                            <div className="d-flex gap-5"><p className="m-0">Number</p><span style={{ marginLeft: "12px" }}>{selectedBooking.seatId.slice(1)}</span></div>
                                            <div className="d-flex gap-5"><p className="m-0">Type</p><span className="" style={{ marginLeft: "35px" }}>{selectedBooking.type}</span></div>
                                            <div className="d-flex gap-5"><p className="m-0">Location</p><span className="" style={{ marginLeft: "8px" }}>{selectedBooking.location}</span></div>
                                            <div className="d-flex gap-5"><p className="m-0">Status</p><span className="" style={{ marginLeft: "25px" }}>{selectedBooking.status}</span></div>
                                        </div>
                                        <form className="d-flex flex-column gap-3">
                                            <div className="d-flex gap-1">
                                                <div className="col-6">
                                                    <label className="fw-semibold">Student Name <span className="text-danger">*</span></label><br />
                                                    <input type="text" placeholder="Enter Your Name" className=" p-2 rounded-2  w-100" value={name} style={{ border: "1px solid gray" }}  onChange={(e)=>{setName(e.target.value)}}/>
                                                </div>
                                                <div className="col-6">
                                                    <label className="fw-semibold">Roll Number <span className="text-danger">*</span></label><br />
                                                    <input type="text" placeholder="Enter Your Roll No." className=" p-2 rounded-2 w-100" value={rollNo} style={{ border: "1px solid gray" }} onChange={(e)=>{setRollNo(e.target.value)}}/>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <label className="fw-semibold">Booking Date <span className="text-danger">*</span></label><br />
                                                <input type="date" placeholder="Enter Booking Date" className=" p-2 rounded-2 w-100" value={bookingDate} style={{ border: "1px solid gray" }} onChange={(e)=>{setBookingDate(e.target.value)}}/>
                                            </div>
                                            <div className="d-flex gap-2">
                                                <button className="col-6 btn btn-outline-dark">Cancel</button>
                                                <button className="col-6 btn btn-primary" type="button" onClick={() => { handlebook(selectedBooking.id) }}>Book Seat</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            )
                        }


                        {
                            showSuccess && (
                                <div className="position-fixed bg-white rounded-4" style={{ top: "200px", right: "450px", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)" }} >
                                    <div className="text-center p-4 rounded-4 shadow border border-success bg-success bg-opacity-10">
                                        <div className="d-flex gap-4">
                                            <div className="success-icon mb-3 rounded-5  bg-success bg-opacity-25" style={{ width: "30px", height: "30px", fontSize: "20px" }}>
                                                ✓
                                            </div>

                                            <h4 className="text-success">
                                                Booking Successful!
                                            </h4>
                                        </div>

                                        <p className="text-secondary">
                                            Seat {bookedSeatId} has been booked successfully.
                                        </p>

                                        <button className="border-0  bg-none" type="button" onClick={() => { setSelectedSeat(null); setShowSuccess(false); }}>X</button>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SeatFinder;
import Navbar from "../components/Navbar";
import StudentList from "../components/StudentList";
import StudentForm from "../components/StudentForm";
import { useState } from "react";

function Dashboard() {
    const [editStudent, setEditStudent] = useState(null);
    return (
        <>
            <Navbar />

            <div className="dashboard container-fluid p-4">
                <StudentForm
                editStudent={editStudent}
                setEditStudent={setEditStudent}
                />
                
                <StudentList setEditStudent={setEditStudent}/>

            </div>
        </>
    );
}

export default Dashboard;

import { useEffect, useState } from 'react';
import { fetchStudents } from "../redux/action";
import { FaSearch } from "react-icons/fa";
import axios from 'axios';
import "../App.css"
import { useDispatch, useSelector } from 'react-redux';
import StudentDetails from './StudentDetails';


function StudentList({ setEditStudent }) {
    const API = "http://localhost:3000/students"
    const [search, setSearch] = useState("");
    const [selectedClass, setselectedClass] = useState("All")
    const dispatch = useDispatch();
    const students = useSelector((state) => state.students || []);


    useEffect(() => {
        axios.get(API).then((response) => {
            dispatch(fetchStudents(response.data));
        })
    }, [dispatch])

    const sortedStudents = [...students].sort((a, b) => {
        return a.name.localeCompare(b.name);

    });

    let filteredData = [];

    if (selectedClass == "All") {
        filteredData = sortedStudents;
    }
    else if (selectedClass == "6") {
        filteredData = sortedStudents.filter((student) =>  student.class == "6" );
    }
    else if (selectedClass == "7") {
        filteredData = sortedStudents.filter((student) =>  student.class == "7" );
    }
    else if (selectedClass == "8") {
        filteredData = sortedStudents.filter((student) => student.class == "8");
    }
    else if (selectedClass == "9") {
        filteredData = sortedStudents.filter((student) => student.class == "9");
    }

    const searchData = filteredData.filter((student) => {
        return (
            (student.name || "").toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )

    });


    return (
        <>
            <div className="table-card table">

                <div className="table-header">

                    <div className="filter-buttons">
                        <button className="filter-btn active" onClick={() => { setselectedClass("All") }}>All</button>
                        <button className="filter-btn" onClick={() => { setselectedClass("6") }}>Class 6</button>
                        <button className="filter-btn" onClick={() => { setselectedClass("7") }}>Class 7</button>
                        <button className="filter-btn" onClick={() => { setselectedClass("8") }}>Class 8</button>
                        <button className="filter-btn" onClick={() => { setselectedClass("9") }}>Class 9</button>
                    </div>

                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Search..."
                            onChange={(e) => { setSearch(e.target.value) }}
                        />
                        <FaSearch size={"30px"} color={"gray"} />
                    </div>

                </div>

                <div className="table-responsive">
                    <table className="table student-table align-middle mb-0">

                        <thead>
                            <tr>
                                <th></th>
                                <th>NAME</th>
                                <th>AGE</th>
                                <th>CLASS</th>
                                <th>PHONE NUMBER</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                searchData.map((student) => {
                                    return <tr key={student.id}>
                                        <td></td>
                                        <td>
                                            <div className='student-info'>
                                                <img className='student-img' src={student.image} alt="" />
                                                <div className='d-flex flex-column'>
                                                    <span className='student-name'>{student.name}</span>
                                                    <span className='student-grade'>Grade {student.grade}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{student.age}</td>
                                        <td>{student.class}</td>
                                        <td>{student.phone}</td>
                                        <td>
                                            <StudentDetails
                                                student={student}
                                                setEditStudent={setEditStudent}
                                            />

                                        </td>
                                    </tr>
                                })

                            }
                        </tbody>

                    </table>
                </div>

            </div>
        </>
    )

}

export default StudentList
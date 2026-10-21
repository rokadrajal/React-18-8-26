import { useEffect, useState } from "react"
import { addStudents, updateStudents } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { FaUserCircle, FaPlus } from "react-icons/fa";
import axios from "axios";

function StudentForm({ editStudent, setEditStudent }) {
    const [name, setName] = useState("");
    const [grade, setGrade] = useState("");
    const [age, setAge] = useState("");
    const [Class, setClass] = useState("");
    const [phone, setPhone] = useState("");
    const [image, setImage] = useState("");
    const [showImageInput, setShowImageInput] = useState(false);
    const API = "http://localhost:3000/students";
    const [id, setId] = useState(null);

    const dispatch = useDispatch();

    const data = useSelector((state) => {
        return state.students;
    });

    useEffect(() => {
        if (editStudent) {
            setId(editStudent.id);
            setName(editStudent.name || "");
            setGrade(editStudent.grade || "");
            setAge(String(editStudent.age || ""));
            setClass(editStudent.class || "");
            setPhone(editStudent.phone || "");
            setImage(editStudent.image || "");
        }
    }, [editStudent]);

    const handleClick = (e) => {
        e.preventDefault();

        if (name == "" || grade == "" || Class == "" || age == "" || phone == "") {
            return
        }

        const newStudent = {
            name: name,
            grade: grade,
            class: Class,
            phone: phone,
            age: age,
            image: image
        }

        if (!id) {
            axios.post(API, newStudent).then((response) => {
                dispatch(addStudents(response.data));
                handleCancel();
            })
        }
        else {
            axios.put(`${API}/${id}`, newStudent).then((response) => {
                dispatch(updateStudents(response.data));
                handleCancel();
            })
        }
    }

    const handleCancel = () => {
        setName("");
        setGrade("");
        setAge("");
        setClass("");
        setPhone("");
        setImage("");
        setShowImageInput(false);
        setId(null);
        setEditStudent(null);
    }


    return (
        <>
            <div className="form-card mb-4">
                <div className="row g-3 align-items-end">

                    <div className="col-md-1">
                        <div className="profile-upload">
                            <div
                                className="profile-icon"
                                onClick={() => setShowImageInput(!showImageInput)}
                            >
                                {
                                    image ? (
                                        <img
                                            src={image}
                                            alt="Student"
                                            className="profile-preview"
                                        />
                                    ) : (
                                        <FaUserCircle size={50} color="gray" />
                                    )}

                                <FaPlus className="profile-plus" />
                            </div>

                            {showImageInput && (
                                <input
                                    type="text"
                                    placeholder="Image URL"
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                    className="form-control mt-2"
                                />
                            )}
                        </div>
                    </div>

                    <div className="col-md-3">
                        <label className="form-label">Student's Name</label>
                        <input
                            type="text"
                            value={name}
                            className="form-control custom-input"
                            placeholder="Enter student name"
                            onChange={(e) => { setName(e.target.value) }}
                        />
                    </div>
                    <div className="col-md-1">
                        <label className="form-label">Grade</label>
                        <input
                            type="text"
                            value={grade}
                            className="form-control custom-input"
                            placeholder="Enter student Grade"
                            onChange={(e) => { setGrade(e.target.value) }}
                        />
                    </div>

                    <div className="col-md-2">
                        <label className="form-label">Class</label>
                        <select value={Class} className="form-select custom-input" onChange={(e) => { setClass(e.target.value) }}>
                            <option value="">Select from list</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                        </select>
                    </div>

                    <div className="col-md-1">
                        <label className="form-label">Age</label>
                        <input
                            type="number"
                            value={age}
                            className="form-control custom-input"
                            placeholder="Enter age"
                            onChange={(e) => { setAge(e.target.value) }}
                        />
                    </div>

                    <div className="col-md-2">
                        <label className="form-label">Phone</label>
                        <input type="number" value={phone} placeholder="Enter phone number" className="form-select custom-input" onChange={(e) => { setPhone(e.target.value) }} />
                    </div>

                    <div className="col-md-2">
                        <button className="btn add-btn w-100 text-white" onClick={handleClick}>
                            {id !== null ? "UPDATE NOW" : "ADD NOW"}
                        </button>
                        {id !== null && (
                            <button
                                type="button"
                                className="btn btn-outline-danger w-100 mt-2"
                                onClick={handleCancel}
                            >
                                CANCEL
                            </button>
                        )}
                    </div>

                </div>
            </div>
        </>
    )

}

export default StudentForm
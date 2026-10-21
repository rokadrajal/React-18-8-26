import { useDispatch } from 'react-redux';
import { deleteStudents} from "../redux/action";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from 'axios';

function StudentDetails({ student , setEditStudent }) {
    const API = "http://localhost:3000/students"
    const dispatch = useDispatch();


    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete(`${API}/${student.id}`).then(() => {
            dispatch(deleteStudents(student.id));
        })
    }
    
    const handleEdit = () => {
        setEditStudent(student);
    };
    return (
        <>

            <div className="action-buttons">
                <button className="icon-btn edit-btn" onClick={handleEdit}>
                    <FaEdit />
                </button>

                <button className="icon-btn delete-btn" onClick={handleDelete}>
                    <FaTrash />
                </button>
            </div>
        </>
    )

}

export default StudentDetails
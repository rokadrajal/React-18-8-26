export function fetchStudents (student){
    return{
        type : "FETCH_STUDENTS",
        payload : student
    }
}
export function addStudents(student){
    return{
        type : "ADD_STUDENT",
        payload : student
    }
}
export function updateStudents(student){
    return{
        type : "UPDATE_STUDENT",
        payload :student
    }
}
export function deleteStudents(id){
    return{
        type : "DELETE_STUDENT",
        payload : id
    }
}
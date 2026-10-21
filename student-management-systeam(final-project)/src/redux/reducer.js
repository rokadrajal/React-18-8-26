const data = {
    students: []
}


const reducer = (state = data, action) => {
    switch (action.type) {
        case "FETCH_STUDENTS":
            return {
                ...state,
                students: action.payload,
            }

        case "ADD_STUDENT":
            return {
                ...state, students: [...state.students, action.payload]
            }
        case "UPDATE_STUDENT":
            return {
                ...state, students: state.students.map((element) => {
                    return ((element.id == action.payload.id) ? action.payload : element)
                })
            }
        case "DELETE_STUDENT":
            return {
                ...state, students: state.students.filter((element) => {
                    return element.id != action.payload
                })
            }

        default:
            return {
                ...state
            }
    }

}
export default reducer
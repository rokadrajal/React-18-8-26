const initialValue = {
    count : 0
}

const useReducer =(state = initialValue , action)=>{
   switch (action.type) {
    case "INCREMENT":
       return{
         ...state , count : state.count + 1
       }
    case "DECREMENT":
       return{
        ...state , count : state.count - 1
       }
    case "RESET":
       return{
        count : initialValue.count
       }
    case "POWER":
       return{
        ...state , count : state.count * state.count
       }
    default:
        return{
         ...state
       }
   }
}

export default useReducer;
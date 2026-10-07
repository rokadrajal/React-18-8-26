import { increment, decrement , reset, power } from "./redux/Action"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function App() {
  const count = useSelector((state)=>{
      return state.count;
  });

  const dispatch = useDispatch();

  return (
    <>
      <h1>REDUX : COUNT</h1>
      <h2>Count : {count}</h2>
      <button onClick={()=>{dispatch(increment())}}>Increment</button>
      <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
      <button onClick={()=>{dispatch(reset())}}>Reset</button>
      <button onClick={()=>{dispatch(power())}}>Power</button>
    </>
  )
}

export default App

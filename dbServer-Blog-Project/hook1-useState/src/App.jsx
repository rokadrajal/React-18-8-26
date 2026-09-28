import { useState } from 'react';
import './App.css'

function App() {
  // let [count,setcount] = useState(0);
 
    let [fname,setfname] = useState("");
    let [lname,setlname] = useState("");
    let [age,setage] = useState("");
 
  return (
    <>
    {/* <h1>Hook</h1>
    <div>
      <h2>Count : {count}</h2>
      <button onClick={()=>{setcount(count+1)}}>increment</button>
      <button onClick={()=>{setcount(0)}}>Reset</button>
      <button onClick={()=>{setcount(count-1)}}>decrement</button>
      <button onClick={()=>{setcount(Math.floor(Math.random()*100))}}>Rendom</button>
      <button onClick={()=>{setcount(parseInt(Math.random()*100))}}>Rendom</button>
    </div> */}

    <div>
      <h1>First Name : {fname}</h1>
      <h1>Last Name : {lname}</h1>
      <h1>Age : {age}</h1>
    </div>

    <div>
      <button onClick={()=>{setfname(prompt("Enter your fname :"))}}>Fname</button>
      <button onClick={()=>{setlname(prompt("Enter your lname :"))}}>Lname</button>
      <button onClick={()=>{setage(prompt("Enter your age :"))}}>Age</button>
    </div>
    </>
  )
}

export default App

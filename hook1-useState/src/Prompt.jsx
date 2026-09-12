import { useState } from "react"


function Prompt() {

    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [age, setage] = useState(0);
    const [is18, setIs18] = useState(false);

    return (
        <>
            <div>
                <button onClick={()=>{setfname(prompt("Enter your first name :"))}}>First name</button>
                <button onClick={()=>{setlname(prompt("Enter your last name :"))}}>Last name</button>
                <button onClick={()=>{setage(prompt("Enter your age :"))}}>Age</button>
                <button onClick={()=>{setIs18(age>=18)}}>Check 18+</button>
            </div>
            <h1>Full Name : {fname} {lname}</h1>
            <h2>Age : {age}</h2>
            <h2>Is18+ : {(is18) ? "True": "False"}</h2>
        </>
    )
}

export default Prompt
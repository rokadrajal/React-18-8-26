import './App.css'
import { PiTextTLight } from 'react-icons/pi'
import { FiMail ,FiCloud} from 'react-icons/fi'
import { useEffect, useState } from 'react'

function App() {
  const [fullName,setFullname] = useState("");
  const [email,setEmail] = useState("");
  const [pnumber,setPnumber] = useState(0);
  const [notes,setNotes] = useState("");
  const [cv,setCv] = useState("");

  const [data,setData] = useState(null);

  const formData = ()=>{
    setData({
      fname : fullName,
      email : email,
      pnumber : pnumber,
      notes : notes,
      cv : cv,
    });
    };

  useEffect(()=>{
    if(data!= null)
      localStorage.setItem("form" , JSON.stringify(data));
  },[data]);

  return (
    <>
      <section>
        <form >
          <div style={{ color: "gray", fontSize: "25px", fontFamily: "sans-serif" }}>Logo</div>
          <div style={{ fontSize: "30px", fontFamily: "sans-serif" }}>Vacancy Application</div>
          <div>Enter Web Form Description</div>
          <div className='detail'>
            <main>
              <PiTextTLight color='gray' style={{ position: "absolute", top: "14px", left: "20px" }} /><input type="text" placeholder="Full Name" onChange={(e)=>{setFullname(e.target.value)}}/>
            </main>
            <main>
              <FiMail color='gray' style={{ position: "absolute", top: "14px", left: "20px" }} /><input type="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
            </main>
            <main>
              <PiTextTLight color='gray' style={{ position: "absolute", top: "14px", left: "20px" }} /><input type="number" placeholder="Phone Number" onChange={(e)=>{setPnumber(e.target.value)}} />
            </main>
            <main>
              <PiTextTLight color='gray' style={{ position: "absolute", top: "14px", left: "20px" }} /><input type="text" placeholder="Notes" onChange={(e)=>{setNotes(e.target.value)}}/>
            </main>
            <main>
              <FiCloud color='gray' style={{ position: "absolute", top: "14px", left: "20px" }}/><input type="text" placeholder="(CV)" onChange={(e)=>{setCv(e.target.value)}}/>
            </main>
            <main className='d-flex gap-2'>
              <button style={{ padding: "8px", border: "none", backgroundColor: '#9aedbf', borderRadius: "6px", color: "#002c14" }} onClick={formData}>+ Add Field</button>
              <button style={{ padding: "8px", border: "none", backgroundColor: '#9aedbf', borderRadius: "6px", color: "#002c14" }}>+ Add Field Section</button>
            </main>
          </div>
        </form>
      </section>
    </>
  )
}


export default App

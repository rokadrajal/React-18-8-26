import { useEffect, useState } from 'react';
import './App.css'
import Display from './Display';
import { Route, Routes, useNavigate } from 'react-router-dom';


function Home() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [age, setAge] = useState(0);
  const [formdata, setFormdata] = useState(null);
  const nevigate = useNavigate();

  const form = () => {
    setFormdata({
      fname: fname,
      lname: lname,
      age: age,
    });
  };

  useEffect(() => {
    if (formdata == null) {
      return;
    }
    localStorage.setItem("cruddata", JSON.stringify(formdata));
    nevigate("/display");

  }, [formdata]);

  return (
    <form className="contact-form">

      <h2>Contact Form</h2>

      <div className="form-group">
        <label>First Name</label>
        <input type="text" placeholder="Enter your first name" onChange={(e) => { setFname(e.target.value) }} />
      </div>

      <div className="form-group">
        <label>Last Name</label>
        <input type="text" placeholder="Enter your last name" onChange={(e) => { setLname(e.target.value) }} />
      </div>

      <div className="form-group">
        <label>Age</label>
        <input type="number" placeholder="Enter your age" onChange={(e) => { setAge(e.target.value) }} />
      </div>

      <button type="submit" onClick={form}>Send Message</button>

    </form>
  );


}


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/display" element={<Display />} />
      </Routes>
    </>
  )
}

export default App;


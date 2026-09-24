import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const nevigate = useNavigate();
    let islogin = false;

    const localdata = JSON.parse(localStorage.getItem("data"));
    
    const submit = (e)=> {
        e.preventDefault();

        if(email == localdata.email)
        {
            if(password == localdata.password)
            {
                islogin = true;
                nevigate("/home");
            }
        }
        else{
            nevigate("/register");
        }
        
    }

    useEffect(()=>{
        if(islogin == true)
        localStorage.setItem("login", JSON.stringify({islogin : true}));
    },[islogin]);


    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form>
                    <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" onClick={submit}>Login</button>
                </form>
                <p> Don't have an account? <a href="register">Register</a> </p>
            </div>
        </div>);
}

export default Login;



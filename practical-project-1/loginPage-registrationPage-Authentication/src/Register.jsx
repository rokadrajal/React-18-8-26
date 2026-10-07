import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    const register = (e) => {
        e.preventDefault();
        setData({
            name: name,
            email: email,
            password: password,
        });
        navigate('/home');
    }

    useEffect(()=>{

        if(data == null)
        {
            return;
        }
        localStorage.setItem("data" , JSON.stringify(data));
        localStorage.setItem("login",JSON.stringify({islogin : true})); 
    },[data])

    return (
        <div className="register-container">
            <h2>Register</h2>

            <form>
                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit" onClick={register}>Register</button>
            </form>
            <p>You've already an Account? <a href="/">Sign In</a></p>
        </div>
    );

}

export default Register;
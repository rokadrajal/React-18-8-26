import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handalsubmit = (e) => {
        e.preventDefault();  
        localStorage.setItem("token", 1234);
        navigate("/deshboard")
    }


    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form>
                    <input type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" onClick={handalsubmit}>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;



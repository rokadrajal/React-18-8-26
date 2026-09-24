import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Logout(){
    const navigate = useNavigate();

    useEffect(()=>{
        localStorage.setItem("login",JSON.stringify({islogin : false}));
        navigate("/");
    });
    return(
        <>
        </>
    )
}

export default Logout;
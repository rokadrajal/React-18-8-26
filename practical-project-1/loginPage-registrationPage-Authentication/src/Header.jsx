import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
    let islogin = JSON.parse(localStorage.getItem("login")).islogin;
    const navigate = useNavigate();

    useEffect(() => {
        console.log("hear");
    }, [islogin]);

    return (
        <section className="bg-dark text-light">
            <nav className="container d-flex  justify-content-between align-items-center">
                <div className="fs-1">My Website</div>
                <form>
                    {
                        (islogin)
                            ?
                            <div>
                                <button className="btn btn-danger" onClick={() => { navigate("/logout") }}>Logout</button>
                            </div>

                            :

                            <div className="d-flex gap-3">
                                <button onClick={() => navigate("/register")} className="btn btn-outline-light  py-2 px-4 ">Sign Up</button>
                                <button onClick={() => navigate("/")} className="btn btn-primary py-2 px-4 rounded-2 text-white">Sign In</button>
                            </div>
                    }
                </form>
            </nav>

        </section>
    )
}

export default Header;
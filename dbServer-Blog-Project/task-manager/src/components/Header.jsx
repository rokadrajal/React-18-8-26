import { Link } from "react-router-dom";


function Header(){
    return (
        <section className="bg-dark text-light d-flex justify-content-between p-2  px-4 align-items-center">
            <h1>Task Manager</h1>
            <ul className="d-flex gap-5 list-unstyled m-0">
                <li>
                    <Link to="/" className="link text-decoration-none ">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="link text-decoration-none ">
                        About
                    </Link>
                </li>
            </ul>
        </section>
    )
}

export default Header;
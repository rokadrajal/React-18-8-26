import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header">

            <div className="logo">
                <img
                    src="https://logos-world.net/wp-content/uploads/2021/09/Dominos-Pizza-Logo-2012.png"
                    alt="Domino's"
                />
            </div>

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/pizza">Pizza</Link>
                </li>

                <li>
                    <Link to="/garlic">Garlic Breads & Dips</Link>
                </li>

                <li>
                    <Link to="/desserts">Desserts</Link>
                </li>

                <li>
                    <Link to="/deals">Deals</Link>
                </li>

                <li>
                    <Link to="/cheese">Cheese Volcano</Link>
                </li>
            </ul>

            <div className="bottom">
                <button>Login</button>
                <button className="cart">🛒 Cart</button>
            </div>

        </div>
    )
}

export default Header
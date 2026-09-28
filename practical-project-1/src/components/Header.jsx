import logo from"../assets/car.png"

const mystyle = {
    mainsection: {
        backgroundColor: "navy",
        color: "white",
        padding: "10px 30px",
        fontFamily: "Arial",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },

    menu: {
        display: "flex",
        alignItems: "center",
        gap: "40px",
        cursor: "pointer",
    },


}

function Header() {
    return (
        <nav style={mystyle.mainsection}>
            <div>
                <img width="100px" src={logo} alt="" />
            </div>

            <div>
                <ul style={mystyle.menu}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Service</li>
                </ul>
            </div>
        </nav>
    )
}
export default Header;
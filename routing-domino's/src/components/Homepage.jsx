import pizza from "../assets/pizzo.png";

function Home() {
    return (
        <section className="home">

            <div className="home-content">
                <h1 className="h1">HOT PIZZA</h1>
                <h2 className="h2">HAPPY MOMENTS</h2>

                <p>
                    Enjoy delicious, fresh and hot pizzas
                    delivered straight to your doorstep.
                </p>

                <button>ORDER NOW</button>
            </div>

            <div className="home-image">
                <img src={pizza} alt="Pizza" />
            </div>

        </section>
    )
}

export default Home

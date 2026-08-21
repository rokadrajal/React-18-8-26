import "../styles/Home.css"

function Home(props) {
    return (
        <section>
            <h1>Car Collection</h1>
            <div>
                {
                    props.detailes.map((data,index) => {
                        return (
                            <main key={index}>
                                <h2>{data.CompanyName}</h2>
                                <img width="300px" src={data.url} alt="" />
                                <h3>{data.Model}</h3>
                                <p>{data.Price}</p>
                                <p>{data.Category}</p>
                            </main>
                        )

                    })
                }
            </div>
        </section>
    )
}
export default Home;
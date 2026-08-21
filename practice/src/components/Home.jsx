function Home({ data }) {
    return (
        <section>
            {
                data.map((data) => {
                    return (
                        <div>
                            <h1>Name : {data.studentName}</h1>
                            <h2>Collage Name : {data.collageName}</h2>
                            <h2>Gender : {data.gender}</h2>
                            <h2>Age : {data.age}</h2>
                        </div>

                    )
                })


            }
        </section>
    )
}
export default Home;
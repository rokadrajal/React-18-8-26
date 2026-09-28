function About() {
    return (
        <section className="container mt-5 d-flex flex-column gap-3">
            <h1 className="display-1 fw-medium">About This App</h1>

            <div className="fs-5">
                <p>This is a simple Task Manager app built with :</p>
                <div className="ms-3 ">
                    <p>- React (components,props,hooks)</p>
                    <p>- Bootstrap (styling)</p>
                    <p>- React Router (page navigation)</p>
                    <p>- localStorage (data persistence)</p>
                </div>
            </div>
        </section>
    )
}

export default About;
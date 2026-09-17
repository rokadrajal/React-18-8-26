function Home() {
  return (
    <section className="home-section d-flex align-items-center justify-content-center ">
      <div className="container">
        <div className="row align-items-center ">

          <div className="col-md-7">
            <p className="text-info fs-5 mb-2">Hello, I'm</p>

            <h1 className="display-3 fw-bold text-white">
              Rajal Rokad
            </h1>

            <h2 className="text-light mb-3">
              Full Stack Developer
            </h2>

            <p className="text-light opacity-75 fs-5">
              I build modern, responsive and user-friendly websites
              using React, JavaScript, HTML, CSS and Bootstrap.
            </p>

            <div className="d-flex gap-3 mt-4">
              <button className="btn btn-primary px-4 py-2">
                View My Work
              </button>

              <button className="btn btn-outline-light px-4 py-2">
                Contact Me
              </button>
            </div>
          </div>

          <div className="col-md-5 text-center">
            <div className="profile-circle">
              <span>&lt;/&gt;</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;


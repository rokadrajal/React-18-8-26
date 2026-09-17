function Certificate() {
  return (
    <section className="certificate-section py-5">
      <div className="container">

        <div className="text-center mb-5">
          <p className="text-info fs-5">My Achievements</p>
          <h1 className="text-white fw-bold">Certificates</h1>
        </div>

        <div className="row justify-content-center g-4">

          <div className="col-md-4">
            <div className="certificate-card text-center p-4">
              <div className="certificate-icon mb-3">
                🏆
              </div>

              <h3 className="text-white">
                Full Stack Development with MERN
              </h3>

              <p className="text-light opacity-75">
                Certificate of completion in Full Stack Development with MERN.
              </p>

              <button className="btn btn-outline-info px-4">
                View Certificate
              </button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="certificate-card text-center p-4">
              <div className="certificate-icon mb-3">
                💻
              </div>

              <h3 className="text-white">
                Introduction to Computer Networking
              </h3>

              <p className="text-light opacity-75">
                Certificate of completion in Introduction to Computer Networking.
              </p>

              <button className="btn btn-outline-info px-4">
                View Certificate
              </button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="certificate-card text-center p-4">
              <div className="certificate-icon mb-3">
                🌐
              </div>

              <h3 className="text-white">
                Foundations of IT Infrastructure 
              </h3>

              <p className="text-light opacity-75">
                Certificate of completion in Foundations of IT Infrastructure.
              </p>

              <button className="btn btn-outline-info px-4">
                View Certificate
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Certificate;
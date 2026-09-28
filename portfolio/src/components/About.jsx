function About() {
  return (
    <section className="about-section py-5">
      <div className="container">

        <div className="text-center mb-5">
          <p className="text-info fs-5">Get To Know Me</p>
          <h1 className="text-white fw-bold">About Me</h1>
        </div>

        <div className="row align-items-center">

          <div className="col-md-5 text-center mb-4 mb-md-0">
            <div className="about-box">
              <h2>&lt;/&gt;</h2>
              <p>Full Stack Developer</p>
            </div>
          </div>

          <div className="col-md-7">
            <h2 className="text-white mb-3">
              Hello! I'm <span className="text-info">Rajal Rokad</span>
            </h2>

            <p className="text-light opacity-75">
              I am currently doing a Full Stack Development course.
              I enjoy creating modern and responsive websites and
              learning new technologies.
            </p>

            <p className="text-light opacity-75">
              I have learned technologies like HTML, CSS, JavaScript,
              React, Bootstrap and more. My goal is to improve my
              development skills and build useful web applications.
            </p>

            <div className="row mt-4">
              <div className="col-sm-6">
                <p className="text-white">
                  <b className="text-info">Name:</b> Rajal Rokad
                </p>
              </div>

              <div className="col-sm-6">
                <p className="text-white">
                  <b className="text-info">Role:</b> Full Stack Developer
                </p>
              </div>

              <div className="col-sm-6">
                <p className="text-white">
                  <b className="text-info">Skills:</b> React, JavaScript
                </p>
              </div>

              <div className="col-sm-6">
                <p className="text-white">
                  <b className="text-info">Experience:</b> Fresher
                </p>
              </div>
            </div>

            <button className="btn btn-info mt-3 px-4">
              Download CV
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;


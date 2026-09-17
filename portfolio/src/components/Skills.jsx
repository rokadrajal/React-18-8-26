
function Skills() {
  return (
    <section className="skills-section py-5">
      <div className="container">

        <div className="text-center mb-5">
          <p className="text-info fs-5">My Expertise</p>
          <h1 className="text-white fw-bold">Skills</h1>
        </div>

        <div className="row justify-content-center g-4">

          <div className="col-md-4">
            <div className="skill-card p-4 text-center">
              <div className="skill-icon mb-3">
                🌐
              </div>

              <h3 className="text-white">HTML</h3>

              <p className="text-light opacity-75">
                Building structured and semantic web pages.
              </p>

              <div className="progress mt-3">
                <div className="progress-bar" style={{ width: "90%" }}>
                  90%
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="skill-card p-4 text-center">
              <div className="skill-icon mb-3">
                🎨
              </div>

              <h3 className="text-white">CSS</h3>

              <p className="text-light opacity-75">
                Creating responsive and attractive designs.
              </p>

              <div className="progress mt-3">
                <div className="progress-bar" style={{ width: "92%" }}>
                  92%
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="skill-card p-4 text-center">
              <div className="skill-icon mb-3">
                ⚡
              </div>

              <h3 className="text-white">JavaScript</h3>

              <p className="text-light opacity-75">
                Adding interactive functionality to websites.
              </p>

              <div className="progress mt-3">
                <div className="progress-bar" style={{ width: "91%" }}>
                  91%
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="skill-card p-4 text-center">
              <div className="skill-icon mb-3">
                ⚛️
              </div>

              <h3 className="text-white">React</h3>

              <p className="text-light opacity-75">
                Developing modern and reusable UI components.
              </p>

              <div className="progress mt-3">
                <div className="progress-bar" style={{ width: "100%" }}>
                  100%
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="skill-card p-4 text-center">
              <div className="skill-icon mb-3">
                🅱️
              </div>

              <h3 className="text-white">Bootstrap</h3>

              <p className="text-light opacity-75">
                Creating responsive layouts using Bootstrap.
              </p>

              <div className="progress mt-3">
                <div className="progress-bar" style={{ width: "90%" }}>
                  90%
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="skill-card p-4 text-center">
              <div className="skill-icon mb-3">
                 💠
              </div>

              <h3 className="text-white">C++</h3>

              <p className="text-light opacity-75">
                Learning OOP and logic building.
              </p>

              <div className="progress mt-3">
                <div className="progress-bar" style={{ width: "83%" }}>
                  83%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;


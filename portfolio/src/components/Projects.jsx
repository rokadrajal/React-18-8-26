import project1 from "../assets/Project1.png"
import project2 from "../assets/Project2.png"
import project3 from "../assets/Project3.png"
import project4 from "../assets/Project4.png"
import project5 from "../assets/Project5.png"
import project6 from "../assets/Project6.png"

function Project() {
  return (
    <section className="project-section">
      <div className="container">

        <div className="text-center mb-5">
          <p className="text-info fs-5 mb-2">My Work</p>

          <h1 className="display-5 fw-bold text-white">
            Projects
          </h1>

          <p className="text-light opacity-75">
            Here are some projects I have created using modern web technologies.
          </p>
        </div>

        <div className="row g-4 row-gap-1">

          <div className="col-md-6 col-lg-4">
            <div className="project-card h-100 p-4 rounded-4">

              <div className="project-icon mb-3">
                <img className="project rounded-top-4" src={project1} alt="" />
              </div>

              <h3 className="text-white fw-bold">
                Car Collaction
              </h3>

              <p className="text-light opacity-75">
                A modern and responsive personal portfolio website
                created using  HTML , CSS React and Bootstrap.
              </p>

              <div className="mb-4">
                <span className="badge bg-primary me-2">HTML</span>
                <span className="badge bg-info text-dark me-2">CSS</span>
                <span className="badge bg-secondary">React.js</span>
              </div>

              <button className="btn btn-outline-light d-flex justify-content-center">
                View Project
              </button>

            </div>
          </div>


          <div className="col-md-6 col-lg-4">
            <div className="project-card h-100 p-4 rounded-4">

             <div className="project-icon mb-3">
                <img className="project rounded-top-4" src={project2} alt="" />
              </div>
              <h3 className="text-white fw-bold">
                E-Commerce Website
              </h3>

              <p className="text-light opacity-75">
                An attractive shopping website with product sections,
                responsive design and user-friendly interface.
              </p>

              <div className="mb-4">
                <span className="badge bg-primary me-2">HTML</span>
                <span className="badge bg-warning text-dark me-2">CSS</span>
                <span className="badge bg-info text-dark">JavaScript</span>
              </div>

              <button className="btn btn-outline-light">
                View Project
              </button>

            </div>
          </div>


          <div className="col-md-6 col-lg-4">
            <div className="project-card h-100 p-4 rounded-4">

             <div className="project-icon mb-3">
                <img className="project rounded-top-4" src={project3} alt="" />
              </div>

              <h3 className="text-white fw-bold">
                Weather API
              </h3>

              <p className="text-light opacity-75">
                A responsive weather application that shows real-time weather information for different cities with dynamic weather backgrounds.
              </p>

              <div className="mb-4">
                <span className="badge bg-primary me-2">HTML</span>
                <span className="badge bg-success me-2">CSS</span>
                <span className="badge bg-info text-dark">JavaScript</span>
              </div>

              <button className="btn btn-outline-light">
                View Project
              </button>

            </div>
          </div>


          <div className="col-md-6 col-lg-4">
            <div className="project-card h-100 p-4 rounded-4">

             <div className="project-icon mb-3">
                <img className="project rounded-top-4" src={project4} alt="" />
              </div>
              <h3 className="text-white fw-bold">
                Harmony With Horses
              </h3>

              <p className="text-light opacity-75">
                A clean and responsive horse farm website built with HTML, CSS and Bootstrap, featuring services, gallery, testimonials and contact sections.
              </p>

              <div className="mb-4">
                <span className="badge bg-primary me-2">HTML</span>
                <span className="badge bg-warning text-dark me-2">CSS</span>
                <span className="badge bg-info text-dark">Bootstrap</span>
              </div>

              <button className="btn btn-outline-light">
                View Project
              </button>

            </div>
          </div>


          <div className="col-md-6 col-lg-4">
            <div className="project-card h-100 p-4 rounded-4">

             <div className="project-icon mb-3">
                <img className="project rounded-top-4" src={project5} alt="" />
              </div>

              <h3 className="text-white fw-bold">
                Empower Your Health 
              </h3>

              <p className="text-light opacity-75">
                A responsive nutrition website built with HTML, CSS and Bootstrap, featuring nutrition plans, testimonials, FAQs and contact sections.
              </p>

              <div className="mb-4">
                <span className="badge bg-primary me-2">HTML</span>
                <span className="badge bg-success me-2">CSS</span>
                <span className="badge bg-info text-dark">Bootstrap</span>
              </div>

              <button className="btn btn-outline-light">
                View Project
              </button>

            </div>
          </div>


          <div className="col-md-6 col-lg-4">
            <div className="project-card h-100 p-4 rounded-4">

             <div className="project-icon mb-3">
                <img className="project rounded-top-4" src={project6} alt="" />
              </div>
              <h3 className="text-white fw-bold">
                Better Farming
              </h3>

              <p className="text-light opacity-75">
                A clean and responsive agriculture website built using HTML, CSS and Bootstrap, featuring farming services, testimonials and a contact section.
              </p>

              <div className="mb-4">
                <span className="badge bg-primary me-2">HTML</span>
                <span className="badge bg-info me-2 text-dark">CSS</span>
                <span className="badge bg-secondary ">Bootstrap</span>
              </div>

              <button className="btn btn-outline-light">
                View Project
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Project;
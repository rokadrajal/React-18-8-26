import "./App.css"
import img1 from "./assets/image1.png"
import img2 from "./assets/image2.png"
import img3 from "./assets/image3.png"
import img4 from "./assets/image4.png"
import certi1 from "./assets/certificate1.png"
import certi2 from "./assets/certificate2.png"
import certi3 from "./assets/certificate3.png"
import certi4 from "./assets/certificate4.png"
import project1 from "./assets/Screenshot1.png"
import project2 from "./assets/Screenshot2.png"
import project3 from "./assets/Screenshot3.png"
import project4 from "./assets/Screenshot4.png"
import project5 from "./assets/Screenshot5.png"
import project6 from "./assets/Screenshot6.png"
import insta from "./assets/instagram.png"
import { MdEmail } from "react-icons/md"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { LuSquareArrowOutUpRight } from "react-icons/lu"

function App() {
  return (
    <>
      <header className="header d-flex justify-content-center fixed-top">
        <nav className="container d-flex gap-5 align-items-center border rounded-4 w-50 mt-3 position-absolute justify-content-center p-2">
          <div className="fs-3 fw-bolder text-white">Portfolio</div>
          <div>
            <ul className="list-1 list-unstyled d-flex gap-4 m-0  ">
              <li><a className=" text-decoration-none" href="#Home">Home</a></li>
              <li><a className=" text-decoration-none" href="#About">About</a></li>
              <li><a className=" text-decoration-none" href="#Skill">Skill</a></li>
              <li><a className=" text-decoration-none" href="#Certificate">Certificate</a></li>
              <li><a className=" text-decoration-none" href="#Projects">Projects</a></li>
              <li><a className=" text-decoration-none " href="#Contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <button className="btn-1 rounded-5 border-0 p-1 py-2 px-4 text-white fw-bold">Hire Me</button>
          </div>
        </nav>
      </header>

      <div id="Home" className="home d-flex align-items-center">
        <main className="container d-flex gap-5">
          <div className="col-xxl-8 px-4 py-5 flex-grow-1 d-flex flex-column gap-3 align-self-center">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6 flex-grow-1">
                <img src={img1} className="img-1 d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
              </div>
              <div className="col-lg-6">
                <ul className="d-flex list-unstyled gap-3 align-items-center">
                  <li><img className="insta" src={insta} alt="" /></li>
                  <li><img className="facebook" src="https://static.vecteezy.com/system/resources/thumbnails/018/930/698/small/facebook-logo-facebook-icon-transparent-free-png.png" alt="" /></li>
                  <li><img className="linkedin" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" alt="" /></li>
                  <li><img className="github" src="https://cdn.iconscout.com/icon/free/png-256/free-github-logo-icon-svg-download-png-8630395.png?f=webp" alt="" /></li>
                </ul>
                <h1 className="text-white display-2 fw-bold">Hi, I'm <span style={{color:"#ff9800"}}>Rajal</span></h1>
                <p className=" pero ">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Exercitationem obcaecati magnam saepe sit, est dolorem
                  aliquid vel et iusto alias dolorum consequatur ipsum
                  maiores aperiam reiciendis, nostrum asperiores facilis
                  placeat.</p>
                <div className="d-grid gap-3 d-md-flex justify-content-md-start  mt-5">
                  <button type="button" className="btn-2 rounded-5 border-0 p-2 py-3 px-5 text-white fw-bold">Download CV</button>
                  <button type="button" className="btn-3 rounded-5 p-2 py-3 px-5 text-white fw-bold"><MdEmail size={"20px"} /> Contact Me</button>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>

      <div id="About" className="about d-flex align-items-center">
        <section className="container d-flex ">
          <div className="col-xxl-8 px-4 py-5 flex-grow-1 d-flex">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5 d-flex flex-column">
              <div className="col-lg-6 d-flex flex-column  align-items-start gap-4">
                <h1 className="display-2 fw-bold lh-1 mb-3">About Me</h1>
                <p className="text-light fs-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quaerat similique nobis, nam, laborum consectetur, molestias doloremque excepturi sed sequi illo reprehenderit! Incidunt nesciunt quo nemo. </p>
                <div className="d-flex text-center gap-5">
                  <aside className="flex-grow-1 d-flex flex-column">
                    <span className="h2">5+</span>
                    <span className="text-white">Education</span>
                  </aside>
                  <aside className="flex-grow-1 d-flex flex-column">
                    <span className="h2">10+</span>
                    <span className="text-white">Years Experience</span>
                  </aside>
                  <aside className="flex-grow-1 d-flex flex-column">
                    <span className="h2">100+</span>
                    <span className="text-white">Projects Completed</span>
                  </aside>
                </div>
                <div className="d-flex">
                  <button type="button" className="btn-4 p-2 py-2 px-4 text-white fw-bold rounded-5 w-3 mt-3">Learn More</button>
                </div>
              </div>
              <div className="col-10 col-sm-8 col-lg-6 flex-grow-1">
                <img src={img2} className="img-2 d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div id="Skill" className="skill d-flex flex-column justify-content-center">
        <div className="container text-center d-flex flex-column gap-3">
          <div>
            <h1 className="text-light">My <span style={{color:"#ff9800"}}>Skill</span></h1>
            <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum</p>
          </div>

          <div>
            <div className="d-flex gap-3 justify-content-center">
              <div className="performance col-3">
                <aside className="d-flex align-items-center gap-2">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/3840px-HTML5_Badge.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" alt="" />
                  <p className="text-light m-0 fw-bold fs-5">HTML</p>
                </aside>
                <aside className="d-flex  align-items-center justify-content-between">
                  <p className="text-light m-0 ">Proficiency</p>
                  <span>90.48%</span>
                </aside>
                <aside className="progress rounded-5 ">
                  <div className="progressBar bg-warning " style={{ width: "90.48%" }}></div>
                </aside>
                <aside className="border-bottom"></aside>
                <aside className="skill-line">
                  <div></div>
                </aside>
              </div>

              <div className="performance col-3">
                <aside className="d-flex align-items-center gap-2">
                  <img src="https://juststickers.in/wp-content/uploads/2014/05/CSS3-Mark-Shape-Cut.png" alt="" />
                  <p className="text-light m-0 fw-bold fs-5">CSS</p>
                </aside>
                <aside className="d-flex  align-items-center justify-content-between">
                  <p className="text-light m-0 ">Proficiency</p>
                  <span>90.48%</span>
                </aside>
                <aside className="progress rounded-5 ">
                  <div className="progressBar bg-primary " style={{ width: "90.48%" }}></div>
                </aside>
                <aside className="border-bottom"></aside>
                <aside className="skill-line">
                  <div></div>
                </aside>
              </div>

              <div className="performance col-3 ">
                <aside className="d-flex align-items-center gap-2">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" alt="" />
                  <p className="text-light m-0 fw-bold fs-5">C</p>
                </aside>
                <aside className="d-flex  align-items-center justify-content-between">
                  <p className="text-light m-0 ">Proficiency</p>
                  <span>91.67%</span>
                </aside>
                <aside className="progress rounded-5 ">
                  <div className="progressBar bg-warning " style={{ width: "91.67%" }}></div>
                </aside>
                <aside className="border-bottom"></aside>
                <aside className="skill-line">
                  <div></div>
                </aside>
              </div>
            </div>

            <div className="d-flex gap-3 justify-content-center">
              <div className="performance col-3">
                <aside className="d-flex align-items-center gap-2">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/330px-ISO_C%2B%2B_Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20170928190710" alt="" />

                  <p className="text-light m-0 fw-bold fs-5">C++</p>
                </aside>
                <aside className="d-flex  align-items-center justify-content-between">
                  <p className="text-light m-0 ">Proficiency</p>
                  <span>82.86%</span>
                </aside>
                <aside className="progress rounded-5 ">
                  <div className="progressBar bg-primary " style={{ width: "82.86%" }}></div>
                </aside>
                <aside className="border-bottom"></aside>
                <aside className="skill-line">
                  <div></div>
                </aside>
              </div>

              <div className="performance col-3">
                <aside className="d-flex align-items-center gap-2">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" alt="" />
                  <p className="text-light m-0 fw-bold fs-5">JavaScript</p>
                </aside>
                <aside className="d-flex  align-items-center justify-content-between">
                  <p className="text-light m-0 ">Proficiency</p>
                  <span>90.67%</span>
                </aside>
                <aside className="progress rounded-5 ">
                  <div className="progressBar bg-warning " style={{ width: "90.67%" }}></div>
                </aside>
                <aside className="border-bottom"></aside>
                <aside className="skill-line">
                  <div></div>
                </aside>
              </div>

              <div className="performance col-3">
                <aside className="d-flex align-items-center gap-2">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/960px-React-icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" alt="" />
                  <p className="text-light m-0 fw-bold fs-5">React Js</p>
                </aside>
                <aside className="d-flex  align-items-center justify-content-between">
                  <p className="text-light m-0 ">Proficiency</p>
                  <span>100%</span>
                </aside>
                <aside className="progress rounded-5 ">
                  <div className="progressBar bg-primary " style={{ width: "100%" }}></div>
                </aside>
                <aside className="border-bottom"></aside>
                <aside className="skill-line">
                  <div></div>
                </aside>
              </div>
            </div>
          </div>
        </div>


      </div>

      <div id="Certificate" className="certificate">
        <div className="container d-flex justify-content-center">
          <div className="d-flex flex-column gap-5">
            <div>
              <p style={{ color: "#ff8c00", margin: "0px" }}>ACHIEVEMENTS</p>
              <h1 className="text-light">Certifications & Badges</h1>
            </div>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex  gap-3">
                <img className="certi certi-1" src={certi1} alt="" />
                <img className="certi certi-2 " src={certi2} alt="" />
              </div>
              <div className="d-flex  gap-3">
                <img className="certi certi-3" src={certi3} alt="" />
                <img className="certi certi-4 " src={certi4} alt="" />
              </div>
            </div>
          </div>
          <div>
            <img className="img-3" src={img3} alt="" />
          </div>
        </div>
      </div>

      <div id="Projects" className="projects ">
        <div className="container  d-flex flex-column gap-4">
          <div>
            <h1 className="text-light text-center">My <span style={{color:"#ff9800"}}>Projects</span></h1>
            <p className="text-light text-center">A Showcase of my recent work</p>
          </div>

          <div className="d-flex flex-column gap-4">
            <div className=" d-flex gap-4 justify-content-center">
              <div className="project-1 rounded-4">
                <img className="project rounded-top-4" src={project1} alt="" />
                <div className="justify-content-start p-3 d-flex flex-column gap-1">
                  <h4 className="text-light">Car Collaction</h4>
                  <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <div className="d-flex flex-column gap-3">
                    <div className="btns d-flex gap-3 ">
                      <button className="btn-5 border-0 px-3 py-2 rounded-5 text-light">Html</button>
                      <button className="btn-5 border-0 px-3 py-1 rounded-5 text-light">Css</button>
                      <button className="btn-5 border-0 px-3 py-1 rounded-5 text-light">React Js</button>
                    </div>
                    <div className="d-flex gap-2">
                      <button className="btn-5 col  border-0 px-5 py-2 rounded-2 text-white"><FaGithub /> Code</button>
                      <button className="btn-6 col border-0 px-5 py-2 rounded-2 text-white"><LuSquareArrowOutUpRight />Demo</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-2 rounded-4">
                <img className="project rounded-top-4" src={project2} alt="" />
                <div className="justify-content-start p-3 d-flex flex-column gap-1">
                  <h4 className="text-light">E-commerce Platform</h4>
                  <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <div className="d-flex flex-column gap-3">
                    <div className="btns d-flex gap-3 ">
                      <button className="btn-5 border-0 px-3 py-2 rounded-5 text-light">Html</button>
                      <button className="btn-5 border-0 px-3 py-1 rounded-5 text-light">Css</button>
                      <button className="btn-5 border-0 px-3 py-1 rounded-5 text-light">JavaScript</button>
                    </div>
                    <div className="d-flex gap-2">
                      <button className="btn-5 col  border-0 px-5 py-2 rounded-2 text-white"><FaGithub /> Code</button>
                      <button className="btn-6 col border-0 px-5 py-2 rounded-2 text-white"><LuSquareArrowOutUpRight />Demo</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-3 rounded-4">
                <img className="project rounded-top-4" src={project3} alt="" />
                <div className="justify-content-start p-3 d-flex flex-column gap-1">
                  <h4 className="text-light">Weather</h4>
                  <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <div className="d-flex flex-column gap-3">
                    <div className="btns d-flex gap-3 ">
                      <button className="btn-5 border-0 px-3 py-2 rounded-5 text-light">Html</button>
                      <button className="btn-5 border-0 px-3 py-1 rounded-5 text-light">Css</button>
                      <button className="btn-5 border-0 px-3 py-1 rounded-5 text-light">JavaScript</button>
                    </div>
                    <div className="d-flex gap-2">
                      <button className="btn-5 col  border-0 px-5 py-2 rounded-2 text-white"><FaGithub /> Code</button>
                      <button className="btn-6 col border-0 px-5 py-2 rounded-2 text-white"><LuSquareArrowOutUpRight />Demo</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className=" d-flex gap-4 justify-content-center">
              <div className="project-4 rounded-4">
                <img className="project rounded-top-4" src={project4} alt="" />
                <div className="justify-content-start p-3 d-flex flex-column gap-1">
                  <h4 className="text-light">Harmony With Horses</h4>
                  <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <div className="d-flex flex-column gap-3">
                    <div className="btns d-flex gap-3 ">
                      <button className="btn-5 border-0 px-3 py-2 rounded-5 text-light">Html</button>
                      <button className="btn-5 border-0 px-3 py-1 rounded-5 text-light">Css</button>
                      <button className="btn-5 border-0 px-3 py-1 rounded-5 text-light">Bootstrap</button>
                    </div>
                    <div className="d-flex gap-2">
                      <button className="btn-5 col  border-0 px-5 py-2 rounded-2 text-white"><FaGithub /> Code</button>
                      <button className="btn-6 col border-0 px-5 py-2 rounded-2 text-white"><LuSquareArrowOutUpRight />Demo</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-5 rounded-4">
                <img className="project rounded-top-4" src={project5} alt="" />
                <div className="justify-content-start p-3 d-flex flex-column gap-1">
                  <h4 className="text-light">Empower Your Health </h4>
                  <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <div className="d-flex flex-column gap-3">
                    <div className="btns d-flex gap-3 ">
                      <button className="btn-5 border-0 px-3 py-2 rounded-5 text-light">Html</button>
                      <button className="btn-5 border-0 px-3 py-1 rounded-5 text-light">Css</button>
                      <button className="btn-5 border-0 px-3 py-1 rounded-5 text-light">Bootstrap</button>
                    </div>
                    <div className="d-flex gap-2">
                      <button className="btn-5 col  border-0 px-5 py-2 rounded-2 text-white"><FaGithub /> Code</button>
                      <button className="btn-6 col border-0 px-5 py-2 rounded-2 text-white"><LuSquareArrowOutUpRight />Demo</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-6 rounded-4">
                <img className="project rounded-top-4" src={project6} alt="" />
                <div className="justify-content-start p-3 d-flex flex-column gap-1">
                  <h4 className="text-light">Better Farming</h4>
                  <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  <div className="d-flex flex-column gap-3">
                    <div className="btns d-flex gap-3 ">
                      <button className="btn-5 border-0 px-3 py-2 rounded-5 text-light">Html</button>
                      <button className="btn-5 border-0 px-3 py-1 rounded-5 text-light">Css</button>
                      <button className="btn-5 border-0 px-3 py-1 rounded-5 text-light">Bootstrap</button>
                    </div>
                    <div className="d-flex gap-2">
                      <button className="btn-5 col  border-0 px-5 py-2 rounded-2 text-white"><FaGithub /> Code</button>
                      <button className="btn-6 col border-0 px-5 py-2 rounded-2 text-white"><LuSquareArrowOutUpRight />Demo</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center ">
            <button className="btn-7 text-light border-0 p-3 rounded-5"><FaGithub /> View All Projects <LuSquareArrowOutUpRight /></button>
          </div>
        </div>
      </div>

      <div id="Contact" className="contact d-flex align-items-center">
        <main className="container d-flex gap-5">
          <div className="col-xxl-8 px-4 py-5 flex-grow-1 d-flex flex-column gap-3 align-self-center">
            <div>
              <div className="d-flex gap-3 justify-content-center">
                <h1 className="text-light">Get In</h1>
                <h1 style={{ color: "#ff9800" }}>Touch</h1>
              </div>
              <p className="text-light text-center">Let's discuss your project</p>
            </div>
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">

              <div className="info col-lg-6 d-flex flex-column gap-3 p-3">
                <div className="d-flex gap-3">
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Last Name" />
                </div>
                <input type="text" placeholder="Email Address" />
                <input type="text" placeholder="Phone Number" />
                <textarea name="text" id="" placeholder="Your Message" rows="5"></textarea>
                <button className="btn-8 border-0 rounded-2 text-light py-2 fw-bold">Send Message</button>

              </div>
              <div className="col-10 col-sm-8 col-lg-6 flex-grow-1">
                <img src={img4} className="img-4 d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
              </div>

            </div>
          </div>
        </main>
      </div>

      <footer>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center p-2">
            <div className="d-flex flex-column gap-2">
              <h3 className="text-light m-0">Portfolio</h3>
              <p className="text-secondary m-0">Full Stack Developer</p>
            </div>
            <div className="d-flex gap-4 ">
              <div className=" social rounded-circle d-flex align-items-center justify-content-center">
                <FaGithub className="git"/>
              </div>
              <div className=" social rounded-circle d-flex align-items-center justify-content-center">
                <FaLinkedin className="git"/>
              </div>
              <div className="social rounded-circle  d-flex align-items-center justify-content-center">
                <FaTwitter className="git"/>
              </div>
            </div>
            <div>
              <p className="text-light m-0">@ 2026 Made with by ❤️ Rajal</p>
            </div>
          </div>

        </div>
      </footer>
    </>

  
  )
}


// function App() {
//   return (
//     <>
//       <header className="header d-flex justify-content-center fixed-top">
//         <nav className="container d-flex flex-column flex-lg-row gap-2 gap-lg-5 align-items-center border rounded-4 w-100 mt-3 position-absolute justify-content-center p-2">
//           <div className="fs-3 fw-bolder text-white">Portfolio</div>
//           <div>
//             <ul className="list-1 list-unstyled d-flex flex-wrap justify-content-center gap-2 gap-md-4 m-0">
//               <li><a className=" text-decoration-none" href="#Home">Home</a></li>
//               <li><a className=" text-decoration-none" href="#About">About</a></li>
//               <li><a className=" text-decoration-none" href="#Skill">Skill</a></li>
//               <li><a className=" text-decoration-none" href="#Certificate">Certificate</a></li>
//               <li><a className=" text-decoration-none" href="#Projects">Projects</a></li>
//               <li><a className=" text-decoration-none " href="#Contact">Contact</a></li>
//             </ul>
//           </div>
//           <div>
//             <button className="btn-1 rounded-5 border-0 p-1 py-2 px-4 text-white fw-bold">Hire Me</button>
//           </div>
//         </nav>
//       </header>

//       <div id="Home" className="home d-flex align-items-center">
//         <main className="container d-flex flex-column flex-lg-row gap-3 gap-lg-5">
//           <div className="col-xxl-8 px-4 py-5 flex-grow-1 d-flex flex-column gap-3 align-self-center">
//             <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
//               <div className="col-10 col-sm-8 col-lg-6 flex-grow-1">
//                 <img src={img1} className="img-1 d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
//               </div>
//               <div className="col-lg-6">
//                 <ul className="d-flex list-unstyled gap-3 align-items-center">
//                   <li><img className="insta" src={insta} alt="" /></li>
//                   <li><img className="facebook" src="https://static.vecteezy.com/system/resources/thumbnails/018/930/698/small/facebook-logo-facebook-icon-transparent-free-png.png" alt="" /></li>
//                   <li><img className="linkedin" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" alt="" /></li>
//                   <li><img className="github" src="https://cdn.iconscout.com/icon/free/png-256/free-github-logo-icon-svg-download-png-8630395.png?f=webp" alt="" /></li>
//                 </ul>
//                 <h1 className="text-white display-2 fw-bold">Hi, I'm <span style={{color:"#ff9800"}}>Rajal</span></h1>
//                 <p className=" pero ">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                   Exercitationem obcaecati magnam saepe sit, est dolorem
//                   aliquid vel et iusto alias dolorum consequatur ipsum
//                   maiores aperiam reiciendis, nostrum asperiores facilis
//                   placeat.</p>
//                 <div className="d-grid gap-3 d-md-flex justify-content-md-start  mt-5">
//                   <button type="button" className="btn-2 rounded-5 border-0 p-2 py-3 px-5 text-white fw-bold">Download CV</button>
//                   <button type="button" className="btn-3 rounded-5 p-2 py-3 px-5 text-white fw-bold"><MdEmail size={"20px"} /> Contact Me</button>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </main>
//       </div>

//       <div id="About" className="about d-flex align-items-center">
//         <section className="container d-flex ">
//           <div className="col-xxl-8 px-4 py-5 flex-grow-1 d-flex">
//             <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
//               <div className="col-lg-6 d-flex flex-column  align-items-start gap-4">
//                 <h1 className="display-2 fw-bold lh-1 mb-3">About Me</h1>
//                 <p className="text-light fs-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quaerat similique nobis, nam, laborum consectetur, molestias doloremque excepturi sed sequi illo reprehenderit! Incidunt nesciunt quo nemo. </p>
//                 <div className="d-flex flex-wrap text-center gap-3 gap-md-5">
//                   <aside className="flex-grow-1 d-flex flex-column">
//                     <span className="h2">5+</span>
//                     <span className="text-white">Education</span>
//                   </aside>
//                   <aside className="flex-grow-1 d-flex flex-column">
//                     <span className="h2">10+</span>
//                     <span className="text-white">Years Experience</span>
//                   </aside>
//                   <aside className="flex-grow-1 d-flex flex-column">
//                     <span className="h2">100+</span>
//                     <span className="text-white">Projects Completed</span>
//                   </aside>
//                 </div>
//                 <div className="d-flex">
//                   <button type="button" className="btn-4 p-2 py-2 px-4 text-white fw-bold rounded-5 w-3 mt-3">Learn More</button>
//                 </div>
//               </div>
//               <div className="col-10 col-sm-8 col-lg-6 flex-grow-1">
//                 <img src={img2} className="img-2 d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>

//       <div id="Skill" className="skill d-flex flex-column justify-content-center">
//         <div className="container text-center d-flex flex-column gap-3">
//           <div>
//             <h1 className="text-light">My <span style={{color:"#ff9800"}}>Skill</span></h1>
//             <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum</p>
//           </div>

//           <div>
//             <div className="d-flex flex-wrap gap-3 justify-content-center">
//               <div className="performance col-12 col-md-3">
//                 <aside className="d-flex align-items-center gap-2">
//                   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/3840px-HTML5_Badge.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" alt="" />
//                   <p className="text-light m-0 fw-bold fs-5">HTML</p>
//                 </aside>
//                 <aside className="d-flex  align-items-center justify-content-between">
//                   <p className="text-light m-0 ">Proficiency</p>
//                   <span>90.48%</span>
//                 </aside>
//                 <aside className="progress rounded-5 ">
//                   <div className="progressBar bg-warning " style={{ width: "90.48%" }}></div>
//                 </aside>
//                 <aside className="border-bottom"></aside>
//                 <aside className="skill-line">
//                   <div></div>
//                 </aside>
//               </div>

//               <div className="performance col-12 col-md-3">
//                 <aside className="d-flex align-items-center gap-2">
//                   <img src="https://juststickers.in/wp-content/uploads/2014/05/CSS3-Mark-Shape-Cut.png" alt="" />
//                   <p className="text-light m-0 fw-bold fs-5">CSS</p>
//                 </aside>
//                 <aside className="d-flex  align-items-center justify-content-between">
//                   <p className="text-light m-0 ">Proficiency</p>
//                   <span>90.48%</span>
//                 </aside>
//                 <aside className="progress rounded-5 ">
//                   <div className="progressBar bg-primary " style={{ width: "90.48%" }}></div>
//                 </aside>
//                 <aside className="border-bottom"></aside>
//                 <aside className="skill-line">
//                   <div></div>
//                 </aside>
//               </div>

//               <div className="performance col-12 col-md-3 ">
//                 <aside className="d-flex align-items-center gap-2">
//                   <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" alt="" />
//                   <p className="text-light m-0 fw-bold fs-5">C</p>
//                 </aside>
//                 <aside className="d-flex  align-items-center justify-content-between">
//                   <p className="text-light m-0 ">Proficiency</p>
//                   <span>91.67%</span>
//                 </aside>
//                 <aside className="progress rounded-5 ">
//                   <div className="progressBar bg-warning " style={{ width: "91.67%" }}></div>
//                 </aside>
//                 <aside className="border-bottom"></aside>
//                 <aside className="skill-line">
//                   <div></div>
//                 </aside>
//               </div>
//             </div>

//             <div className="d-flex flex-wrap gap-3 justify-content-center">
//               <div className="performance col-12 col-md-3">
//                 <aside className="d-flex align-items-center gap-2">
//                   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/330px-ISO_C%2B%2B_Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20170928190710" alt="" />

//                   <p className="text-light m-0 fw-bold fs-5">C++</p>
//                 </aside>
//                 <aside className="d-flex  align-items-center justify-content-between">
//                   <p className="text-light m-0 ">Proficiency</p>
//                   <span>82.86%</span>
//                 </aside>
//                 <aside className="progress rounded-5 ">
//                   <div className="progressBar bg-primary " style={{ width: "82.86%" }}></div>
//                 </aside>
//                 <aside className="border-bottom"></aside>
//                 <aside className="skill-line">
//                   <div></div>
//                 </aside>
//               </div>

//               <div className="performance col-12 col-md-3">
//                 <aside className="d-flex align-items-center gap-2">
//                   <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" alt="" />
//                   <p className="text-light m-0 fw-bold fs-5">JavaScript</p>
//                 </aside>
//                 <aside className="d-flex  align-items-center justify-content-between">
//                   <p className="text-light m-0 ">Proficiency</p>
//                   <span>90.67%</span>
//                 </aside>
//                 <aside className="progress rounded-5 ">
//                   <div className="progressBar bg-warning " style={{ width: "90.67%" }}></div>
//                 </aside>
//                 <aside className="border-bottom"></aside>
//                 <aside className="skill-line">
//                   <div></div>
//                 </aside>
//               </div>

//               <div className="performance col-12 col-md-3">
//                 <aside className="d-flex align-items-center gap-2">
//                   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/960px-React-icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" alt="" />
//                   <p className="text-light m-0 fw-bold fs-5">React Js</p>
//                 </aside>
//                 <aside className="d-flex  align-items-center justify-content-between">
//                   <p className="text-light m-0 ">Proficiency</p>
//                   <span>100%</span>
//                 </aside>
//                 <aside className="progress rounded-5 ">
//                   <div className="progressBar bg-primary " style={{ width: "100%" }}></div>
//                 </aside>
//                 <aside className="border-bottom"></aside>
//                 <aside className="skill-line">
//                   <div></div>
//                 </aside>
//               </div>
//             </div>
//           </div>
//         </div>


//       </div>

//       <div id="Certificate" className="certificate ">
//         <div className="container d-flex flex-column flex-lg-row justify-content-center align-items-center">
//           <div className="d-flex flex-column gap-5">
//             <div>
//               <p style={{ color: "#ff8c00", margin: "0px" }}>ACHIEVEMENTS</p>
//               <h1 className="text-light">Certifications & Badges</h1>
//             </div>
//             <div className="d-flex flex-column gap-3">
//               <div className="d-flex flex-wrap justify-content-center gap-3">
//                 <img className="certi certi-1" src={certi1} alt="" />
//                 <img className="certi certi-2 " src={certi2} alt="" />
//               </div>
//               <div className="d-flex flex-wrap justify-content-center gap-3">
//                 <img className="certi certi-3" src={certi3} alt="" />
//                 <img className="certi certi-4 " src={certi4} alt="" />
//               </div>
//             </div>
//           </div>
//           <div>
//             <img className="img-3" src={img3} alt="" />
//           </div>
//         </div>
//       </div>

//       <div id="Projects" className="projects ">
//         <div className="container  d-flex flex-column gap-4">
//           <div>
//             <h1 className="text-light text-center">My <span style={{color:"#ff9800"}}>Projects</span></h1>
//             <p className="text-light text-center">A Showcase of my recent work</p>
//           </div>

//           <div className="d-flex flex-column gap-4">
//             <div className=" d-flex flex-wrap gap-4 justify-content-center">
//               <div className="project-1 rounded-4 col-12 col-md-5 col-lg-3 w-100">
//                 <img className="project rounded-top-4 img-fluid w-100" src={project1} alt="" />
//                 <div className="justify-content-start p-3 d-flex flex-column gap-1">
//                   <h4 className="text-light">Car Collaction</h4>
//                   <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                   <div className="d-flex flex-column gap-3">
//                     <div className="btns d-flex flex-wrap gap-2 ">
//                       <button className="btn-5 border-0 px-3 py-2 rounded-5 text-light">Html</button>
//                       <button className="btn-5 border-0 px-3 py-1 rounded-5 text-light">Css</button>
//                       <button className="btn-5 border-0 px-3 py-1 rounded-5 text-light">React Js</button>
//                     </div>
//                     <div className="d-flex gap-2">
//                       <button className="btn-5 col  border-0 px-5 py-2 rounded-2 text-white"><FaGithub /> Code</button>
//                       <button className="btn-6 col border-0 px-5 py-2 rounded-2 text-white"><LuSquareArrowOutUpRight />Demo</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="project-2 rounded-4 col-12 col-md-5 col-lg-3 w-100">
//                 <img className="project rounded-top-4 img-fluid w-100" src={project2} alt="" />
//                 <div className="justify-content-start p-3 d-flex flex-column gap-1">
//                   <h4 className="text-light">E-commerce Platform</h4>
//                   <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                   <div className="d-flex flex-column gap-3">
//                     <div className="btns d-flex flex-wrap gap-2">
//                       <button className="btn-5 border-0 px-3 py-2 rounded-5 text-light">Html</button>
//                       <button className="btn-5 border-0 px-3 py-1 rounded-5 text-light">Css</button>
//                       <button className="btn-5 border-0 px-3 py-1 rounded-5 text-light">JavaScript</button>
//                     </div>
//                     <div className="d-flex gap-2">
//                       <button className="btn-5 col  border-0 px-5 py-2 rounded-2 text-white"><FaGithub /> Code</button>
//                       <button className="btn-6 col border-0 px-5 py-2 rounded-2 text-white"><LuSquareArrowOutUpRight />Demo</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="project-3 rounded-4 col-12 col-md-5 col-lg-3 w-100">
//                 <img className="project rounded-top-4 img-fluid w-100" src={project3} alt="" />
//                 <div className="justify-content-start p-3 d-flex flex-column gap-1">
//                   <h4 className="text-light">Weather</h4>
//                   <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                   <div className="d-flex flex-column gap-3">
//                     <div className="btns d-flex flex-wrap gap-2">
//                       <button className="btn-5 border-0 px-3 py-2 rounded-5 text-light">Html</button>
//                       <button className="btn-5 border-0 px-3 py-1 rounded-5 text-light">Css</button>
//                       <button className="btn-5 border-0 px-3 py-1 rounded-5 text-light">JavaScript</button>
//                     </div>
//                     <div className="d-flex gap-2">
//                       <button className="btn-5 col  border-0 px-5 py-2 rounded-2 text-white"><FaGithub /> Code</button>
//                       <button className="btn-6 col border-0 px-5 py-2 rounded-2 text-white"><LuSquareArrowOutUpRight />Demo</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//             </div>
//             <div className=" d-flex flex-wrap gap-4 justify-content-center">
//               <div className="project-4 rounded-4 col-12 col-md-5 col-lg-3 w-100">
//                 <img className="project rounded-top-4 img-fluid w-100" src={project4} alt="" />
//                 <div className="justify-content-start p-3 d-flex flex-column gap-1">
//                   <h4 className="text-light">Harmony With Horses</h4>
//                   <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                   <div className="d-flex flex-column gap-3">
//                     <div className="btns d-flex flex-wrap gap-2 ">
//                       <button className="btn-5 border-0 px-3 py-2 rounded-5 text-light">Html</button>
//                       <button className="btn-5 border-0 px-3 py-1 rounded-5 text-light">Css</button>
//                       <button className="btn-5 border-0 px-3 py-1 rounded-5 text-light">Bootstrap</button>
//                     </div>
//                     <div className="d-flex gap-2">
//                       <button className="btn-5 col  border-0 px-5 py-2 rounded-2 text-white"><FaGithub /> Code</button>
//                       <button className="btn-6 col border-0 px-5 py-2 rounded-2 text-white"><LuSquareArrowOutUpRight />Demo</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="project-5 rounded-4 col-12 col-md-5 col-lg-3 w-100">
//                 <img className="project rounded-top-4 img-fluid w-100" src={project5} alt="" />
//                 <div className="justify-content-start p-3 d-flex flex-column gap-1">
//                   <h4 className="text-light">Empower Your Health </h4>
//                   <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                   <div className="d-flex flex-column gap-3">
//                     <div className="btns d-flex flex-wrap gap-2">
//                       <button className="btn-5 border-0 px-3 py-2 rounded-5 text-light">Html</button>
//                       <button className="btn-5 border-0 px-3 py-1 rounded-5 text-light">Css</button>
//                       <button className="btn-5 border-0 px-3 py-1 rounded-5 text-light">Bootstrap</button>
//                     </div>
//                     <div className="d-flex gap-2">
//                       <button className="btn-5 col  border-0 px-5 py-2 rounded-2 text-white"><FaGithub /> Code</button>
//                       <button className="btn-6 col border-0 px-5 py-2 rounded-2 text-white"><LuSquareArrowOutUpRight />Demo</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="project-6 rounded-4 col-12 col-md-5 col-lg-3 w-100">
//                 <img className="project rounded-top-4 img-fluid w-100" src={project6} alt="" />
//                 <div className="justify-content-start p-3 d-flex flex-column gap-1">
//                   <h4 className="text-light">Better Farming</h4>
//                   <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                   <div className="d-flex flex-column gap-3">
//                     <div className="btns d-flex flex-wrap gap-2">
//                       <button className="btn-5 border-0 px-3 py-2 rounded-5 text-light">Html</button>
//                       <button className="btn-5 border-0 px-3 py-1 rounded-5 text-light">Css</button>
//                       <button className="btn-5 border-0 px-3 py-1 rounded-5 text-light">Bootstrap</button>
//                     </div>
//                     <div className="d-flex gap-2">
//                       <button className="btn-5 col  border-0 px-5 py-2 rounded-2 text-white"><FaGithub /> Code</button>
//                       <button className="btn-6 col border-0 px-5 py-2 rounded-2 text-white"><LuSquareArrowOutUpRight />Demo</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="d-flex justify-content-center ">
//             <button className="btn-7 text-light border-0 p-3 rounded-5"><FaGithub /> View All Projects <LuSquareArrowOutUpRight /></button>
//           </div>
//         </div>
//       </div>

//       <div id="Contact" className="contact d-flex align-items-center">
//         <main className="container d-flex flex-column flex-lg-row gap-3 gap-lg-5">
//           <div className="col-xxl-8 px-4 py-5 flex-grow-1 d-flex flex-column gap-3 align-self-center">
//             <div>
//               <div className="d-flex gap-3 justify-content-center">
//                 <h1 className="text-light">Get In</h1>
//                 <h1 style={{ color: "#ff9800" }}>Touch</h1>
//               </div>
//               <p className="text-light text-center">Let's discuss your project</p>
//             </div>
//             <div className="row flex-lg-row-reverse align-items-center g-5 py-5">

//               <div className="info col-lg-6 d-flex flex-column gap-3 p-3">
//                 <div className="d-flex flex-column flex-md-row gap-3">
//                   <input type="text" placeholder="First Name" />
//                   <input type="text" placeholder="Last Name" />
//                 </div>
//                 <input type="text" placeholder="Email Address" />
//                 <input type="text" placeholder="Phone Number" />
//                 <textarea name="text" id="" placeholder="Your Message" rows="5"></textarea>
//                 <button className="btn-8 border-0 rounded-2 text-light py-2 fw-bold">Send Message</button>

//               </div>
//               <div className="col-10 col-sm-8 col-lg-6 flex-grow-1">
//                 <img src={img4} className="img-4 d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
//               </div>

//             </div>
//           </div>
//         </main>
//       </div>

//       <footer>
//         <div className="container">
//           <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 p-2">
//             <div className="d-flex flex-column gap-2">
//               <h3 className="text-light m-0">Portfolio</h3>
//               <p className="text-secondary m-0">Full Stack Developer</p>
//             </div>
//             <div className="d-flex gap-4 ">
//               <div className=" social rounded-circle d-flex align-items-center justify-content-center">
//                 <FaGithub className="git"/>
//               </div>
//               <div className=" social rounded-circle d-flex align-items-center justify-content-center">
//                 <FaLinkedin className="git"/>
//               </div>
//               <div className="social rounded-circle  d-flex align-items-center justify-content-center">
//                 <FaTwitter className="git"/>
//               </div>
//             </div>
//             <div>
//               <p className="text-light m-0">@ 2026 Made with by ❤️ Rajal</p>
//             </div>
//           </div>

//         </div>
//       </footer>
//     </>

  
//   )
// }

export default App

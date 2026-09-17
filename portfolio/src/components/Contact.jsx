function Contact() {
  return (
    <section className="contact-section py-5">
      <div className="container">

        <div className="text-center mb-5">
          <p className="text-info fs-5">Get In Touch</p>
          <h1 className="text-white fw-bold">Contact Me</h1>
        </div>

        <div className="row justify-content-center g-4">

          <div className="col-md-5">
            <div className="contact-card p-4">

              <h3 className="text-white mb-4">
                Let's Connect
              </h3>

              <p className="text-light opacity-75">
                Feel free to contact me for any project,
                collaboration or opportunity.
              </p>

              <p className="text-white mt-4">
                <b className="text-info">📧 Email:</b>
                <br />
                rokadrajal@gmail.com
              </p>

              <p className="text-white">
                <b className="text-info">📞 Phone:</b>
                <br />
                +91 12345 67890
              </p>

              <p className="text-white">
                <b className="text-info">📍 Location:</b>
                <br />
                Rajkot , Gujarat
              </p>

            </div>
          </div>

          <div className="col-md-7">
            <div className="contact-card p-4">

              <h3 className="text-white mb-4">
                Send Me a Message
              </h3>

              <input
                type="text"
                className="form-control mb-3"
                placeholder="Your Name"
              />

              <input
                type="email"
                className="form-control mb-3"
                placeholder="Your Email"
              />

              <input
                type="text"
                className="form-control mb-3"
                placeholder="Subject"
              />

              <textarea
                className="form-control mb-3"
                rows="5"
                placeholder="Your Message"
              ></textarea>

              <button className="btn btn-info px-4">
                Send Message
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;


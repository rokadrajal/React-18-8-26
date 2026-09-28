function Home() {
  return (
    <>
      {/* HOME */}
      <main id="home" className="home">
        <h1>Build Your Dream Website</h1>
        <p>Welcome to our website.</p>
      </main>

      {/* ABOUT */}
      <section id="about" className="about">
        <h1>About Us</h1>
        <p>
          We create modern and beautiful websites using
          modern web technologies.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="services">
        <h1>Our Services</h1>

        <div className="service-box">
          <div>
            <h2>💻 Web Development</h2>
            <p>We build modern websites.</p>
          </div>

          <div>
            <h2>🎨 UI Design</h2>
            <p>We create beautiful user interfaces.</p>
          </div>

          <div>
            <h2>⚛️ React Development</h2>
            <p>We build reusable React applications.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <h1>Contact Us</h1>

        <p>
          Have a question? Feel free to contact us.
        </p>

        <button>Contact Now</button>
      </section>
    </>
  );
}

export default Home;
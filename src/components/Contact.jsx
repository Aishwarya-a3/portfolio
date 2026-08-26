function Contact() {
  return (
    <section id="contact" className="section contact-section">

      <div className="section-title">
        <span>Contact</span>
        <h2>Let's Connect</h2>
      </div>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-intro">

          <h3>
            Have an opportunity or project in mind?
          </h3>

          <p>
            I'm always interested in learning, building new
            projects, and exploring opportunities where I can
            contribute my technical skills and grow as a
            Full Stack Developer.
          </p>

          <p>
            Feel free to reach out through any of the platforms
            below.
          </p>

        </div>


        {/* RIGHT SIDE */}
        <div className="contact-details">

          {/* EMAIL */}
          <a
            href="mailto:aishwaryabhandari282@gmail.com"
            className="contact-card"
          >
            <div className="contact-icon">
              @
            </div>

            <div>
              <span>Email</span>

              <strong>
                aishwaryabhandari282@gmail.com
              </strong>
            </div>

            <div className="contact-arrow">
              →
            </div>
          </a>


          {/* PHONE */}
          <a
            href="tel:7411465781"
            className="contact-card"
          >
            <div className="contact-icon">
              ☎
            </div>

            <div>
              <span>Phone</span>

              <strong>
                +91 74114 65781
              </strong>
            </div>

            <div className="contact-arrow">
              →
            </div>
          </a>


          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/aishwarya-bhandari-273b89331/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">
              in
            </div>

            <div>
              <span>LinkedIn</span>

              <strong>
                Aishwarya Bhandari
              </strong>
            </div>

            <div className="contact-arrow">
              →
            </div>
          </a>


          {/* GITHUB */}
          <a
            href="https://github.com/Aishwarya-a3"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">
              &lt;/&gt;
            </div>

            <div>
              <span>GitHub</span>

              <strong>
                View My GitHub
              </strong>
            </div>

            <div className="contact-arrow">
              →
            </div>
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;
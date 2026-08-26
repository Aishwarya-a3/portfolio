function Hero() {
  return (
    <section id="home" className="hero">

      {/* Decorative Background */}
      <div className="hero-decoration hero-decoration-one"></div>
      <div className="hero-decoration hero-decoration-two"></div>

      <div className="hero-inner">

        {/* ================= LEFT CONTENT ================= */}
        <div className="hero-content">

          {/* Availability Badge */}
          <div className="availability-badge">
            <span className="availability-dot"></span>
            Available for opportunities
          </div>

          {/* Greeting */}
          <p className="hero-greeting">
            Hello, I'm
          </p>

          {/* Name */}
          <h1>
            Aishwarya
            <span> Bhandari</span>
          </h1>

          {/* Role */}
          <h2>
            Full Stack Java Developer
          </h2>

          {/* Description */}
          <p className="hero-description">
            I build clean, scalable and user-focused web applications
            using Java, Spring Boot, React, JavaScript and SQL.
            I enjoy turning ideas into reliable software solutions.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">

            <a
              href="#projects"
              className="btn primary-btn"
            >
              View My Projects
              <span className="btn-arrow"></span>
            </a>

           <a
              href="/Aishwarya_Bhandari_Resume.pdf"
              download="Aishwarya_Bhandari_Resume.pdf"
              className="btn btn-secondary"
              >
               Download Resume 
              <span className="download-icon"></span>
            </a>

          </div>

          {/* Technologies */}
          <div className="hero-technologies">

            <span>Java</span>
            <span>Spring Boot</span>
            <span>React</span>
            <span>SQL</span>
            <span>JavaScript</span>

          </div>

        </div>


        {/* ================= RIGHT SIDE - PHOTO ================= */}
        <div className="hero-photo-container">

          {/* Decorative Ring */}
          <div className="hero-photo-ring"></div>

          {/* Main Photo */}
          <div className="hero-photo">

            <img
              src="/aishwarya.jpeg"
              alt="Aishwarya Bhandari"
            />

          </div>

          {/* Decorative Circles */}
          <div className="photo-decoration photo-decoration-one"></div>

          <div className="photo-decoration photo-decoration-two"></div>

          {/* Developer Label */}
          <div className="photo-label">

            <span></span>

            Full Stack Developer

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
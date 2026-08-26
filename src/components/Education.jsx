function Education() {
  return (
    <section id="education" className="section education-section">

      <div className="section-title">
        <span>Education</span>
        <h2>Academic Background</h2>
      </div>

      <div className="education-timeline">

        {/* BE */}
        <div className="education-card">

          <div className="education-year">
            2022 — 2026
          </div>

          <div className="education-content">
            <h3>
              Bachelor of Engineering
            </h3>

            <h4>
              Information Science and Engineering
            </h4>

            <p className="education-institute">
              SDM Institute of Technology, Ujire
            </p>

            <div className="education-result">
              CGPA: <strong>8.7 / 10</strong>
            </div>
          </div>

        </div>


        {/* PUC */}
        <div className="education-card">

          <div className="education-year">
            2022
          </div>

          <div className="education-content">
            <h3>
              Second PUC
            </h3>

            <h4>
              Pre-University Education
            </h4>

            <p className="education-institute">
              Government Composite PU College,
              Allanki, Honnavar
            </p>

            <div className="education-result">
              Percentage: <strong>86%</strong>
            </div>
          </div>

        </div>


        {/* SSLC */}
        <div className="education-card">

          <div className="education-year">
            2020
          </div>

          <div className="education-content">
            <h3>
              SSLC
            </h3>

            <h4>
              Secondary School Education
            </h4>

            <p className="education-institute">
              Government High School, Allanki
            </p>

            <div className="education-result">
              Percentage: <strong>89.6%</strong>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;
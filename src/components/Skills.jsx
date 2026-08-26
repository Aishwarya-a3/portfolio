const skills = [
  "Java",
  "Spring Boot",
  "JavaScript",
  "React",
  "HTML",
  "CSS",
  "SQL",
  "MySQL",
  "JDBC",
  "Git",
  "GitHub",
  "REST API"
];

function Skills() {
  return (
    <section id="skills" className="section">

      <div className="section-title">
        <span>02</span>
        <h2>Skills</h2>
      </div>

      <div className="skills-grid">

        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;
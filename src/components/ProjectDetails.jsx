function ProjectDetails({ project, onClose }) {

  if (!project) {
    return null;
  }

  return (
    <div className="modal-overlay">

      <div className="project-details">

        <button
          className="close-btn"
          onClick={onClose}
        >
          ×
        </button>

        <p className="project-label">
          PROJECT DETAILS
        </p>

        <h2>
          {project.title}
        </h2>

        <h3>
          Overview
        </h3>

        <p>
          {project.description}
        </p>

        <h3>
          My Role
        </h3>

        <p>
          {project.role}
        </p>

        <h3>
          Key Features
        </h3>

        <ul>
          {project.features.map((feature) => (
            <li key={feature}>
              {feature}
            </li>
          ))}
        </ul>

        <h3>
          Technologies
        </h3>

        <div className="tech-tags">

          {project.technologies.map((tech) => (
            <span key={tech}>
              {tech}
            </span>
          ))}

        </div>

        <div className="project-links">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Live Demo
          </a>

        </div>

      </div>

    </div>
  );
}

export default ProjectDetails;
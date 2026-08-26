function ProjectCard({ project, onViewDetails }) {

  return (
    <div className="project-card">

      <div className="project-number">
        0{project.id}
      </div>

      <h3>{project.title}</h3>

      <p>
        {project.shortDescription}
      </p>

      <div className="tech-tags">

        {project.technologies.map((tech) => (
          <span key={tech}>
            {tech}
          </span>
        ))}

      </div>

      <button
        className="project-btn"
        onClick={() => onViewDetails(project)}
      >
        View Details →
      </button>

    </div>
  );
}

export default ProjectCard;
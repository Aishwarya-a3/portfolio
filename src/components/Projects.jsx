import { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectDetails from "./ProjectDetails";

function Projects() {

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section">

      <div className="section-title">
        <span>04</span>
        <h2>Featured Projects</h2>
      </div>

      <p className="section-description">
        Here are some of the projects I have worked on.
      </p>

      <div className="projects-grid">

        {projects.map((project) => (

          <ProjectCard
            key={project.id}
            project={project}
            onViewDetails={setSelectedProject}
          />

        ))}

      </div>

      <ProjectDetails
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </section>
  );
}

export default Projects;
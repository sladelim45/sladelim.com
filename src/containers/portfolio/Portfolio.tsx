import React from 'react';
import './portfolio.css';

interface ProjectProps {
  title: string;
  description: string;
  sourceCode: string;
}

const projectsData = [
  {
    title: "Django Web Application",
    description: "Mock student/teacher assignment portal using Django and HTML/CSS. Deployed the website to the cloud using AWS EC2.",
    sourceCode: "https://github.com/sladelim45/DjangoWebApp"
  },
  {
    title: "Personal Website",
    description: "A personal website built using React. Showcases my projects, resume, and more.",
    sourceCode: "https://github.com/sladelim45/sladelim.com"
  },
  // Add more projects here...
];

const Project: React.FC<ProjectProps> = ({ title, description, sourceCode }) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={sourceCode} target="_blank" rel="noopener noreferrer">Source Code</a>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="projects-grid">
      {projectsData.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          sourceCode={project.sourceCode}
        />
      ))}
    </div>
  );
};

export default Projects;

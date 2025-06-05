import { useState } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with product listings, shopping cart, user authentication, and payment integration.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      image: 'project1.jpg',
      category: 'fullstack',
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A responsive task management application with drag-and-drop functionality, task categorization, and user collaboration features.',
      technologies: ['React', 'Redux', 'Firebase', 'Material-UI'],
      image: 'project2.jpg',
      category: 'frontend',
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 3,
      title: 'Real-time Chat Application',
      description: 'A real-time chat application with private messaging, group chats, and file sharing capabilities.',
      technologies: ['React', 'Socket.io', 'Node.js', 'Express', 'MongoDB'],
      image: 'project3.jpg',
      category: 'fullstack',
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A weather dashboard that displays current weather conditions and forecasts for multiple locations using external API integration.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'OpenWeather API'],
      image: 'project4.jpg',
      category: 'frontend',
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 5,
      title: 'RESTful API Service',
      description: 'A robust RESTful API service with authentication, rate limiting, and comprehensive documentation.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger'],
      image: 'project5.jpg',
      category: 'backend',
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 6,
      title: 'Content Management System',
      description: 'A custom content management system with user roles, content creation, editing, and publishing workflows.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'AWS S3'],
      image: 'project6.jpg',
      category: 'fullstack',
      demoLink: '#',
      codeLink: '#'
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1>My Projects</h1>
        <p>Explore my recent work and personal projects</p>
        
        <div className="project-filters">
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={filter === 'frontend' ? 'active' : ''} 
            onClick={() => setFilter('frontend')}
          >
            Frontend
          </button>
          <button 
            className={filter === 'backend' ? 'active' : ''} 
            onClick={() => setFilter('backend')}
          >
            Backend
          </button>
          <button 
            className={filter === 'fullstack' ? 'active' : ''} 
            onClick={() => setFilter('fullstack')}
          >
            Full Stack
          </button>
        </div>
      </div>
      
      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              {/* Replace with actual images later */}
              <div className="placeholder-image"></div>
            </div>
            
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a href={project.demoLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <a href={project.codeLink} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="projects-cta">
        <h2>Interested in working together?</h2>
        <p>I'm always open to discussing new projects and opportunities.</p>
        <a href="/contact" className="btn btn-primary">Get In Touch</a>
      </div>
    </div>
  );
};

export default Projects;

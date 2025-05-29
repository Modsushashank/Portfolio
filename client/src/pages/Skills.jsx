import { Link } from 'react-router-dom';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'React', level: 98 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML5', level: 98 },
        { name: 'CSS3/SASS', level: 96 },
        { name: 'Redux', level: 90 },
        { name: 'Responsive Design', level: 95 }
      ]
    },
    {
      category: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'RESTful APIs', level: 85 },
        { name: 'Authentication', level: 80 },
        { name: 'Server Deployment', level: 70 }
      ]
    },
    {
      category: 'Tools & Technologies',
      skills: [
        { name: 'Git/GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'npm/Yarn', level: 85 },
        { name: 'Webpack', level: 75 },
        { name: 'Docker', level: 65 },
        { name: 'CI/CD', level: 70 }
      ]
    },
    {
      category: 'Soft Skills',
      skills: [
        { name: 'Problem Solving', level: 50 },
        { name: 'Communication', level: 75 },
        { name: 'Team Collaboration', level: 90 },
        { name: 'Time Management', level: 80 },
        { name: 'Adaptability', level: 85 }
      ]
    }
  ];

  return (
    <div className="skills-container">
      <div className="skills-header">
        <h1>My Skills</h1>
        <p>A comprehensive overview of my technical and professional skills</p>
      </div>
      
      <div className="skills-grid-container">
        <div className="skills-intro">
          <div className="skills-text">
            <h2>Technical Proficiency</h2>
            <p>
              As a full-stack developer, I've cultivated a diverse skill set that spans 
              frontend and backend technologies. My focus has been on the MERN stack 
              (MongoDB, Express, React, Node.js), but I'm always expanding my knowledge 
              to stay current with industry trends and best practices.
            </p>
            <p>
              I believe in writing clean, maintainable code and building applications 
              that are not only functional but also provide excellent user experiences.
            </p>
          </div>
        </div>
        
        <div className="frontend-skills">
          <h2>Frontend Development</h2>
          <div className="skills-list">
            {skillCategories[0].skills.map((skill, skillIndex) => (
              <div className="skill-item" key={skillIndex}>
                <div className="skill-info">
                  <h3>{skill.name}</h3>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="backend-skills">
          <h2>Backend Development</h2>
          <div className="skills-list">
            {skillCategories[1].skills.map((skill, skillIndex) => (
              <div className="skill-item" key={skillIndex}>
                <div className="skill-info">
                  <h3>{skill.name}</h3>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="tools-skills">
          <h2>Tools & Technologies</h2>
          <div className="skills-list">
            {skillCategories[2].skills.map((skill, skillIndex) => (
              <div className="skill-item" key={skillIndex}>
                <div className="skill-info">
                  <h3>{skill.name}</h3>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="soft-skills">
          <h2>Soft Skills</h2>
          <div className="skills-list">
            {skillCategories[3].skills.map((skill, skillIndex) => (
              <div className="skill-item" key={skillIndex}>
                <div className="skill-info">
                  <h3>{skill.name}</h3>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="certifications">
          <h2>Certifications & Education</h2>
          <div className="certification-items">
            <div className="certification-item">
              <h3>Bachelor of Technology in Computer Science</h3>
              <p>PARUL University, 2026</p>
            </div>
            <div className="certification-item">
              <h3>Web Development Fundamentals</h3>
              {/* <p>Coursera, 2023</p> */}
            </div>
            <div className="certification-item">
              <h3>JavaScript Algorithms and Data Structures</h3>
              {/* <p>freeCodeCamp, 2022</p> */}
            </div>
            <div className="certification-item">
              <h3>Full Stack Web Development</h3>
              {/* <p>freeCodeCamp, 2022</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

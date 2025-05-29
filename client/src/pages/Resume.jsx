import { Link } from 'react-router-dom';
import '../styles/Resume.css';

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume-header">
        <h1>My Resume</h1>
        <p>Professional background and experience</p>
        <div className="resume-buttons">
          <a href="/my_resume_plain.pdf" download="Shashank_Reddy_Resume.pdf" className="resume-btn download-btn">
            <i className="fas fa-download"></i> Download Resume
          </a>
          <a 
            href="#" 
            className="resume-btn view-btn"
            onClick={(e) => {
              e.preventDefault();
              // Open resume in an iframe modal
              document.getElementById('resume-viewer-container').style.display = 'flex';
            }}
          >
            <i className="fas fa-eye"></i> View Resume
          </a>
        </div>
        
        {/* Resume Viewer Modal */}
        <div id="resume-viewer-container" className="resume-viewer-container" onClick={() => {
          document.getElementById('resume-viewer-container').style.display = 'none';
        }}>
          <div className="resume-viewer-content" onClick={(e) => e.stopPropagation()}>
            <div className="resume-viewer-header">
              <h3>Resume Preview</h3>
              <button className="close-btn" onClick={() => {
                document.getElementById('resume-viewer-container').style.display = 'none';
              }}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="resume-content-preview">
              <iframe 
                src="/my_resume_plain.pdf" 
                width="100%" 
                height="600px" 
                className="resume-iframe"
                title="Resume Preview"
                frameBorder="0"
              >
                <p>Your browser does not support iframes. Please download the resume instead.</p>
              </iframe>
              
              <div className="resume-download-prompt">
                <p>For the complete resume, please use the Download button.</p>
                <button className="resume-btn download-btn" onClick={() => {
                  window.location.href = "/my_resume_plain.pdf";
                  document.getElementById('resume-viewer-container').style.display = 'none';
                }}>
                  <i className="fas fa-download"></i> Download Full Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      
      <div className="resume-content">
        <div className="resume-section">
          <h2>Professional Summary</h2>
          <div className="resume-item summary">
            <p>
              Recent Computer Science graduate with a passion for full-stack development using React, Node.js, Express, and MongoDB.
              Focused on creating responsive, user-friendly web applications with clean, maintainable code.
              Eager to apply my technical skills and knowledge in a professional environment while continuing to learn and grow.
            </p>
          </div>
        </div>
        
        <div className="resume-section">
          <h2>Work Experience</h2>
          
          <div className="resume-item">
            <div className="resume-item-header">
              <div>
                <h3>Web Development Project</h3>
                <h4>Portfolio Website</h4>
              </div>
              <div className="resume-date">2024</div>
            </div>
            <ul className="resume-details">
              <li>Developed a responsive portfolio website using React, Node.js, Express, and MongoDB</li>
              <li>Implemented a feedback form with database connectivity using MongoDB Atlas</li>
              <li>Created a mobile-friendly design with responsive navigation</li>
              <li>Applied modern web development practices including component-based architecture</li>
            </ul>
          </div>
          
          <div className="resume-item">
            <div className="resume-item-header">
              <div>
                <h3>Academic Project</h3>
                <h4>PARUL University</h4>
              </div>
              <div className="resume-date">2026</div>
            </div>
            <ul className="resume-details">
              <li>Completed a web application project as part of coursework</li>
              <li>Built RESTful APIs with Node.js and Express</li>
              <li>Collaborated with classmates in a team environment</li>
              <li>Applied software development lifecycle principles</li>
            </ul>
          </div>
          

        </div>
        
        <div className="resume-section">
          <h2>Education</h2>
          
          <div className="resume-item">
            <div className="resume-item-header">
              <div>
                <h3>Bachelor of Technology in Computer Science</h3>
                <h4>PARUL University</h4>
              </div>
              <div className="resume-date">2022 - 2026</div>
            </div>
            <ul className="resume-details">
              <li>Graduated with First Class</li>
              <li>Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems</li>
              <li>Final Year Project: Developed a responsive portfolio website using MERN stack</li>
            </ul>
          </div>
          
          <div className="resume-item">
            <div className="resume-item-header">
              <div>
                <h3>XII-Intermediate</h3>
                <h4>Sri Chaitanya Junior College | Medchal, Telangana, India</h4>
              </div>
              <div className="resume-date">2020 - 2022</div>
            </div>
            <ul className="resume-details">
              <li>Percentage: 88.6%</li>
            </ul>
          </div>
          
          <div className="resume-item">
            <div className="resume-item-header">
              <div>
                <h3>X-High School</h3>
                <h4>St. Mary's Vidyaniketan High School | Pregnapur, Telangana, India</h4>
              </div>
              <div className="resume-date">2019 - 2020</div>
            </div>
            <ul className="resume-details">
              <li>Percentage: 98%</li>
            </ul>
          </div>
        </div>
        
        <div className="resume-section">
          <h2>Skills</h2>
          
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <ul>
                <li>React</li>
                <li>JavaScript (ES6+)</li>
                <li>HTML5 & CSS3</li>
                <li>Responsive Design</li>
                <li>UI/UX Principles</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>RESTful APIs</li>
                <li>Authentication & Authorization</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>Tools & Others</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>npm</li>
                <li>Vite</li>
                <li>Problem Solving</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="resume-section">
          <h2>Certifications</h2>
          
          <div className="certifications-list">
            <div className="certification">
              <h3>Web Development Fundamentals</h3>
              <p>Coursera, 2023</p>
            </div>
            
            <div className="certification">
              <h3>Introduction to React</h3>
              <p>freeCodeCamp, 2023</p>
            </div>
            
            <div className="certification">
              <h3>JavaScript Algorithms and Data Structures</h3>
              <p>freeCodeCamp, 2022</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="resume-cta">
        <h2>Interested in working together?</h2>
        <p>Feel free to reach out to discuss potential opportunities.</p>
        <Link to="/contact" className="contact-btn">Contact Me</Link>
      </div>
    </div>
  );
};

export default Resume;

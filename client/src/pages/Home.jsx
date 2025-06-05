import { Link } from "react-router-dom";
import FeedbackForm from "../components/FeedbackForm";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to My Portfolio</h1>
          <p>
            Full Stack Developer specializing in React, Node.js, and MongoDB
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">
              View Projects
            </Link>
            <Link to="/contact" className="btn btn-primary">
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      <div className="section introduction">
        <h2>
          Hi, I'm <span className="highlight">Shashank Reddy</span>
        </h2>
        <p>
          I'm a passionate full-stack developer with expertise in modern web
          technologies. I love building responsive, user-friendly applications
          that solve real-world problems.
        </p>
        <Link to="/about" className="btn btn-outline">
          Learn More About Me
        </Link>
      </div>

      <div className="section featured-projects">
        <h2>Featured Projects</h2>
        <div className="project-cards">
          <div className="project-card">
            <div className="project-image placeholder"></div>
            <h3>Project One</h3>
            <p>
              A brief description of your first featured project and the
              technologies used.
            </p>
            <Link to="/projects" className="btn btn-sm">
              View Details
            </Link>
          </div>

          <div className="project-card">
            <div className="project-image placeholder"></div>
            <h3>Project Two</h3>
            <p>
              A brief description of your second featured project and the
              technologies used.
            </p>
            <Link to="/projects" className="btn btn-sm">
              View Details
            </Link>
          </div>

          <div className="project-card">
            <div className="project-image placeholder"></div>
            <h3>Project Three</h3>
            <p>
              A brief description of your third featured project and the
              technologies used.
            </p>
            <Link to="/projects" className="btn btn-sm">
              View Details
            </Link>
          </div>
        </div>
      </div>

      <div className="section skills-overview">
        <h2>My Skills</h2>
        <div className="skills-cards">
          <div className="skill-card">
            <h3>Frontend</h3>
            <ul className="skill-list">
              <li>
                <span className="skill-arrow">▸</span> React-Vite
              </li>
              <li>
                <span className="skill-arrow">▸</span> JavaScript
              </li>
              <li>
                <span className="skill-arrow">▸</span> HTML/CSS
              </li>
              <li>
                <span className="skill-arrow">▸</span> Responsive Design
              </li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Backend</h3>
            <ul className="skill-list">
              <li>
                <span className="skill-arrow">▸</span> Node.js
              </li>
              <li>
                <span className="skill-arrow">▸</span> Express
              </li>
              <li>
                <span className="skill-arrow">▸</span> MongoDB
              </li>
              <li>
                <span className="skill-arrow">▸</span> RESTful APIs
              </li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Tools & Others</h3>
            <ul className="skill-list">
              <li>
                <span className="skill-arrow">▸</span> Git & GitHub
              </li>
              <li>
                <span className="skill-arrow">▸</span> VS Code
              </li>
              <li>
                <span className="skill-arrow">▸</span> Problem Solving
              </li>
            </ul>
          </div>
        </div>
        <div className="center-button">
          <Link to="/skills" className="btn btn-outline">
            View All Skills
          </Link>
        </div>
      </div>

      {/* <div className="section feedback">
        <h2>I'd Love to Hear From You</h2>
        <FeedbackForm />
      </div> */}
    </div>
  );
};

export default Home;

import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Me</h1>
        <div className="about-subtitle">
          <p>Get to know me better</p>
        </div>
      </div>
      
      <div className="about-content">
        <div className="about-image-container">
          <div className="about-image">
            {/* Replace with your image */}
            <div className="placeholder-image"></div>
          </div>
        </div>
        
        <div className="about-text">
          <h2>Who am I?</h2>
          <p>
            Hello! I'm <span className="highlight">Shashank Reddy</span>, a passionate full-stack developer 
            with a strong foundation in modern web technologies. I specialize in building 
            responsive, user-friendly applications that solve real-world problems.
          </p>
          
          <p>
            With expertise in React, Node.js, Express, and MongoDB, I enjoy creating 
            seamless experiences that connect frontend interfaces with powerful backend 
            systems. My approach to development is centered around clean code, 
            performance optimization, and intuitive user experiences.
          </p>
          
          <h2>My Journey</h2>
          <p>
            My journey in web development began [2024]. Since then, 
            I've continuously expanded my skills through both formal education and 
            self-directed learning. I hold [your degree/certification] and have 
            completed numerous projects that have sharpened my abilities in 
            various aspects of development.
          </p>
          
          <h2>What I Do</h2>
          <div className="services">
            <div className="service-item">
              <h3>Frontend Development</h3>
              <p>
                Creating responsive, interactive user interfaces using React, 
                JavaScript, HTML, and CSS with a focus on performance and accessibility.
              </p>
            </div>
            
            <div className="service-item">
              <h3>Backend Development</h3>
              <p>
                Building robust server-side applications with Node.js, Express, 
                and MongoDB to handle data storage, API integrations, and business logic.
              </p>
            </div>
            
            <div className="service-item">
              <h3>Full Stack Solutions</h3>
              <p>
                Connecting frontend and backend systems to create cohesive, 
                end-to-end solutions that deliver exceptional user experiences.
              </p>
            </div>
          </div>
          
          <h2>Personal Interests</h2>
          <p>
            When I'm not coding, you can find me [Developing New Projects, Learning New Technologies,Playing Cricket]. 
            I believe that maintaining a balance between work and personal life 
            is essential for creativity and productivity.
          </p>
          
          <div className="about-cta">
            <a href="/contact" className="btn btn-primary">Get In Touch</a>
            <a href="/resume" className="btn btn-outline">View Resume</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
